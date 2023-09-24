import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './../../../screens/Home';
import Register from './../../../screens/auth/Register';
import Login from './../../../screens/auth/Login';
import { AuthContext } from '../../../context/authContext';
import HeaderMenu from './HeaderMenu';
import Post from '../../../screens/Post';
import About from '../../../screens/About';
import Account from '../../../screens/Account';
import MyPosts from '../../../screens/MyPosts';
import LandingScreen from '../../../screens/LandingScreen';
// import SplashScreenPage from '../../../screens/SplashScreenPage';
import SplashScreenPage from './../../../screens/SplashScreenPage';

const ScreenMenu = () => {
    //Global state
    const [state] = useContext(AuthContext);

    //Auth condition true false
    const authenticatedUser = state?.user && state?.token;

    const Stack = createNativeStackNavigator();

    return (

        // <Stack.Navigator initialRouteName='Login'>

        <Stack.Navigator initialRouteName='SplashScreen'>
            {authenticatedUser ? (
                <>

                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: "Home",
                            headerRight: () => <HeaderMenu />,
                        }}
                    />
                    <Stack.Screen
                        name="Post"
                        component={Post}
                        options={{
                            headerBackTitle: 'Back',
                            headerRight: () => <HeaderMenu />,
                        }}
                    />
                    <Stack.Screen
                        name="About"
                        component={About}
                        options={{
                            headerBackTitle: 'Back',
                            headerRight: () => <HeaderMenu />,
                        }}
                    />
                    <Stack.Screen
                        name="Account"
                        component={Account}
                        options={{
                            headerBackTitle: 'Back',
                            headerRight: () => <HeaderMenu />,
                        }}
                    />
                    <Stack.Screen
                        name="MyPosts"
                        component={MyPosts}
                        options={{
                            headerBackTitle: "Back",
                            headerRight: () => <HeaderMenu />,
                        }}
                    />
                </>

            ) : (
                <>
                    <Stack.Screen
                        name='SplashScreen'
                        component={SplashScreenPage}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name='LandingScreen'
                        component={LandingScreen}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name='Register'
                        component={Register}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name='Login'
                        component={Login}
                        options={{ headerShown: false }} />
                </>
            )}

        </Stack.Navigator>

    )
}

export default ScreenMenu

