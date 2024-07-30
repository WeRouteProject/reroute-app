/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScaleOrdinal } from 'd3-scale';

interface LegendProps {
    colorScale: ScaleOrdinal<string, string>;
}

export default function Legend({ colorScale }: LegendProps) {
    return (
        <View style={styles.legend}>
            {colorScale.domain().map(continent => (
                <View key={continent} style={styles.legendItem}>
                    <View style={[styles.colorBox, { backgroundColor: colorScale(continent) }]} />
                    <Text style={[styles.legendText, { color: colorScale(continent) }]}>{continent}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    legend: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        marginBottom: 5,
    },
    colorBox: {
        width: 12,
        height: 12,
        marginRight: 5,
        borderRadius: 6, // Make it circular
    },
    legendText: {
        fontSize: 14,
        fontWeight: '500',
    },
});