import axios from '@/config/axiosConfig';

export const signupRequest = async ({ email, username, password }) => {
    try {
        const response = await axios.post('/users/signup', {
            email, 
            username, 
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};

export const signinRequest = async ({ email, password }) => {
    try {
        const response = await axios.post('/users/singin', {
            email, 
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error.response.data;
    }
};