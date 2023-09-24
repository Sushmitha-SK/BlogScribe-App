import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen';


const SplashScreenPage = () => {

    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
        setTimeout(SplashScreen.hideAsync, 5000);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.logoText}>BlogScribe</Text>
        </View>
    )
}

export default SplashScreenPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#005FEE',

    },
    logoText: {
        color: '#fff',
        fontWeight: 500,
        fontSize: '30px'
    }
});