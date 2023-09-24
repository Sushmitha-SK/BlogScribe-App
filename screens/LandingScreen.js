import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import landingImage from '../assets/landing.jpg';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
                <Image source={landingImage} style={styles.image} />
                <View style={styles.landingContent}>
                    <Text style={styles.centeredTextTitle}>Hey! Welcome</Text>
                    <Text style={styles.centeredText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas rhoncus lectus rhoncus, tempor. </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.customButtonText}>SIGN IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.customButtonText}>CREATE AN ACCOUNT</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    );
};

export default LandingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    centerContent: {
        alignItems: 'center',
        textAlign: 'center'
    },
    landingContent: {
        marginHorizontal: 50,
    },
    image: {
        width: 300,
        height: 350,
    },
    centeredTextTitle: {
        fontWeight: 600,
        textAlign: 'center',
        fontSize: '24px'
    },
    centeredText: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: '14px',
        fontWeight: 400
    },
    buttonContainer: {
        marginTop: 20,
    },
    customButton: {
        width: 278,
        backgroundColor: '#005FEE',
        borderRadius: 5,
        marginTop: 19,
        height: 35,
        padding: '6px'
    },
    customButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 500
    },
});
