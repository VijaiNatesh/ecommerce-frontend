import { ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS, ADD_ORDER_FAIL, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAIL } from "../../action";


export const orderReducer = (state ={}, action) => {
    switch(action.type){
        case ADD_ORDER_REQUEST:
        return{
            loading: true
        }
        case ADD_ORDER_SUCCESS:
        return{
            orders: action.payload
        }
        case ADD_ORDER_FAIL:
        return{
            loading: false,
            error: action.payload
        }
        case GET_ORDER_REQUEST:
        return{
            loading: true
        }
        case GET_ORDER_SUCCESS:
        return{
            orderDetail: action.payload
        }
        case GET_ORDER_FAIL:
        return {
            loading: false,
            error: action.payload
        }
        default:
        return state
    }
}