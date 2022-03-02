import axios from 'axios'
import { ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS, ADD_ORDER_FAIL, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAIL } from '../action';

export const addOrder = (id) => {
    return async dispatch => {
        try {
            dispatch({
                type: ADD_ORDER_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post(`https://ecommerce-vj.herokuapp.com/api/order/addorder/${id}`,
                config)
            dispatch({
                type: ADD_ORDER_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: ADD_ORDER_FAIL,
                payload:error.response && error.response.data.message
            })
        }
    }
}

export const getOrder = (id) => {
    return async dispatch => {
        try {
            dispatch({
                type: GET_ORDER_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.get(`https://ecommerce-vj.herokuapp.com/api/order/orderdetails/${id}`,
                config)
            dispatch({
                type: GET_ORDER_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: GET_ORDER_FAIL,
                payload:error.response && error.response.data.message
            })
        }
    }
}