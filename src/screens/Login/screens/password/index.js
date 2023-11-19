import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button, StatusBar, ImageBackground} from 'react-native';
import styles from "./styles";
import Input from "../../../../components/Input";
import {useFormData} from "../../FormContext";
import PasswordIcon from "../../../../assets/icons/lock icon.svg";
const PasswordScreen = ({ navigation, onValidationChange }) => {
    const { formData, setFormData } = useFormData();
    const [passwordError, setPasswordError] = useState('');

    const validatePassword = (password) => {
        return password.length > 0;
    }

    const setPassword = (text) => {
        setFormData({ ...formData, password: text });

        if (validatePassword(text)) {
            onValidationChange(true);
            setPasswordError('');
        } else {
            onValidationChange(false);
            setPasswordError('Please enter your password.');
        }
    }

    return (
        <>
            <View style={{gap: 9, marginBottom: 36}}>
                <Text style={styles.title}>Log back in</Text>
                <Text style={styles.subtitle}>Confirm your password{"\n"}to log in.</Text>
            </View>

            <Input
                secureTextEntry={true}
                errorMessage={passwordError}
                onChangeText={setPassword}
                value={formData.password}
                label={"Password"} placeholder={"Enter your password"} Icon={PasswordIcon}></Input>

        </>
    );
};



export default PasswordScreen;
