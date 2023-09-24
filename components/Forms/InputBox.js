import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const InputBox = ({ inputTitle,
    autoComplete,
    keyboardType,
    secureTextEntry = false,
    value,
    setValue, }) => {
    return (
        <View>
            <Text>{inputTitle}</Text>
            <TextInput
                style={styles.inputBox}
                autoCorrect={false}
                keyboardType={keyboardType}
                autoComplete={autoComplete}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={(text) => setValue(text)}
            />
        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    inputBox: {
        height: 54,
        marginBottom: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        color: "#af9f85",
        borderWidth: 1,
        borderColor: "#d6d6cd"
    },
});
