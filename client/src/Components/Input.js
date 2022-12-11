import React from 'react'

const Input = ({ type, placeholder, value, changeValue }) => {
    return (
        <input value={value} onChange={e => changeValue(e.target.value)} type={type} placeholder={placeholder}
            className='border-2 border-gray-500 rounded-md p-2 w-full max-w-[500px]'
        />
    )
}

export default Input