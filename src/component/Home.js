import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../redux/action/itemAction';
import { addToCart } from '../redux/action/cartAction';


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
        <div>

            {items ? items.map((item) => {
                return (
                    <>
                        {item.title}<br />
                        {item.category}<br />
                        {item.price}<br />
                        {!user ? <b>Login to Purchase</b> :
                            <button onClick={() => dispatch(addToCart(userData._id, item._id, 1))}> Add to Cart </button>}
                        <br />
                    </>
                )
            }) : "No Products Found."}






        </div>
    )
}

export default Home
