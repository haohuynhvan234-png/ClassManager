import React from 'react'

export const Search = ({ darkMode }) => {
    return (
        <div className="mb-6">
            <div className={`${!darkMode ? 'bg-white border border-gray-100' : 'bg-[#111111] border border-[#141414]'} rounded-full shadow px-4 py-3`}>
                <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386-1.414 1.415-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    </svg>
                    <input className={`${!darkMode ? 'text-gray-600' : 'text-gray-300'} flex-1 bg-transparent outline-none text-sm`} placeholder="Tìm kiếm theo tên hoặc địa chỉ..." />
                </div>
            </div>
        </div>
    )
}
