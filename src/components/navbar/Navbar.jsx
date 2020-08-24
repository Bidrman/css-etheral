import React from 'react'

const Navbar = ({ logo }) => {
    return (
        <nav className='navbar'>
            {logo}
            <ul className='navigation'>
                <li className='nav_item'>
                    <a href='#work' className='link-navigation'>
                        Work
                    </a>
                </li>
                <li className='nav_item'>
                    <a href='#testimonials' className='link-navigation'>
                        Testimonials
                    </a>
                </li>
                <li className='nav_item'>
                    <a href='#about' className='link-navigation'>
                        About
                    </a>
                </li>
                <li className='nav_item'>
                    <a href='#contact' className='link-navigation'>
                        Contact us
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
