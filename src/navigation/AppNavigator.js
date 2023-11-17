import React from 'react';
import Landing from '../screens/Landing';
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={Landing} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
