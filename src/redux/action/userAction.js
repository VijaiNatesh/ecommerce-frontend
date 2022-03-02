import axios from 'axios'
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../action';

//to register user
export const registerUser = (userData) => {
    return async dispatch => {
        try{
            dispatch({
                type: USER_REGISTER_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post("https://ecommerce-vj.herokuapp.com/api/user/register",
            (userData),
            config)
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data
            })
        }
        catch(error){
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}

//to login user
export const loginUser = (userData) => {
    return async dispatch => {
        try{
            dispatch({
                type : USER_LOGIN_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post("https://ecommerce-vj.herokuapp.com/api/user/login",
            (userData),
            config)
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
            })
            localStorage.setItem('userAuthData', JSON.stringify(data));
        }
        catch(error){
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}

//to logout user
export const logoutUser = () => {
    return async dispatch => {
        localStorage.removeItem('userAuthData');
        try {
            dispatch({
                type: USER_LOGOUT,
            });
        } catch (error) { }
    };
};