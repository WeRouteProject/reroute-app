/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AppCustomCard from '../../../Common/AppCustomCard';
import { Colors } from '../../../Common/Utils/Constants';
import { useNavigation } from '@react-navigation/native';

const ConsultingService = () => {

    const navigation = useNavigation();

    const handleImagePress = () => {
        navigation.navigate('ConsultingServiceDetails', {
            // image: require('../../../Common/Utils/assets/images/services/cloud.png'),
        });
    };
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#f5f5f5',
            padding: 10,
            height: '100%',
        }}>
            <View style={{
                flex: 0.6,
                marginBottom: 5,
            }}>
                <TouchableOpacity onPress={handleImagePress}>
                    <AppCustomCard
                        image={require('../../../Common/Utils/assets/images/services/it.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 0.4,
                justifyContent: 'space-between',
                paddingVertical: 10,
            }}>
                <Text style={{
                    fontSize: 14,
                    color: '#333',
                    textAlign: 'center',
                    paddingHorizontal: 15,
                    lineHeight: 20,
                    marginBottom: 15,
                }}>
                    IT and consulting services help clients optimize technology, streamline operations, and implement innovative solutions for digital transformation and competitive advantage.
                </Text>

                <TouchableOpacity
                    style={{
                        backgroundColor: Colors.ButtonColorDark,
                        paddingVertical: 10,
                        paddingHorizontal: 25,
                        borderRadius: 20,
                        alignSelf: 'center',
                    }}
                    onPress={handleImagePress}
                >
                    <Text style={{
                        color: '#fff',
                        fontWeight: '500',
                    }}>
                        Know More
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ConsultingService;
