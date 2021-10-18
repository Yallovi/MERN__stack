import * as axios from 'axios';
import {setUser} from '../reducers/userReducer';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
});

export const registrationApi = async (email, password) => {
    try{
        const response = await instance.post('/api/auth/registration', {
            email,
            password
        });
        alert(response.data.message);
    }catch(e){
        alert(e.response.data.message);
    }

};
export const loginApi =  (email, password) => {
    return async dispatch => {
        try{
            const response = await instance.post('/api/auth/login', {
                email,
                password
            });
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);

            console.log(response.data);
        }catch(e){
            alert(e.response.data.message);
        }
    };  
    
};
export const authApi =  () => {
    return async dispatch => {
        try{
            const response = await instance.get('/api/auth/auth', 
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            );
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);

            console.log(response.data);
        }catch(e){
            alert(e.response.data.message);
            localStorage.removeItem('token');
        }
    };  
    
};