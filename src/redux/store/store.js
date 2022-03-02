import {createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { userReducer } from "../reducer/user/userReducer";
import { itemReducer } from "../reducer/item/itemReducer";
import { cartReducer } from "../reducer/cart/cartReducer";
import { orderReducer } from "../reducer/order/orderReducer";


const middleware = [thunk]



const reducer = combineReducers({
    user: userReducer,
    item: itemReducer,
    cart: cartReducer,
    order: orderReducer
})

const store = createStore(
    reducer,   
    applyMiddleware(...middleware)
)


export default store