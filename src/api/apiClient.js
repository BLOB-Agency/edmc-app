import axios from "./axios";

export default {
    register: async (userData) => {
        return axios.post('/register', userData);
    },
}