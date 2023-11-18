import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button, StatusBar, ImageBackground} from 'react-native';
import styles from "./styles";
import Input from "../../../../components/Input";
import EmailIcon from "../../../../assets/icons/email icon.svg";
import {useFormData} from "../../FormContext";
const EmailScreen = ({ navigation }) => {
    const { formData, setFormData } = useFormData();

    return (
        <>
            <View style={{gap: 9, marginBottom: 36}}>
                <Text style={styles.title}>Hey, {formData.username ?? "you"}</Text>
                <Text style={styles.subtitle}>Now we need your email, so we{"\n"}can verify your account.</Text>
            </View>

            <Input
                onChangeText={(text) => setFormData({...formData, email: text})}
                value={formData.email}
                label={"E-mail address"} placeholder={"Enter your e-mail"} Icon={EmailIcon}></Input>
        </>
    );
};



export default EmailScreen;
