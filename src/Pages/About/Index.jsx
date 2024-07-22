/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, Alert, View } from 'react-native';
import { Box, Text, Image, VStack, Button, Pressable, Icon } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AboutLogo from '../../Common/Utils/assets/images/aboutus.png';
import { Colors } from '../../Common/Utils/Constants';

const About = ({ navigation }) => {
    const { width } = useWindowDimensions();

    const handleLearnMorePress = () => {
        Alert.alert(
            'Learn More',
            'To learn more about our services, please visit our website or contact us directly.'
        );
    };

    return (
        <View style={styles.container}>
            <Box style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Icon as={MaterialIcons} name="arrow-back" size="md" color={Colors.primary} />
                </Pressable>
                <Text fontSize="xl" bold color={Colors.primary}>
                    ABOUT US
                </Text>
                <Box width={8} />
            </Box>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Box style={styles.mainContainer}>
                    <VStack space={6} px={4}>
                        <Image
                            source={AboutLogo}
                            alt="About Us Image"
                            style={styles.aboutImage}
                        />
                        <Text fontSize="3xl" bold color="#333" textAlign="center">
                            About Weroute
                        </Text>
                        <Text style={[styles.visionMissionBox]} fontSize="sm" color="#555" textAlign="center">
                            At Weroute, we view our clients as visionaries, recognizing each project as a potential
                            game-changer. We offer comprehensive support that goes far beyond coding,
                            combining our business-oriented mindset with tech expertise to ensure our clients
                            excel in the competitive market through our products.
                        </Text>
                        <Button onPress={handleLearnMorePress} style={styles.learnMoreButton}>
                            <Text color="white" bold>Learn more</Text>
                        </Button>
                    </VStack>
                </Box>

                <Box style={styles.sectionContainer}>

                    <Box style={[styles.visionMissionBox]}>
                        <VStack space={3} alignItems="center">
                            <Text fontSize="lg" bold color="#4a69bd" textAlign="center">
                                Our Mission
                            </Text>
                            <Text fontSize="sm" color="#555" textAlign="center">
                                To empower businesses through innovative IT solutions, ensuring optimal
                                performance, security, and growth. We are committed to delivering exceptional
                                service, fostering long-term client relationships, and driving technological
                                advancements to meet the evolving needs of our clients.
                            </Text>
                        </VStack>
                    </Box>
                    <Box style={styles.visionMissionBox} marginTop={8}>
                        <VStack space={3} alignItems="center">
                            <Text fontSize="lg" bold color="#4a69bd" textAlign="center">
                                Our Vision
                            </Text>
                            <Text fontSize="sm" color="#555" textAlign="center">
                                To be a global leader in IT consultancy, recognized for our commitment to
                                excellence, innovation, and client satisfaction. We envision a future where our
                                cutting-edge solutions drive transformative changes, enabling businesses to achieve
                                their full potential in the digital age.
                            </Text>
                        </VStack>
                    </Box>
                </Box>

                <Box style={styles.sectionContainer}>
                    <Text fontSize="2xl" bold color="#333" textAlign="center" mb={4}>
                        Our Commitment
                    </Text>
                    {[
                        {
                            title: 'What We Stand For',
                            content: "At Weroute, we are dedicated to delivering quality technology services and solutions, professional outsourcing and managed services, Software development and network services that provide true business value to our clients, enabling them to achieve their goals and initiatives."
                        },
                        {
                            title: 'Who We Are',
                            content: "We are certified expert engineers with over 14 years of experience, focusing on the digital transformation of businesses in both the software and networking domains. With prior experience in the enterprise, financial, healthcare, logistics, and service provider markets, we specialize in developing innovative products and services that ensure absolute business growth."
                        },
                        {
                            title: 'Software Development',
                            content: "In the software development industry, Weroute is committed to delivering outstanding web development, mobile app development, APIs, data analytics, AI, and UI/UX solutions. We guide our clients throughout their journey to achieve sustainable business growth."
                        },
                        {
                            title: 'Networking Expertise',
                            content: "In the networking segment, we excel in implementing Greenfield and Brownfield data centers across regions, designing complex networks, multi-vendor integrations, audit and consultancy services, program management, and vendor management services. We provide top-notch network services and solutions, including professional services, network automation, designing, implementation, network/cyber security, SD-WAN solutions, data center deployment, migration, campus networking, wireless WiFi, LAN, POC, project management, cloud security, and technical manpower resources."
                        }
                    ].map((item, index) => (
                        <Box key={index} style={styles.infoBox}>
                            <Text fontSize="lg" bold color="#4a69bd" mb={2} textAlign="center">
                                {item.title}
                            </Text>
                            <Text fontSize="sm" color="#555" lineHeight={24} textAlign="center">
                                {item.content}
                            </Text>
                        </Box>
                    ))}
                </Box>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white, // Elegant light background
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
    scrollContent: {
        flexGrow: 1,
        padding: 16,
    },
    mainContainer: {
        backgroundColor: '#F0F8FF',
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
    },
    aboutImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    learnMoreButton: {
        backgroundColor: '#4a69bd',
        borderRadius: 30,
        paddingVertical: 12,
    },
    sectionContainer: {
        backgroundColor: '#F0F8FF',
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
    },
    visionMissionBox: {
        flex: 1,
        backgroundColor: '#f7f9fc',
        borderRadius: 15,
        padding: 20,
        borderWidth: 1,
        borderColor: '#e1e8ed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoBox: {
        backgroundColor: '#f7f9fc',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#e1e8ed',
    },
});

export default About;
