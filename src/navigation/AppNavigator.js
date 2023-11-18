import React from 'react';
import Landing from '../screens/Landing';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Registration from "../screens/Registration";


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
