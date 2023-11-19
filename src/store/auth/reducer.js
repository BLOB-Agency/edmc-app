import {LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS} from "./types";

const initialState = {
    loginError: null,
    registrationError: null,
    user: null,
    isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                registrationError: null,
            };

        case REGISTER_FAILURE:
            return {
                ...state,
                registrationError: action.payload,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                loginError: action.payload,
                isAuthenticated: false,
            };

        default:
            return state;
    }
};

export default authReducer;
