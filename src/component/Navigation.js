import React from 'react'
import { Nav } from 'react-bootstrap'
import styles from '../../src/myStyles.module.css'



function Navigation() {
    const user = localStorage.getItem('userAuthData')

    return (
        <div>
            <Nav className = {styles.navBar}>         
            {!user ?
                <>
                    <Nav.Link className = {styles.navLink} href='/'>Home</Nav.Link>
                    <Nav.Link className = {styles.navLink} href='/user'>Register</Nav.Link>
                    <Nav.Link className = {styles.navLink} href='/login'>Login</Nav.Link>
                </> :
                <>
                    <Nav.Link className = {styles.navLink} href='/'>Home</Nav.Link>
                    <Nav.Link className = {styles.navLink} href='/cart'>Cart</Nav.Link>
                    <Nav.Link className = {styles.navLink} href='/order'>Order</Nav.Link>
                    <Nav.Link className = {styles.navLink} href='/logout'>Logout</Nav.Link>
                </>
            }


            </Nav>
        </div>
    )
}

export default Navigation
