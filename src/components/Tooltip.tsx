/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScaleOrdinal } from 'd3-scale';

interface TooltipProps {
    data: {
        country: string;
        happiness: number;
        continent: string;
    };
    colorScale: ScaleOrdinal<string, string>;
}

export default function Tooltip({ data, colorScale }: TooltipProps) {
    //console.log('Tooltip data:', data);
    //console.log('Tooltip colorScale:', colorScale);

    return (
        <View style={styles.tooltip}>
            <Text style={styles.country}>{data.country}</Text>
            <View style={styles.info}>
                <Text style={styles.score}>{data.happiness.toFixed(2)}/10</Text>
                <Text style={[styles.continent, { backgroundColor: colorScale(data.continent) }]}>
                    {data.continent}
                </Text>
            </View>
            <View style={styles.bar}>
                <View
                    style={[
                        styles.barForeground,
                        {
                            width: `${data.happiness * 10}%`,
                            backgroundColor: colorScale(data.continent),
                        },
                    ]}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tooltip: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    country: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    score: {
        fontSize: 14,
    },
    continent: {
        fontSize: 12,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 3,
        color: 'white',
    },
    bar: {
        height: 3,
        backgroundColor: '#eee',
    },
    barForeground: {
        height: '100%',
    },
});
