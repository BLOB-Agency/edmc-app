import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const withDismissKeyboard = (Component) => {
    return (props) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Component {...props} />
        </TouchableWithoutFeedback>
    );
};

export default withDismissKeyboard;
