import {REGISTER_FAILURE, REGISTER_SUCCESS} from "./types";
import authService from "../../services/authService";

export const register = (userData) => async dispatch => {
    try {
        const response = await authService.register(userData);

        dispatch({ type: REGISTER_SUCCESS, payload: response.user });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.message });
    }
};
