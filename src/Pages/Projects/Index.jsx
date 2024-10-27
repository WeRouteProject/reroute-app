/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Box, Text, VStack, HStack, Icon, Pressable, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import AppHeader from '../../Common/AppHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OnGoingProject = ({ client, location, description }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <Pressable onPress={toggleExpand}>
            {({ isPressed }) => (
                <Box
                    bg="white"
                    p={6}
                    rounded="xl"
                    borderWidth={1}
                    borderColor="coolGray.200"
                    shadow={3}
                    mb={4}
                    style={{
                        transform: [{ scale: isPressed ? 0.98 : 1 }],
                        opacity: isPressed ? 0.8 : 1,
                    }}
                >
                    <VStack space={3}>
                        <Text fontSize="xl" fontWeight="bold" color="#1E3B70">
                            {client}
                        </Text>
                        <HStack space={2} alignItems="center">
                            <Icon as={Ionicons} name="location" color="#29539B" size="sm" />
                            <Text fontSize="sm" color="coolGray.600">{location}</Text>
                        </HStack>
                        <Text fontSize="sm" fontWeight="medium" color="#1E3B70" mt={2}>
                            Description:
                        </Text>
                        <Text fontSize="sm" color="coolGray.600" numberOfLines={expanded ? 0 : 2}>
                            {description}
                        </Text>

                        <Button
                            onPress={toggleExpand}
                            variant="ghost"
                            _text={{ color: '#29539B' }}
                            leftIcon={<Icon as={MaterialIcons} name={expanded ? 'arrow-drop-up' : 'arrow-drop-down'} size="md" />}
                        >
                            {expanded ? 'Show Less' : 'Read More'}
                        </Button>
                    </VStack>
                </Box>
            )}
        </Pressable>
    );
};

const Projects = ({ navigation }) => {
    const ongoingProjects = [
        {
            client: 'ICICI Bank',
            location: 'India',
            description: 'Deployment of L2/L3/PM resources using Arista Networks. This project focuses on improving network performance and security with a strong emphasis on infrastructure upgrades.',
        },
        {
            client: 'NIC Andaman Nicobar',
            location: 'India',
            description: 'Deployment of Commvault Hyperscale Solution for enhanced data management and scalability in remote locations, ensuring data backup and recovery for critical infrastructure.',
        },
        {
            client: 'Union Bank of India',
            location: 'Mumbai, India',
            description: 'KVM Virtualization implementation on OPENSUSE to optimize server performance and improve virtualization capabilities for core banking applications.',
        },
        {
            client: 'UCO Bank',
            location: 'Delhi NCR, India',
            description: 'Network device configuration for NAC (Network Access Control) and DHCP, ensuring security and network management across multiple bank branches.',
        },
        {
            client: 'POSOCO',
            location: 'Delhi, India',
            description: 'Configuration of NMMi Microfocus tool to enhance network monitoring and manage critical infrastructure for power system operations.',
        },
        {
            client: 'Airtel',
            location: 'All India',
            description: 'Wireless network management across all locations in India, including provisioning, configuration, and deployment of network changes for improved service coverage.',
        },
        {
            client: 'HCL France',
            location: 'France',
            description: 'Migration from Cisco to Arista infrastructure, including SSID migration and phased deployment to improve network performance and scalability.',
        },
        {
            client: 'GAIL & ICICI',
            location: 'India',
            description: 'Data Center/Disaster Recovery (DC/DR) refresh using Arista switches to enhance redundancy and network reliability in critical banking and energy infrastructure.',
        },
        {
            client: 'Veritas Flex 5350',
            location: 'NIC, NCR',
            description: 'Upgradation and configuration of Veritas Flex 5350 for scalable storage management, ensuring high availability and secure data access in a national data center environment.',
        },
        {
            client: 'Inbound Call Centre',
            location: 'Ahmedabad, India',
            description: 'Setup of a 6-seater inbound call center, including network design, telephony integration, and management tools for efficient customer service operations.',
        },
        {
            client: 'Fortigate Firewall AMC',
            location: 'Healthcare Sector',
            description: 'Annual Maintenance Contract (AMC) for Fortigate Firewalls, providing security services, patch management, and configuration for healthcare institutions to ensure data protection.',
        },
        {
            client: 'Cisco Unified Communication Manager',
            location: 'Healthcare Clients',
            description: 'Deployment of Cisco Unified Communication Manager, enabling streamlined communication and collaboration across multiple healthcare facilities, integrating voice, video, and messaging systems.',
        },
    ];

    return (
        <Box flex={1}>
            <AppHeader
                navigation={navigation}
                title="Projects"
            />
            <LinearGradient
                colors={['#1E3B70', '#29539B']}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
                    <Text fontSize="2xl" fontWeight="bold" color="white" mb={6} textAlign={'center'}>
                        Our On-Going Projects
                    </Text>
                    <VStack space={4}>
                        {ongoingProjects.map((project, index) => (
                            <OnGoingProject key={index} {...project} />
                        ))}
                    </VStack>
                </ScrollView>
            </LinearGradient>
        </Box>
    );
};

export default Projects;