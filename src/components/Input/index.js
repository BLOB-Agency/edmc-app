import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import styles from "./styles";

const Input = ({ Icon, label, placeholder, ...rest }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>
                {Icon && <Icon style={styles.icon} />}
                <TextInput
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    placeholder={placeholder}
                    style={styles.input}
                    {...rest}
                />
            </View>
        </View>
    );
};


export default Input;
