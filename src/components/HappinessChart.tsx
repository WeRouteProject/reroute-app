/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useCallback } from 'react';
import { View, Dimensions, Text, StyleSheet, ScrollView } from 'react-native';
import Svg, { Circle, G, Text as SvgText, Line, Rect } from 'react-native-svg';
import { scaleLinear, scaleBand, scaleOrdinal, scaleSqrt } from 'd3-scale';
import { mean, rollups } from 'd3-array';
import { forceSimulation, forceX, forceY, forceCollide, Simulation } from 'd3-force';
import { happinessData as data } from '../data/happiness_data';
import Legend from './Legend';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const CHART_WIDTH = screenWidth * 0.9;
const CHART_HEIGHT = screenHeight * 0.6;
const MARGIN = { top: 40, right: 20, bottom: 40, left: 80 };

interface Node {
    x: number;
    y: number;
    happiness: number;
    continent: string;
    country: string;
}

export default function HappinessChart() {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [hovered, setHovered] = useState<Node | null>(null);

    if (!data || data.length === 0) {
        return <Text>No data available</Text>;
    }

    const continents = rollups(
        data,
        v => mean(v, d => d.happiness),
        d => d.continent
    )
        .sort((a, b) => (b[1] as number) - (a[1] as number))
        .map(d => d[0]);

    const colorRange = ['#fe7f2d', '#fcca46', '#a1c181', '#619b8a', '#eae2b7', '#dda0dd'];
    const colorScale = scaleOrdinal<string>().domain(continents).range(colorRange);

    const xScale = scaleLinear().domain([1, 9]).range([MARGIN.left, CHART_WIDTH - MARGIN.right]);
    const yScale = scaleBand().domain(continents).range([MARGIN.top, CHART_HEIGHT - MARGIN.bottom]).padding(0.2);
    const radiusScale = scaleSqrt().domain([1, 9]).range([2, 8]);

    const simulationRef = React.useRef<Simulation<Node, undefined> | null>(null);

    const initializeSimulation = useCallback(() => {
        simulationRef.current = forceSimulation(data as Node[])
            .force('x', forceX<Node>(d => xScale(d.happiness)).strength(0.8))
            .force('y', forceY<Node>(d => (yScale(d.continent) || 0) + yScale.bandwidth() / 2).strength(0.3))
            .force('collide', forceCollide<Node>(d => radiusScale(d.happiness) + 1))
            .on('tick', () => setNodes([...simulationRef.current!.nodes()]));
    }, [xScale, yScale, radiusScale]);

    useEffect(() => {
        initializeSimulation();

        return () => {
            if (simulationRef.current) {
                simulationRef.current.stop();
            }
        };
    }, [initializeSimulation]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>The Happiest Countries Clients Of Weroute System</Text>
            <Legend colorScale={colorScale} />
            <View style={styles.chartContainer}>
                <Svg width={CHART_WIDTH} height={CHART_HEIGHT}>
                    <Rect x={0} y={0} width={CHART_WIDTH} height={CHART_HEIGHT} fill="#f5f5f5" />
                    <G>
                        {/* X-axis */}
                        <Line
                            x1={MARGIN.left}
                            y1={CHART_HEIGHT - MARGIN.bottom}
                            x2={CHART_WIDTH - MARGIN.right}
                            y2={CHART_HEIGHT - MARGIN.bottom}
                            stroke="#333"
                            strokeWidth={1}
                        />
                        {/* Y-axis */}
                        <Line
                            x1={MARGIN.left}
                            y1={MARGIN.top}
                            x2={MARGIN.left}
                            y2={CHART_HEIGHT - MARGIN.bottom}
                            stroke="#333"
                            strokeWidth={1}
                        />
                        {nodes.map((node, i) => (
                            <React.Fragment key={i}>
                                <Circle
                                    cx={node.x}
                                    cy={node.y}
                                    r={radiusScale(node.happiness)}
                                    fill={colorScale(node.continent)}
                                    onPress={() => setHovered(node)}
                                />
                                {hovered === node && (
                                    <SvgText
                                        x={node.x}
                                        y={node.y - radiusScale(node.happiness) - 5}
                                        textAnchor="middle"
                                        fill="#333"
                                        fontSize="8"
                                    >
                                        {node.country}
                                    </SvgText>
                                )}
                            </React.Fragment>
                        ))}
                    </G>
                    {/* X-axis label */}
                    <SvgText x={CHART_WIDTH / 2} y={CHART_HEIGHT - 5} textAnchor="middle" fill="#333" fontSize="10">
                        Happiness out of 10 →
                    </SvgText>
                    {/* Y-axis labels */}
                    {continents.map((continent, i) => (
                        <SvgText
                            key={i}
                            x={5}
                            y={yScale(continent)! + yScale.bandwidth() / 2}
                            textAnchor="start"
                            alignmentBaseline="middle"
                            fill="#333"
                            fontSize="8"
                        >
                            {continent}
                        </SvgText>
                    ))}
                </Svg>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        paddingVertical: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#000',
    },
    chartContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
});