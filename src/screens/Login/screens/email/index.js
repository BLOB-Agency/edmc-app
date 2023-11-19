import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button, StatusBar, ImageBackground} from 'react-native';
import styles from "./styles";
import Input from "../../../../components/Input";
import EmailIcon from "../../../../assets/icons/email icon.svg";
import {useFormData} from "../../FormContext";
const EmailScreen = ({ navigation, onValidationChange }) => {
    const { formData, setFormData } = useFormData();
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return emailRegex.test(email);
    };

    const setEmail = (text) => {
        setFormData({ ...formData, email: text });

        if (validateEmail(text)) {
            onValidationChange(true);
            setEmailError('');
        } else {
            onValidationChange(false);
            setEmailError('The e-mail you entered wasn\'t valid');
        }
    };

    return (
        <>
            <View style={{gap: 9, marginBottom: 36}}>
                <Text style={styles.title}>Welcome back!</Text>
                <Text style={styles.subtitle}>Enter your account{"\n"}details to get started.</Text>
            </View>

            <Input
                onChangeText={setEmail}
                value={formData.email}
                label={"E-mail address"}
                placeholder={"Enter your e-mail"}
                Icon={EmailIcon}
                errorMessage={emailError}
            ></Input>
        </>
    );
};



export default EmailScreen;
