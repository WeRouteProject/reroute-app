/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image } from 'react-native';
import { Box, Text, VStack, HStack, Heading, Center } from 'native-base';

const AppSolution = () => {
    const solutions = [
        {
            title: 'Website',
            subtitle: 'Development',
            image: require('../Common/Utils/assets/images/dev.jpg'),  // Update path as per your project structure
        },
        {
            title: 'WAN',
            subtitle: 'Solution',
            image: require('../Common/Utils/assets/images/dev.jpg'),
        },
        {
            title: 'Automation',
            subtitle: '',
            image: require('../Common/Utils/assets/images/dev.jpg'),
        },
        {
            title: 'Virtualization',
            subtitle: '',
            image: require('../Common/Utils/assets/images/dev.jpg'),
        },
        {
            title: 'SDN',
            subtitle: 'Software Defined Networking',
            image: require('../Common/Utils/assets/images/dev.jpg'),
        },
        {
            title: 'Cloud',
            subtitle: 'Solution',
            image: require('../Common/Utils/assets/images/dev.jpg'),
        }
    ];

    const SolutionCard = ({ title, subtitle, image }) => (
        <Box
            style={{
                width: '48%',
                height: 180,
                backgroundColor: '#1a73e8', // Blue color from image
                borderRadius: 15,
                marginBottom: 15,
                padding: 15,
                justifyContent: 'space-between',
            }}
        >
            <VStack>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 14,
                        opacity: 0.9,
                    }}
                >
                    {subtitle}
                </Text>
            </VStack>
            <Image
                source={image}
                style={{
                    width: '100%',
                    height: 80,
                    resizeMode: 'contain',
                    alignSelf: 'flex-end',
                }}
            />
        </Box>
    );

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

            <Box
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                {solutions.map((solution, index) => (
                    <SolutionCard
                        key={index}
                        title={solution.title}
                        subtitle={solution.subtitle}
                        image={solution.image}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default AppSolution;