import * as SecureStore from 'expo-secure-store';

export default {
    async saveToken(token) {
        return await SecureStore.setItemAsync('auth_token', token);
    },

    async getToken() {
        return await SecureStore.getItemAsync('auth_token');
    }
}