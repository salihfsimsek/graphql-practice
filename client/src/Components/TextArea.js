import React from 'react'

const TextArea = ({ value, changeValue, placeholder }) => {
    return (
        <textarea
            value={value}
            onChange={e => changeValue(e.target.value)}
            placeholder={placeholder}
            className='border-2 border-gray-500 rounded-md p-2 w-full max-w-[500px] min-h-[150px] outline-none focus:border-gray-700 resize-none'
        />
    )
}

export default TextArea