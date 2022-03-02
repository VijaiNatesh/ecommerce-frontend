import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getOrder } from '../redux/action/orderAction';

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
        <div>
            Order's Page <br/>
            <button onClick = {() => dispatch(getOrder(userData._id))}>Click to view the Orders</button>
        <>
        {orderDetail ? orderDetail.map((order) => {
            return (
                <>
                <p>Bill: {order.bill}</p>
                
                <p>{order.items.map((item) => {
                    return(
                        <>
                        <p>{item.name} {item.quantity} pieces</p>
                        <p>{item.price} per pieces</p>   
                        </>                    
                    )
                })} </p>               
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