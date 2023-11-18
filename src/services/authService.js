import apiClient from '../api/apiClient';
import tokenStore from "../api/tokenStore";

export default {
    register: async (userData) => {
        try {
            const response = await apiClient.register(userData);

            await tokenStore.saveToken(response.token)

            return response.data;
        } catch (error) {
            throw error;
        }
    },
}