import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../redux/action/itemAction';
import { addToCart } from '../redux/action/cartAction';
import styles from '../../src/myStyles.module.css'



function Home(getState) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getItems())
    }, [dispatch])

    const state = useSelector(state => state.item)
    const { items } = state
    console.log(items)

    const user = localStorage.getItem("userAuthData")
    const userData = JSON.parse(user)



    return (
        <div className = {styles.bg}>
            
            <div className={styles.card}>

                {items ? items.map((item) => {
                    return (
                        <div className={styles.itemCard}>
                            <ul>
                                <p>Item Name:{item.title}</p>
                                <p>Category:{item.category}</p>
                                <p>Price: {item.price}</p>
                                {!user ? <b>Login to Purchase </b> :
                                    <button onClick={() => {
                                        dispatch(addToCart(userData._id, item._id, 1))
                                        alert("Item Added to Cart")
                                    }}> Add to Cart </button>}
                                <br />
                            </ul>
                        </div>
                    )
                }) : <p className = {styles.else}>No Products Found.</p>}
            </div>
        </div>
    )
}

export default Home
