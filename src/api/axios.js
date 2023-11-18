import axios from 'axios';
import tokenStore from "./tokenStore";

const axiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    async config => {
        const token = await tokenStore.getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        // TODO: Token refresh
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
