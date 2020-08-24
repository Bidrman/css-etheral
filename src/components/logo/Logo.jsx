import React from 'react'

const Logo = ({ size }) => {
    return (
        <div className={`logo ${size}`}>
            <img src='../../files/images/new_logo.svg' alt='logo' />
        </div>
    )
}

export default Logo
