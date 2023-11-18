import UsernameScreen from "./screens/username";
import React, {useEffect, useRef, useState} from "react";
import {
    Animated,
    Button,
    ImageBackground, Keyboard,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    Text,
    TextInput,
    View
} from "react-native";
import {FormDataProvider} from "./FormContext";
import styles from "./styles";
import {LinearGradient} from "expo-linear-gradient";
import IconButton from "../../components/IconButton";
import BackIcon from "../../assets/icons/back icon.svg";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import PrimaryButton from "../../components/PrimaryButton";
import EmailScreen from "./screens/email";
import Password from "./screens/password";
const Registration = ({navigation}) => {
    const insets = useSafeAreaInsets();

    const [currentStep, setCurrentStep] = useState(1);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const keyboardPaddingAnim = useRef(new Animated.Value(0)).current;

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
        fadeIn();
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
        fadeIn();
    };

    const back = () => {
        if (currentStep <= 1) {
            navigation.goBack();
        } else {
            prevStep();
        }


    }

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        fadeIn();
    }, [currentStep]);

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <UsernameScreen />;

            case 2:
                return <EmailScreen />;

                case 3:
                    return <Password />;
        }
    };

    const handleContinue = () => {

    }

    useEffect(() => {
        const keyboardShowListener = Keyboard.addListener('keyboardWillShow', (e) => {
            Animated.timing(keyboardPaddingAnim, {
                toValue: 24,
                duration: e.duration,
                useNativeDriver: false,
            }).start();
        });

        const keyboardHideListener = Keyboard.addListener('keyboardWillHide', (e) => {
            Animated.timing(keyboardPaddingAnim, {
                toValue: 0,
                duration: e.duration,
                useNativeDriver: false,
            }).start();
        });

        return () => {
            keyboardShowListener.remove();
            keyboardHideListener.remove();
        };
    }, []);


    return (
        <>
            <FormDataProvider>
                <StatusBar barStyle="light-content" />
                <ImageBackground source={require('../../assets/images/bg.png')} style={styles.backgroundImage}>
                    <LinearGradient
                        colors={['rgba(30,30,30,0.0)', 'rgba(30, 30, 30, 0.7)', '#1E1E1E']}
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
                        style={{...styles.linearGradient, paddingTop: insets.top, paddingBottom: insets.bottom}}
                    >

                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={{ flex: 1, justifyContent: "space-between" }}
                        >

                            <View style={{gap: 24}}>
                                <IconButton onPress={back} Icon={BackIcon}></IconButton>

                                <Animated.View style={{ opacity: fadeAnim }}>
                                    {renderStep()}
                                </Animated.View>
                            </View>

                            <Animated.View style={{ paddingBottom: keyboardPaddingAnim }}>
                                <PrimaryButton onPress={nextStep} title={"Continue!"}/>
                            </Animated.View>
                        </KeyboardAvoidingView>
                    </LinearGradient>
                </ImageBackground>
            </FormDataProvider>
        </>
    );
};

export default Registration;