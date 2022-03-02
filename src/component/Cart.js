import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, updateCart, deleteCart } from '../redux/action/cartAction';
import { addOrder } from '../redux/action/orderAction';

function Cart() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    const state = useSelector(state => state.cart)
    const { carts } = state
    console.log(carts)

    const user = localStorage.getItem("userAuthData")
    const userData = JSON.parse(user)
    
    return (
        <>
        <p>Total: {carts && carts.bill}</p>
        <button onClick={() => dispatch(addOrder(userData._id))}>Place Order</button><br/>
        <div>          
            {carts ? carts.items.map((item) => {

                return (
                    <>
                        {item.name}<br />
                        {item.price}<br />
                        <button onClick={() => dispatch(updateCart(userData._id, item.productId, item.quantity - 1))}>-1</button>
                        <button onClick={() => dispatch(updateCart(userData._id, item.productId, item.quantity + 1))}>+1</button><br />
                        <button onClick ={() => dispatch(deleteCart(userData._id, item.productId))}>Delete</button><br/>
                    </>
                )
            }
            ) : "No items in Cart"}
           
        </div>        
         </>
    )
}

export default Cart
//items[0] bill items[0]