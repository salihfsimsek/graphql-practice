import React from 'react'

const SelectBox = ({ placeholder, value, changeValue, required, datas, printParameter }) => {

    return (
        <select
            value={value}
            onChange={e => changeValue(e.target.value)}
            required={required}
            placeholder={placeholder}
            className='bg-white border-2 border-gray-500 rounded-md p-2 w-full max-w-[500px] outline-none focus:border-gray-700'
        >
            <option value=''>{placeholder}</option>
            {datas?.map((data, index) => (
                <option key={index} value={data.id}>{data[printParameter]}</option>
            )
            )}
        </select>
    )
}

export default SelectBox