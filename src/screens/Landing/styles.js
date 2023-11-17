import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heroText: {
        fontSize: 24,
        color: 'white',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
    },
    socialButton: {
        // Similar to button but with additional styles for social media
    },
    socialButtonText: {
        // Similar to buttonText
    },
});

export default styles;