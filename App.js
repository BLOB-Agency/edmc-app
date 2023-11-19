import 'react-native-gesture-handler';
import AppNavigator from "./src/navigation/AppNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {Provider} from "react-redux";
import store from "./src/store";
import {UserProvider} from "./src/context/UserContext";

export default function () {
    const [fontsLoaded] = useFonts({
        'Cereal-Medium': require('./src/assets/fonts/AirbnbCereal-Medium.ttf'),
        'Cereal-Bold': require('./src/assets/fonts/AirbnbCereal-Bold.ttf'),
        'Cereal-Book': require('./src/assets/fonts/AirbnbCereal-Book.ttf'),
        'Gordita-Medium': require('./src/assets/fonts/Gordita-Medium.otf'),
        'Gordita-Regular': require('./src/assets/fonts/Gordita-Regular.otf'),

    });

    if (!fontsLoaded) {
        return null;
    }

    return (
       <Provider store={store}>
           <UserProvider>
               <NavigationContainer>
                   <AppNavigator/>
               </NavigationContainer>
           </UserProvider>
       </Provider>
    );
}