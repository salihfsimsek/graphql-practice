import React from 'react'

const Button = ({ children, type }) => {
    return (
        <button type={type} className='px-8 py-2 border-2 rounded-lg border-gray-500 hover:border-gray-700'>
            {children}
        </button>
    )
}

export default Button