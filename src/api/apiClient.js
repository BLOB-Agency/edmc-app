import axios from "./axios";

export default {
    register: async (userData) => {
        return axios.post('/auth/register', userData);
    },

    login: async (userData) => {
        return axios.post('/auth/login', userData);
    }
}
