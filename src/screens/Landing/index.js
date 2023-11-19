import React from 'react';
import {View, StyleSheet, ImageBackground, Text, TouchableOpacity, StatusBar} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styles from "./styles";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import AppleLogo from "../../assets/images/apple_logo_white.png";
import SocialButton from "../../components/SocialButton";
export default function({navigation}) {
    const goToRegistration = () => {
        navigation.navigate('Registration');
    }

    const goToLogin = () => {
        navigation.navigate('Login');
    }
    return (
        <>
            <StatusBar barStyle="light-content" />
            <ImageBackground source={require('../../assets/images/bg.png')} style={styles.backgroundImage}>
                <LinearGradient
                    colors={['rgba(30,30,30,0.0)', 'rgba(30, 30, 30, 0.7)', '#1E1E1E']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    style={styles.linearGradient}
                >
                    <Text style={styles.heroText}>Lorem Ipsum{"\n"}Dolor Sit Amet</Text>
                    <SecondaryButton onPress={goToLogin} title={"Log In!"}></SecondaryButton>
                    <PrimaryButton onPress={goToRegistration} title={"Sign Up!"}></PrimaryButton>

                    <Text style={styles.socialText}>Or sign in with</Text>

                    <View style={{alignItems: "center"}}>
                        <SocialButton icon={AppleLogo}></SocialButton>
                    </View>


                </LinearGradient>
            </ImageBackground></>
    );
};
