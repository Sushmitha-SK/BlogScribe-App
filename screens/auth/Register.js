import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Forms/InputBox';
import SubmitButton from './../../components/Forms/SubmitButton';
import axios from 'axios';

const Register = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true)
            if (!name || !email || !password) {
                Alert.alert('Please fill all fields')
                setLoading(false);
                return;
            }
            setLoading(false);
            const { data } = await axios.post("/auth/register", {
                name,
                email,
                password
            });
            alert(data && data.message);
            navigation.navigate("Login");
            console.log("Register Data==> ", { name, email, password });

        } catch (error) {
            alert(error.response.data.message);
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.pageTitle}>Create Your Account</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.signInText}>Do you already have an account?&nbsp;</Text>
                    <Text onPress={() => navigation.navigate("Login")} style={styles.signUpLink}>SIGN IN</Text>

                </View>
            </View>

            <View style={{ marginHorizontal: 20 }}>
                <InputBox inputTitle={"Name"}
                    value={name}
                    setValue={setName} />

                <InputBox
                    inputTitle={"Email"}
                    keyboardType="email-address"
                    autoComplete="email"
                    value={email}
                    setValue={setEmail}
                />
                <InputBox
                    inputTitle={"Password"}
                    secureTextEntry={true}
                    autoComplete="password"
                    value={password}
                    setValue={setPassword}
                />
            </View>
            <SubmitButton
                btnTitle="SIGN UP"
                loading={loading}
                handleSubmit={handleSubmit}
            />
            {/* <Text style={styles.linkText}>
                ALready Register Please{" "}
                <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
                    LOGIN
                </Text>{" "}
            </Text> */}

        </View>
    )
}

export default Register

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         backgroundColor: "#e1d5c9",
//     },
//     pageTitle: {
//         fontSize: 40,
//         fontWeight: "bold",
//         textAlign: "center",
//         color: "#1e2225",
//         marginBottom: 20,
//     },
//     inputBox: {
//         height: 40,
//         marginBottom: 20,
//         backgroundColor: "#ffffff",
//         borderRadius: 10,
//         marginTop: 10,
//         paddingLeft: 10,
//         color: "#af9f85",
//     },
//     linkText: {
//         textAlign: "center",
//     },
//     link: {
//         color: "red",
//     },
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    contentContainer: {
        marginLeft: 20, // Add marginLeft to align content to the left
    },
    rowContainer: {
        flexDirection: 'row', // Display items in a row
        alignItems: 'center', // Center vertically
        marginBottom: 20,
        marginTop: 10

    },
    pageTitle: {
        fontSize: 40,
        fontWeight: 400,
        fontSize: '24px',
        textAlign: "left",
        color: "#1e2225",
        marginRight: 10,
    },
    signInText: {
        color: "#1e2225",
    },
    signUpLink: {
        color: "#005FEE",
        fontWeight: 400,
    },
    inputBox: {
        height: 40,
        marginBottom: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 10,
        color: "#af9f85",
    },
    linkText: {
        textAlign: "center",
    },
    link: {
        color: "red",
    },
    inputBox: {
        height: 40,
        marginBottom: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        borderColor: "#af9f85", // Border color
        borderWidth: 1, // Border width
        paddingLeft: 10,
        color: "#af9f85",
    },
});
