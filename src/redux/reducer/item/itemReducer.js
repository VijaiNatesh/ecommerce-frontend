import { GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAIL, ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, ADD_ITEM_FAIL } from "../../action";


export const itemReducer = (state = {}, action) => {
    switch(action.type){
        case GET_ITEMS_REQUEST:
        return {
            loading: true
        }
        case GET_ITEMS_SUCCESS:
        return {
            items: action.payload
        }
        case GET_ITEMS_FAIL:
        return {
            loading: false,
            error: action.payload
        }
        case ADD_ITEM_REQUEST:
        return {
            loading: true
        }
        case ADD_ITEM_SUCCESS:
        return {
            addItems: action.payload
        }
        case ADD_ITEM_FAIL:
        return {
            loading: false,
            error: action.payload
        }
        default:
        return state;
    }
}