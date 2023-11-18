import {REGISTER_FAILURE, REGISTER_SUCCESS} from "./types";

const initialState = {
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
                registrationError: null,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                registrationError: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
