import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getOrder } from '../redux/action/orderAction';
import styles from '../../src/myStyles.module.css'

function Order() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrder())
    },[dispatch])

    const state = useSelector(state => state.order)
    const {orderDetail} = state
    console.log(orderDetail)
   


    const user = localStorage.getItem('userAuthData')
    const userData = JSON.parse(user)
    return (
        <div className = {styles.card}>
            Order's Page <br/>
            <button onClick = {() => dispatch(getOrder(userData._id))}>Click to view the Orders</button>
        <>
        {orderDetail ? orderDetail.map((order) => {
            return (
                <>
                <p>Bill: Rs. {order.bill}</p>
                <div className = {styles.itemCard}>
                <p>{order.items.map((item) => {
                    return(
                        <>
                        <p>{item.name} {item.quantity} pieces</p>
                        <p>Price: Rs.{item.price} per pieces</p>   
                        </>                    
                    )
                })} </p>  
                </div>             
               </> 
            )
        })            
         
        : "No Orders Placed"}
        </>
        </div>
    )
}

export default Order
//[0].items
//[0]
//[0]