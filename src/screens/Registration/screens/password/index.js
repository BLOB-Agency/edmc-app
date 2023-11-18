import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button, StatusBar, ImageBackground} from 'react-native';
import styles from "./styles";
import Input from "../../../../components/Input";
import {useFormData} from "../../FormContext";
import PasswordIcon from "../../../../assets/icons/lock icon.svg";
const EmailScreen = ({ navigation }) => {
    const { formData, setFormData } = useFormData();

    return (
        <>
            <View style={{gap: 9, marginBottom: 36}}>
                <Text style={styles.title}>Now for security</Text>
                <Text style={styles.subtitle}>Pick and confirm {"\n"}your password.</Text>
            </View>

            <Input
                onChangeText={(text) => setFormData({...formData, password: text})}
                value={formData.password}
                label={"Password"} placeholder={"Enter your password"} Icon={PasswordIcon}></Input>

            <Input
                onChangeText={(text) => setFormData({...formData, password_confirmation: text})}
                value={formData.password_confirmation}
                label={"Confirm password"} placeholder={"Confirm your password"} Icon={PasswordIcon}></Input>
        </>
    );
};



export default EmailScreen;
