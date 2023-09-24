import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FooterMenu from './../components/Forms/Menus/FooterMenu';

const About = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: '#E7F0FE' }}>
                <FooterMenu />
            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: "space-between",
        marginTop: 40,
    },
});