/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Text, Heading, Center } from 'native-base';
import AppCustomGrid from './AppCustomGrid';
import { useNavigation } from '@react-navigation/native';

const AppSolution = () => {
    const navigation = useNavigation();
    const solutions = [
        {
            title: 'Website',
            subtitle: 'Development',
            image: require('../Common/Utils/assets/images/solutions/web.png'),
            screen: 'WebsiteDevelopment',
        },
        {
            title: 'WAN',
            subtitle: 'Solution',
            image: require('../Common/Utils/assets/images/solutions/wan.png'),
            screen: 'wan-sol',
        },
        {
            title: 'Automation',
            subtitle: 'Solution',
            image: require('../Common/Utils/assets/images/solutions/autos.png'),
            screen: 'AutomationSolution',
        },
        {
            title: 'Mobile',
            subtitle: 'Development',
            image: require('../Common/Utils/assets/images/solutions/mobile.png'),
            screen: 'MobileDevSolution',
        },
        {
            title: 'SDN',
            subtitle: 'Software Defined Networking',
            image: require('../Common/Utils/assets/images/solutions/sdn.png'),
            screen: 'SDNSolution',
        },
        {
            title: 'Cloud',
            subtitle: 'Solution',
            image: require('../Common/Utils/assets/images/solutions/clouds.png'),
            screen: 'CloudSolution',
        },
    ];

    const handleSolutionPress = (solution) => {
        navigation.navigate(solution.screen);
    };

    return (
        <Box
            style={{
                flex: 1,
                backgroundColor: 'white',
                padding: 15,
            }}
        >
            <Center mb={6}>
                <Heading
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}
                >
                    Solutions
                </Heading>
                <Text
                    style={{
                        fontSize: 16,
                        color: '#666',
                    }}
                >
                    Serving for you
                </Text>
            </Center>

            <AppCustomGrid solutions={solutions} onSolutionPress={handleSolutionPress} />
        </Box>
    );
};

export default AppSolution;
