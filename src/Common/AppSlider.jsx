/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions } from 'react-native';
import { FlatList } from 'native-base';
import AppCustomCard from '../Common/AppCustomCard'; // Importing the reusable CustomCard component

const images = [
    require('../../src/Common/Utils/assets/images/slide1.jpg'),
    require('../../src/Common/Utils/assets/images/slide1.jpg'),
    require('../../src/Common/Utils/assets/images/slide1.jpg'),
];

const data = [
    { id: '1', title: 'Card 1', image: images[0] },
    { id: '2', title: 'Card 2', image: images[1] },
    { id: '3', title: 'Card 3', image: images[2] },
];

const { width } = Dimensions.get('window');

const AppSlider = () => {

    const renderItem = ({ item }) => (
        <AppCustomCard image={item.image} />
    );

    return (
        <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            decelerationRate="fast"
            pagingEnabled
            contentContainerStyle={{
                paddingHorizontal: 10,
                paddingVertical: 20,
            }}
        />
    );
};

export default AppSlider;
