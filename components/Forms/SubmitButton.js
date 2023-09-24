import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const SubmitButton = ({ handleSubmit, btnTitle, loading }) => {
    return (
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.btnText}>
                {loading ? "Please Wait..." : btnTitle}
            </Text>
        </TouchableOpacity>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    submitBtn: {
        backgroundColor: "#005FEE",
        height: 50,
        marginHorizontal: 25,
        borderRadius: 80,
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 4,
        padding: '6px',
        marginTop: 10
    },
    btnText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 14,
        fontWeight: 500,
    },
});