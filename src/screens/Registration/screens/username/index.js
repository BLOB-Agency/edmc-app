import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button, StatusBar, ImageBackground} from 'react-native';
import {useFormData} from "../../FormContext";
import styles from "./styles";
import {LinearGradient} from "expo-linear-gradient";
import Input from "../../../../components/Input";
import UserIcon from "../../../../assets/icons/user icon.svg";
const UsernameScreen = ({ navigation }) => {
    const { formData, setFormData } = useFormData();

    return (
        <>
            <View style={{gap: 9, marginBottom: 36}}>
                <Text style={styles.title}>Welcome to EDMC</Text>
                <Text style={styles.subtitle}>Let's start with your{"\n"}username.</Text>
            </View>

            <Input
                onChangeText={(text) => setFormData({...formData, username: text})}
                value={formData.username}
                label={"Username"}
                placeholder={"Enter your username"}
                Icon={UserIcon}
            ></Input>
        </>
    );
};



export default UsernameScreen;
