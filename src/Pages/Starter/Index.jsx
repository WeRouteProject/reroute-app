/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { NativeBaseProvider } from 'native-base';
import GIF from '../../Common/Utils/assets/gifs/network.gif';
import { useNavigation } from '@react-navigation/native';

const Starter = () => {
    const navigation = useNavigation();
    const getStarted = () => {
        // console.log('VerifyCode');
        navigation.navigate('Login');
    };
    return (
        <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Image
                        source={GIF}
                        resizeMode="contain"
                        alt="WeRoute Gif" // Replace with your actual icon path
                        style={styles.image}
                    />
                    <Text style={styles.text}>One tap away for a Healthy life</Text>
                    <TouchableOpacity style={styles.button} onPress={getStarted}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3182CE', // Adjust color as needed
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3182CE',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Starter;
