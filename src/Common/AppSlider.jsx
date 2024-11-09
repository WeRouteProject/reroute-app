/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'native-base';
import AppCustomCard from '../Common/AppCustomCard';
import { useNavigation } from '@react-navigation/native';

const images = [
    require('../../src/Common/Utils/assets/images/Sliders1/new3.png'),
    require('../../src/Common/Utils/assets/images/Sliders1/p7.png'),
    require('../../src/Common/Utils/assets/images/Sliders1/image.png'),
    require('../../src/Common/Utils/assets/images/Sliders1/partners.png'),
];

const data = [
    { id: '1', title: 'Card 1', image: images[0] },
    { id: '2', title: 'Card 2', image: images[1] },
    { id: '3', title: 'Card 3', image: images[2] },
    { id: '4', title: 'Card 4', image: images[3] },
];

const { width } = Dimensions.get('window');

const AppSlider = () => {
    const navigation = useNavigation();
    const flatListRef = useRef(null);
    const currentIndex = useRef(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (currentIndex.current === data.length - 1) {
                currentIndex.current = 0;
            } else {
                currentIndex.current = currentIndex.current + 1;
            }

            flatListRef.current?.scrollToIndex({
                animated: true,
                index: currentIndex.current,
            });
        }, 2000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const handleImagePress = (id) => {
        console.log('Image pressed:', id);
        if (id === '1') {
            navigation.navigate('Form');
        }
        if (id === '2') {
            navigation.navigate('projects');
        }
        else if (id === '3') {
            navigation.navigate('Case-Studies');
        }
    };

    const getItemLayout = (_, index) => ({
        length: width,
        offset: width * index,
        index,
    });

    const renderItem = ({ item }) => (
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleImagePress(item.id)}
                style={{ width: '95%' }} // Adjust this value if needed for proper width
            >
                <AppCustomCard image={item.image} />
            </TouchableOpacity>
        </View>
    );

    const handleScrollFailed = () => {
        flatListRef.current?.scrollToIndex({
            index: currentIndex.current,
            animated: false,
        });
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                ref={flatListRef}
                horizontal
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                snapToInterval={width}
                decelerationRate="fast"
                pagingEnabled
                contentContainerStyle={{
                    paddingVertical: 20,
                }}
                style={{ width: width }}
                getItemLayout={getItemLayout}
                onScrollToIndexFailed={handleScrollFailed}
            />
        </View>
    );
};

export default AppSlider;