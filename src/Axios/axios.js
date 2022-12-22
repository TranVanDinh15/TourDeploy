import axios from 'axios';
export const loginUser = (body) => {
    try {
        return axios.post('http://localhost:9999/api/Login', body);
    } catch (error) {
        console.log(error);
    }
};
