import React, { useState } from 'react'

const FileInput = ({ value, changeValue }) => {
    const [active, setActive] = useState(false)

    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setActive(true);
        } else if (e.type === "dragleave") {
            setActive(false);
        }
    };

    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            changeValue(e.dataTransfer.files[0]);
            setActive(false);
        }
    };

    const handleChange = function (e) {
        e.preventDefault();
        e.stopPropagation()
        if (e.target.files && e.target.files[0]) {
            changeValue(e.target.files[0]);
            setActive(false);
        }
    };

    return (
        <div className="flex items-center justify-center w-full"
        >
            <label
                onDragEnter={handleDrag}
                onDrop={handleDrop}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                htmlFor="dropzone-file" className={`flex flex-col items-center justify-center w-full max-w-[500px] h-32 border-2 rounded-md cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ${active ? 'border-gray-700' : 'border-gray-500'}`}>
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" className={`w-10 h-10 mb-3 ${active ? 'text-gray-700' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <span className={`font-semibold mb-2 text-sm ${active ? 'text-gray-700' : 'text-gray-500'}`}>Click or drag and drop to upload poster</span>
                </div>
                <input id="dropzone-file" type="file" className="hidden"
                    onChange={handleChange}
                />
            </label>
        </div>
    )
}

export default FileInput