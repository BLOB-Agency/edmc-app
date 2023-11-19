import React, {useContext, useEffect, useRef, useState} from "react";

import EmailScreen from "./screens/email";
import PasswordScreen from "./screens/password";
import withMultiScreen from "../MultiScreen";
import {FormDataProvider, useFormData} from "./FormContext";
import withDismissKeyboard from "../../components/withDismissKeyboard";


const Login = (props) => {
    console.log('MyComponent re-rendered with props:', props);
    const {formData} = useFormData();

    const onLogin = () => {
        console.debug('[Login] Logging in with', formData)
    }

    const LoginScreens = withMultiScreen([EmailScreen, PasswordScreen], onLogin)

    return (
        <LoginScreens navigation={props.navigation} />
    )
}


export default withDismissKeyboard(({ navigation }) => (
    <FormDataProvider>
        <Login navigation={navigation} />
    </FormDataProvider>
));