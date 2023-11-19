import React, {useRef, useEffect, useState, useCallback, useMemo} from 'react';
import { Animated, Keyboard, KeyboardAvoidingView, Platform, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import IconButton from "../../components/IconButton";
import BackIcon from "../../assets/icons/back icon.svg";
import PrimaryButton from "../../components/PrimaryButton";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const withMultiScreen = (StepComponents, completionHandler) => {
    return (props) => {
        const insets = useSafeAreaInsets();
        const [currentStep, setCurrentStep] = useState(0);
        const [currentStepIsComplete, setCurrentStepIsComplete] = useState(false);

        const fadeAnim = useRef(new Animated.Value(0)).current;
        const keyboardPaddingAnim = useRef(new Animated.Value(0)).current;

        useEffect(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();

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


        const goToNextStep = useCallback(() => {
            if (currentStep < StepComponents.length - 1) {
                setCurrentStep(currentStep + 1);
            } else {
                completionHandler();
            }
        }, [currentStep]);

        const goToPreviousStep = useCallback(() => {
            if (currentStep > 0) {
                setCurrentStep(currentStep - 1);
            } else {
                props.navigation.goBack();
            }
        }, [currentStep]);


        const CurrentStepComponent = useMemo(() => {
            const Component = StepComponents[currentStep];
            return (
                <Component
                    onValidationChange={setCurrentStepIsComplete}
                    {...props}
                />
            );
        }, [currentStep, setCurrentStepIsComplete, props]);

        useEffect(() => {
            console.debug('[MultiScreen] Current step changed to', currentStep);
        }, [currentStep]);

        useEffect(() => {
            console.debug('[MultiScreen] Current step is complete changed to', currentStepIsComplete);
        }, [currentStepIsComplete]);

        return (
            <ImageBackground source={require('../../assets/images/bg.png')} style={styles.backgroundImage}>
                <LinearGradient
                    colors={['rgba(30,30,30,0.0)', 'rgba(30, 30, 30, 0.89)', '#1E1E1E']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    style={{...styles.linearGradient, paddingTop: insets.top, paddingBottom: insets.bottom}}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={{ flex: 1, justifyContent: "space-between" }}
                    >
                        <View style={{gap: 24}}>
                            <IconButton onPress={goToPreviousStep} Icon={BackIcon}></IconButton>

                            <Animated.View style={{ opacity: fadeAnim }}>
                                {CurrentStepComponent}
                            </Animated.View>
                        </View>

                        <Animated.View style={{ paddingBottom: keyboardPaddingAnim }}>
                            <PrimaryButton disabled={!currentStepIsComplete} onPress={goToNextStep} title={"Continue!"}/>
                        </Animated.View>
                    </KeyboardAvoidingView>
                </LinearGradient>
            </ImageBackground>
        );
    };
};

export default withMultiScreen;
