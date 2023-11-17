import 'react-native-gesture-handler';
import AppNavigator from "./src/navigation/AppNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {useFonts} from "expo-font";
export default function () {
    const [fontsLoaded] = useFonts({
        'Cereal-Medium': require('./src/assets/fonts/AirbnbCereal-Medium.ttf'),
        'Cereal-Bold': require('./src/assets/fonts/AirbnbCereal-Bold.ttf'),
        'Cereal-Book': require('./src/assets/fonts/AirbnbCereal-Book.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <AppNavigator/>
        </NavigationContainer>
    );
}