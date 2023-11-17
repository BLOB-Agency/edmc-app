import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from "./styles";
export default function() {
    return (
        <ImageBackground source={require('../../assets/bg.png')} style={styles.backgroundImage}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.linearGradient}
            >
                <Text style={styles.heroText}>Welcome to Our App!</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Sign up with Google</Text>
                </TouchableOpacity>


            </LinearGradient>
        </ImageBackground>
    );
};
