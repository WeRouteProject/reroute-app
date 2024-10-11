/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Text } from 'native-base';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SolutionCard = ({ title, subtitle, image, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.card}>
        <LinearGradient
            colors={['#1E3B70', '#29539B']}
            style={styles.gradient}
        >
            <Box>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </Box>
            <Image source={image} style={styles.image} />
        </LinearGradient>
    </TouchableOpacity>
);

const AppCustomGrid = ({ solutions, onSolutionPress }) => {
    return (
        <Box style={styles.grid}>
            {solutions.map((solution, index) => (
                <SolutionCard
                    key={index}
                    title={solution.title}
                    subtitle={solution.subtitle}
                    image={solution.image}
                    onPress={() => onSolutionPress(solution)}
                />
            ))}
        </Box>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '48%',
        height: 180,
        borderRadius: 15,
        marginBottom: 15,
        justifyContent: 'space-between',
    },
    gradient: {
        flex: 1,
        borderRadius: 15,
        padding: 15,
        justifyContent: 'space-between',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'white',
        fontSize: 14,
        opacity: 0.9,
    },
    image: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '90%',
        height: 100,
        resizeMode: 'contain',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default AppCustomGrid;
