import axios from 'axios';
export const loginUser = (body) => {
    try {
        return axios.post('http://localhost:9999/api/Login', body);
    } catch (error) {
        console.log(error);
    }
};
export const logoutUser = () => {
    try {
        return axios.post('http://localhost:9999/api/Logout');
    } catch (error) {
        console.log(error);
    }
};
export const createAroadTour = (body) => {
    try {
        return axios.post('http://localhost:9999/api/createAbroadTour', body);
    } catch (error) {
        console.log(error);
    }
};
export const getAllAroadTour = () => {
    try {
        return axios.get('http://localhost:9999/api/getAllAbroadTour');
    } catch (error) {
        console.log(error);
    }
};
export const getAbroadTour = (matournuocngoai) => {
    try {
        return axios.get(`http://localhost:9999/api/getAbroadTour?matournuocngoai=${matournuocngoai}`);
    } catch (error) {
        console.log(error);
    }
};
export const createTour = (body) => {
    try {
        return axios.post('http://localhost:9999/api/createTour', body);
    } catch (error) {
        console.log(error);
    }
};
export const getAllTour = (page) => {
    try {
        return axios.get(`http://localhost:9999/api/getAllTour?page=${page}`);
    } catch (error) {
        console.log(error);
    }
};
