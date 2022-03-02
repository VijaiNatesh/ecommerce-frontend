import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from '../redux/action/itemAction';

function AddItem() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)

    const dispatch = useDispatch()

    const state = useSelector(state => state.item)
    const {addItems} = state

    const submitHandler = (e) => {
        e.preventDefault()
        const itemData = {
            title: title,
            description: description,
            category: category,
            price: price
        }
        dispatch(addItem(itemData))
        setTitle("")
        setDescription("")
        setCategory("")
        setPrice(0)
    }


    return (
        <div>
            <form>
                <label> Title of the Item </label>
                <input type = "text" value = {title} onChange = {(e) => setTitle(e.target.value)} /><br/>
                <label> Description of the Item </label>
                <input type = "text" value = {description} onChange = {(e) => setDescription(e.target.value)} /><br/>
                <label> Category of the Item </label>
                <input type = "text" value = {category} onChange = {(e) => setCategory(e.target.value)} /><br/>
                <label> Price</label>
                <input type = "number" value = {price} onChange = {(e) => setPrice(e.target.value)} /><br/>
                <button onClick = {submitHandler}> Add Item </button>
                </form>
                <p>{addItems}</p>            
        </div>
    )
}

export default AddItem
