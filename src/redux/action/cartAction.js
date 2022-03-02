import axios from 'axios'
import { ADDTOCART_REQUEST, ADDTOCART_SUCCESS, ADDTOCART_FAIL, CART_REQUEST, CART_SUCCESS, CART_FAIL, CART_DELETE_REQUEST, CART_DELETE_SUCCESS, CART_DELETE_FAIL } from '../action';

export const addToCart = (id, productId, quantity) => {
    return async dispatch => {
        try {
            dispatch({
                type: ADDTOCART_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post(`https://ecommerce-vj.herokuapp.com/api/cart/addcart/${id}`,
                { productId, quantity },
                config)
            dispatch({
                type: ADDTOCART_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: ADDTOCART_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}

export const getCart = () => {
    return async dispatch => {
        try {
            const user = localStorage.getItem("userAuthData")
            const userData = JSON.parse(user)
            dispatch({
                type: CART_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.get(`https://ecommerce-vj.herokuapp.com/api/cart/cartdetails/${userData._id}`,
                config)
            dispatch({
                type: CART_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: CART_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}

export const updateCart = (id, productId, quantity) => {
    return async dispatch => {
        try {
            dispatch({
                type: CART_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.put(`https://ecommerce-vj.herokuapp.com/api/cart/update/${id}`,
                { productId, quantity },
                config)
            dispatch({
                type: CART_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: CART_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }
}

export const deleteCart = (userId, itemId) => {
    return async dispatch => {
        try {
            dispatch({
                type: CART_DELETE_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.delete(`https://ecommerce-vj.herokuapp.com/api/cart/cartdelete/${userId}/${itemId}`,
                config)
            dispatch({
                type: CART_DELETE_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: CART_DELETE_FAIL,
                payload: error.response && error.response.data.message
            })

        }
    }
}