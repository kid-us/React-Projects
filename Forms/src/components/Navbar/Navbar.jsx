import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='container pt-3'>
                <Link className='me-5 text-decoration-none' to={"login"}>Login</Link>
                <Link to={"register"}>Sign Up</Link>
            </div>
        </>
    )
}

export default Navbar