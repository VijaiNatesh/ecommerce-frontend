import React from 'react'
import {useDispatch} from 'react-redux'
import { logoutUser } from '../redux/action/userAction';
import {useNavigate} from 'react-router-dom'

function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logoutUser())
        navigate('/')
    }
    return (
        <div>
            <button onClick = {logoutHandler}> Logout </button>
        </div>
    )
}

export default Logout
