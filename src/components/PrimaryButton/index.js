import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from "./styles";

const Button = ({ onPress, title, style, textStyle, disabled = false }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style, disabled && styles.disabledButton]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};



export default Button;
