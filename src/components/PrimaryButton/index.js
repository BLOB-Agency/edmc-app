import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from "./styles";

const Button = ({ onPress, title, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};



export default Button;
