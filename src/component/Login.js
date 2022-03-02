import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../redux/action/userAction';
import {useNavigate} from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state =useSelector(state => state.user)
    const {loggedIn} = state
    console.log(loggedIn)

    const submitHandler = (e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: password
        }
        dispatch(loginUser(userData))
        setEmail(" ")
        setPassword(" ")
        navigate("/")
    }
    return (
        <div>
           <form>
               <label>Email</label>
               <input type = "email" value = {email} onChange = {(e) => setEmail(e.target.value)} /><br/>
               <label>Password</label>
               <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} /><br/>
               <button onClick = {submitHandler}> Login </button>
               </form>               
        </div>
    )
}

export default Login
