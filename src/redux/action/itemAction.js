import axios from 'axios'
import { GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL, ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, ADD_ITEM_FAIL } from '../action';

export const getItems = () => {
    return async dispatch => {
        try{
            dispatch({
                type: GET_ITEMS_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const {data} = await axios.get("https://ecommerce-vj.herokuapp.com/api/item/allitems",
            config)
            dispatch({
                type: GET_ITEMS_SUCCESS,
                payload: data
            })
        }
        catch(error){
            dispatch({
                type: GET_ITEMS_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}

export const addItem = (itemData) => {
    return async dispatch =>{
        try{
            dispatch({
                type: ADD_ITEM_REQUEST
            })
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const { data } = await axios.post("https://ecommerce-vj.herokuapp.com/api/item/add",
            (itemData),
            config)
            dispatch({
                type: ADD_ITEM_SUCCESS,
                payload: data
            })
        }
        catch(error){
            dispatch({
                type: ADD_ITEM_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}