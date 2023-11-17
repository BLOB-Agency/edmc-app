import 'react-native-gesture-handler';
import AppNavigator from "./navigation/AppNavigator";
import {NavigationContainer} from "@react-navigation/native";
export default function () {
    return (
        <NavigationContainer>
            <AppNavigator/>
        </NavigationContainer>
    );
}