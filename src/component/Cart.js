import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, updateCart, deleteCart } from '../redux/action/cartAction';
import { addOrder } from '../redux/action/orderAction';
import styles from '../../src/myStyles.module.css'
import {useNavigate} from 'react-router-dom'

function Cart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    const state = useSelector(state => state.cart)
    const { carts } = state
    console.log(carts)

    const user = localStorage.getItem("userAuthData")
    const userData = JSON.parse(user)

    return (
        <div className={styles.bg}>
            <p className={styles.else}>Total: {carts && carts.bill}</p><br />
            <button onClick={() => {
                dispatch(addOrder(userData._id))
                alert("Order Placed")
                navigate('/order')
            }}>Place Order</button>
            <div className={styles.card}>
                <div>
                    {carts ? carts.items.map((item) => {

                        return (
                            <div className={styles.itemCard}>
                                <ul>
                                    {item.name}<br />
                                    <p>Price:{item.price}</p><br />
                                    <button onClick={() => dispatch(updateCart(userData._id, item.productId, item.quantity - 1))}>Reduce 1 {item.name}</button><br />
                                    <button onClick={() => dispatch(updateCart(userData._id, item.productId, item.quantity + 1))}>Purchase one more {item.name}</button><br />
                                    <button onClick={() => dispatch(deleteCart(userData._id, item.productId))}>Delete</button><br />
                                </ul>
                            </div>
                        )
                    }
                    ) : <p className={styles.else}>No items in Cart.</p>}

                </div>
            </div>
        </div>
    )
}

export default Cart
//items[0] bill items[0]