import React from 'react'

const Input = ({ type, placeholder, value, changeValue, required, className }) => {
    return (
        <input
            value={value}
            onChange={e => changeValue(e.target.value)}
            type={type}
            placeholder={placeholder}
            required={required}
            className={`border-2 border-gray-500 rounded-md p-2 w-full max-w-[500px] outline-none focus:border-gray-700 ${className ? className : ''}`}
        />
    )
}

export default Input