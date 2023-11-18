import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from "./styles";

const Button = ({ onPress, Icon, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <BlurView style={styles.blurView} tint="light" intensity={20} />

            {Icon && <Icon style={styles.icon} />}
        </TouchableOpacity>
    );
};

export default Button;
