import {FormDataProvider} from "./FormContext";
import UsernameScreen from "./screens/username";
import EmailScreen from "./screens/email";
import PasswordScreen from "./screens/password";
import withMultiScreen from "../MultiScreen";
import withDismissKeyboard from "../../components/withDismissKeyboard";

const RegistrationScreens = withMultiScreen([UsernameScreen, EmailScreen, PasswordScreen]);

const Registration = ({navigation}) => {
    return (
        <FormDataProvider>
            <RegistrationScreens navigation={navigation} />
        </FormDataProvider>
    );
};

export default withDismissKeyboard(Registration);