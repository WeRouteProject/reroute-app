/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useCallback } from 'react';
import { Dimensions } from 'react-native';
import { Box, Text, ScrollView, VStack } from 'native-base';
import Svg, { Circle, G, Text as SvgText, Line, Rect, LinearGradient, Defs, Stop } from 'react-native-svg';
import { scaleLinear, scaleBand, scaleOrdinal, scaleSqrt } from 'd3-scale';
import { mean, rollups } from 'd3-array';
import { forceSimulation, forceX, forceY, forceCollide, Simulation } from 'd3-force';
import { happinessData as data } from '../data/happiness_data';
import Legend from './Legend';
import { Colors, FontSizes } from '../Common/Utils/Constants';
import AppHeader from '../Common/AppHeader';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const CHART_WIDTH = screenWidth * 0.8;
const CHART_HEIGHT = screenHeight * 0.3;
const MARGIN = { top: 40, right: 20, bottom: 40, left: 80 };

interface Node {
    x: number;
    y: number;
    happiness: number;
    continent: string;
    country: string;
}

export default function HappinessChart({ navigation }) {
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

    const colorRange = ['#4c94bd', '#77adee', '#3d79a4', '#619b8a', '#eae2b7', '#dda0dd'];
    const colorScale = scaleOrdinal<string>().domain(continents).range(colorRange);

    const xScale = scaleLinear().domain([1, 9]).range([MARGIN.left, CHART_WIDTH - MARGIN.right]);
    const yScale = scaleBand().domain(continents).range([MARGIN.top, CHART_HEIGHT - MARGIN.bottom]).padding(0.2);
    const radiusScale = scaleSqrt().domain([2, 9]).range([4, 6]);

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
        <ScrollView>
            <AppHeader navigation={navigation} title="Happiness Index" />
            <VStack space={4} alignItems="center" bg={Colors.white} py={4} borderRadius={10}>
                <Text fontSize="xl" fontWeight="bold" color="black" textAlign="center">
                    The Happiest Countries
                </Text>
                <Text fontSize="md" color="gray.600" textAlign="center">
                    Clients of Weroute System
                </Text>
                <Legend colorScale={colorScale} />
                <Box
                    width={CHART_WIDTH}
                    height={CHART_HEIGHT}
                    borderWidth={2}
                    borderColor={Colors.uniqueButton}
                    borderRadius={5}
                    overflow="hidden"
                    shadow={5}
                >
                    <Svg width={CHART_WIDTH} height={CHART_HEIGHT}>
                        <Defs>
                            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                <Stop offset="0" stopColor="#1E3B70" stopOpacity="1" />
                                <Stop offset="1" stopColor="#29539B" stopOpacity="1" />
                            </LinearGradient>
                        </Defs>
                        <Rect x={0} y={0} width={CHART_WIDTH} height={CHART_HEIGHT} fill="url(#grad)" />
                        <G>
                            {/* X-axis */}
                            <Line
                                x1={MARGIN.left}
                                y1={CHART_HEIGHT - MARGIN.bottom}
                                x2={CHART_WIDTH - MARGIN.right}
                                y2={CHART_HEIGHT - MARGIN.bottom}
                                stroke="white"
                                strokeWidth={2}
                            />
                            {/* Y-axis */}
                            <Line
                                x1={MARGIN.left}
                                y1={MARGIN.top - 10}
                                x2={MARGIN.left}
                                y2={CHART_HEIGHT - MARGIN.bottom + 1}
                                stroke="white"
                                strokeWidth={2}
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
                                            fill="white"
                                            fontSize="8"
                                        >
                                            {node.country}
                                        </SvgText>
                                    )}
                                </React.Fragment>
                            ))}
                            {/* X-axis label */}
                            <SvgText
                                x={CHART_WIDTH / 2}
                                y={CHART_HEIGHT - 10}
                                textAnchor="middle"
                                fill="white"
                                fontSize="12"
                            >
                                Happiness Score (out of 10)
                            </SvgText>
                            {/* Y-axis labels */}
                            {continents.map((continent, i) => (
                                <SvgText
                                    key={i}
                                    x={10}
                                    y={yScale(continent)! + yScale.bandwidth() / 2}
                                    textAnchor="start"
                                    alignmentBaseline="middle"
                                    fill="white"
                                    fontSize={FontSizes.tiny}
                                >
                                    {continent}
                                </SvgText>
                            ))}
                        </G>
                    </Svg>
                </Box>
                <Box bg="blue.50" p={4} borderRadius="md" width="90%">
                    <Text fontSize="lg" fontWeight="bold" color="#1E3B70" mb={2}>Key Insights:</Text>
                    <VStack space={1}>
                        <Text fontSize="sm" color="#4A4A4A">• Oceania countries lead in happiness scores</Text>
                        <Text fontSize="sm" color="#4A4A4A">• North American countries follow closely</Text>
                        <Text fontSize="sm" color="#4A4A4A">• African countries show lower happiness scores</Text>
                        <Text fontSize="sm" color="#4A4A4A">• Asia displays a wide range of happiness levels</Text>
                    </VStack>
                </Box>
            </VStack>
        </ScrollView>
    );
}