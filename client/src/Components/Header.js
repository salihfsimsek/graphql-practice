import React from 'react'

import { NavLink } from 'react-router-dom'

import bgImage from '../assets/event.jpg'

const Header = () => {
    const path = window.location.pathname

    console.log(path)

    const menuItems = [
        { path: '/', name: 'Home' },
        { path: '/events', name: 'Events' },
        { path: '/create-event', name: 'Create Event' }
    ]

    const menuItem = (menuName, path) => {
        return (
            <li key={menuName} className={`menu_item mx-4 text-gray-300 hover:text-white`}>
                <NavLink to={path} className={({ isActive }) => isActive ? 'text-white' : ''}>
                    {menuName}
                </NavLink>
            </li>
        )

    }

    return (
        <header className={`sticky top-0 border-b-slate-400`}
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'top' }}
        >
            <div className='container h-14 flex justify-between items-center mx-auto my-auto'>
                <span className='logo text-3xl text-white'>
                    Eventify
                </span>
                <ul className='menu_items flex justify-end items-center'>
                    {menuItems.map((item, index) => (
                        menuItem(item.name, item.path)
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header