import React from 'react'

import { NavLink } from 'react-router-dom'

const Header = () => {
    const menuItems = [
        { path: '/', name: 'Home' },
        { path: '/create-event', name: 'Create Event' }
    ]

    const menuItem = (menuName, path) => {
        return (
            <li key={menuName} className={`menu_item mx-4 text-gray-600 hover:text-black`}>
                <NavLink to={path} className={({ isActive }) => isActive ? 'text-black' : ''}>
                    {menuName}
                </NavLink>
            </li>
        )

    }

    return (
        <header className='border-b-slate-400 border-2 sticky top-0 bg-white'>
            <div className='container h-14 flex justify-between items-center mx-auto my-auto'>
                <span className='logo text-3xl flex-1'>
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