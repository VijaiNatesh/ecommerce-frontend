import { ADDTOCART_REQUEST, ADDTOCART_SUCCESS, ADDTOCART_FAIL, CART_REQUEST, CART_SUCCESS, CART_FAIL, CART_DELETE_REQUEST, CART_DELETE_SUCCESS, CART_DELETE_FAIL} from "../../action";


export const cartReducer = (state = {}, action) => {
    switch(action.type){
        case ADDTOCART_REQUEST:
        return {
            loading: true
        }
        case ADDTOCART_SUCCESS:
        return {
            cartDetail: action.payload
        }
        case ADDTOCART_FAIL:
        return {
            loading: false,
            error: action.payload
        }
        case CART_REQUEST:
        return {
            loading: true
        }
        case CART_SUCCESS:
        return {
            carts: action.payload
        }
        case CART_FAIL:
        return {
            loading: false,
            error: action.payload
        }      
        case CART_DELETE_REQUEST:
        return {
            loading: true
        } 
        case CART_DELETE_SUCCESS:
        return {
            deletedCart : action.payload
        }
        case CART_DELETE_FAIL:
        return {
            loading: false,
            error: action.payload
        }
        default:
        return state;
    }
}