/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Box, VStack } from 'native-base';
import AppCustomCard from '../../Common/AppCustomCard';
import { Colors } from '../../Common/Utils/Constants';

const ManagedService = () => {
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
                <AppCustomCard
                    image={require('../../Common/Utils/assets/images/cloud.png')}
                />
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
                    NGN enables clients to align infrastructure costs and management processes with business processes, enables creative management and financial propositions, leverages NGN partner relationships etc.
                </Text>

                <TouchableOpacity
                    style={{
                        backgroundColor: Colors.ButtonColorLight,
                        paddingVertical: 10,
                        paddingHorizontal: 25,
                        borderRadius: 20,
                        alignSelf: 'center',
                    }}
                >
                    <Text style={{
                        color: '#000000',
                        fontWeight: '500',
                    }}>
                        Know More
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ManagedService;
