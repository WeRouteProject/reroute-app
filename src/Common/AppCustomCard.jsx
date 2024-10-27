/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const AppCustomCard = ({ image }) => {
    return (
        <View style={styles.cardContainer}>
            <Image
                source={image}
                style={styles.cardImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: width - 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 15,
        marginRight: 20,
        height: 200,
    },
    cardImage: {
        width: '103%',
        height: '100%',
        borderRadius: 10,
    },
});

export default AppCustomCard;
