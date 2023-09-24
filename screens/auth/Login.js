import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import InputBox from '../../components/Forms/InputBox';
import SubmitButton from '../../components/Forms/SubmitButton';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
    //Global state
    const [state, setState] = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            if (!email || !password) {
                Alert.alert("Please fill all fields");
                setLoading(false);
                return;
            }
            setLoading(false);
            const { data } = await axios.post("/auth/login", {
                email,
                password
            });
            setState(data);
            await AsyncStorage.setItem("@auth", JSON.stringify(data));
            alert(data && data.message);
            navigation.navigate("Home");
            console.log("Login Data==> ", { email, password });

        } catch (error) {
            alert(error.response.data.message);
            setLoading(false);
            console.log(error);
        }
    }

    //Temp function to check local storage data
    const getLocalStorageData = async () => {
        let data = await AsyncStorage.getItem("@auth");
        console.log("Local Storage ==> ", data);
    };
    getLocalStorageData();

    return (
        <View style={styles.container}>
            {/* <Text>MyBlogSite</Text> */}
            <View style={styles.contentContainer}>
                <Text style={styles.pageTitle}>Sign In</Text>
                <View style={styles.rowContainer}>
                    <Text style={styles.signUpText}>Don't have an account?&nbsp;</Text>

                    <Text onPress={() => navigation.navigate("Register")} style={styles.signUpLink}>SIGN UP</Text>

                </View>
            </View>

            <View style={{ marginHorizontal: 20 }}>
                <InputBox
                    inputTitle={"Email"}
                    keyboardType="email-address"
                    autoComplete="email"
                    value={email}
                    setValue={setEmail}
                    style={[styles.inputBox, { borderWidth: 1, borderColor: "#333" }]}
                />
                <InputBox
                    inputTitle={"Password"}
                    secureTextEntry={true}
                    autoComplete="password"
                    value={password}
                    setValue={setPassword}
                    style={[styles.inputBox, { borderWidth: 1, borderColor: "#333" }]}

                />
            </View>
            <SubmitButton
                btnTitle="SIGN IN"
                loading={loading}
                handleSubmit={handleSubmit}
            />
            {/* <Text style={styles.linkText}>
                not a user Please{" "}
                <Text style={styles.link}
                    onPress={() => navigation.navigate("Register")}>
                    REGISTER
                </Text>{" "}
            </Text> */}
        </View>
    )
}

export default Login

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
    signUpText: {
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
