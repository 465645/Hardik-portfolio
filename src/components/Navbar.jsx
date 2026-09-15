import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const links = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <nav className='navbar'>
            <div className='nav-inner'>
                <a href='#' className='logo'>
                    Hardik
                    <span>Jain</span>
                    <span className='logo-dot'></span>
                </a>

                {/* Desktop Links */}
                <ul className='nav-links'>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger */}
                <button className='hamburger' onClick={() => setShowMenu(!showMenu)} aria-label='Toggle menu'>
                    {showMenu ? <FaXmark /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${showMenu ? 'open' : ''}`}>
                {links.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setShowMenu(false)}>
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
