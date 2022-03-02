import React from 'react'
import { Nav } from 'react-bootstrap'


function Navigation() {
    const user = localStorage.getItem('userAuthData')

    return (
        <div>
            <Nav>         
            {!user ?
                <>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/user'>Register</Nav.Link>
                    <Nav.Link href='/login'>Login</Nav.Link>
                </> :
                <>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/cart'>Cart</Nav.Link>
                    <Nav.Link href='/order'>Order</Nav.Link>
                    <Nav.Link href='/logout'>Logout</Nav.Link>
                </>
            }


            </Nav>
        </div>
    )
}

export default Navigation
