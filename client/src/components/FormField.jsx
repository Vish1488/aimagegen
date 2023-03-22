import React from 'react'

const FormField = ({ labelName, type, name, value, placeholder, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
                <label htmlFor='{name}' className='block text-sm font-medium text-gray-900'>
                    {labelName}
                </label>
                {isSurpriseMe && (
                    <button type='button' onClick={handleSurpriseMe} className="font-semibold text-xs bg-[#3939b7] py-1 px-2 rounded-[5px] text-white">
                        Surprise Me
                    </button>
                )}
            </div>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className='bg-gray-100 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#4649ff] outline-none block w-full p-3'
            />
        </div>
    )
}

export default FormField
