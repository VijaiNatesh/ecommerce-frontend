import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { registerUser } from '../redux/action/userAction';
import styles from '../../src/myStyles.module.css'

function User() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const dispatch = useDispatch()
    const state = useSelector(state => state.user)
    const {newUser} = state

    const submitHandler = (e) => {
        e.preventDefault()
        const userData = {
            name: name,
            email: email,
            password: password
        }
        dispatch(registerUser(userData))
        setName("")
        setEmail("")
        setPassword("")
    }
    return (
        <div className = {styles.register}>
            <form>
                <div className = {styles.formlabel}>
                <label>Name:</label>
                <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)}/><br/>
                </div>
                <div className = {styles.formlabel}>
                <label className = {styles.formlabel}>Email:</label>
                <input type = "mail" value = {email} onChange = {(e) => setEmail(e.target.value)}/><br/>
                </div>
                <div className = {styles.formlabel}>
                <label className = {styles.formlabel}>Password:</label>
                <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/><br/>
                </div>
                <div className = {styles.formlabel}>
               <button onClick = {submitHandler}> Register </button>
               </div>
                </form>
                <p>{newUser}</p>
        </div>
    )
}

export default User
