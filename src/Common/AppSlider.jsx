/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { FlatList } from 'native-base';

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
        <View
            style={{
                width: width - 20,
                backgroundColor: '#fff',
                padding: 8,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                //elevation: 3,
                marginTop: 5,
                marginRight: 8,
            }}>
            <Image
                source={item.image}
                style={{
                    width: '100%',
                    height: 170,
                    borderRadius: 5,
                }}
            />
        </View>
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
                paddingVertical: 10,
            }}
        />
    );
};

export default AppSlider;