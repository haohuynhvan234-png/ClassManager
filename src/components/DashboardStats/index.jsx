import React from 'react'
import { useState, useEffect } from 'react'

export const DashboardStats = ({ darkMode }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {/* Tổng số */}
            <div className={` ${!darkMode ? 'bg-[#ffffff] border border-gray-100' : 'bg-[#111] border border-[#141414]'} p-5 rounded-2xl  ${!darkMode ? 'border-gray-100 ' : 'dark:border-[#222]'} shadow-sm flex items-center gap-4 transition-colors`}>
                <div className={`p-3 ${!darkMode ? 'bg-gray-50' : 'bg-[#1a1a1a]'} rounded-xl ${!darkMode ? 'text-gray-900' : 'text-white'}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                    >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <circle cx="9" cy="7" r="4" />
                    </svg>
                </div>

                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Tổng số
                    </p>
                    <p className={`${!darkMode ? 'text-gray-900' : 'text-white'} text-2xl font-semibold dark:text-white`}>
                        0
                    </p>
                </div>
            </div>

            {/* Nam */}
            <div className={` ${!darkMode ? 'bg-[#ffffff] border border-gray-100' : 'bg-[#111111] border border-[#141414]'} p-5 rounded-2xl   shadow-sm flex items-center gap-4 transition-colors`}>
                <div className={`p-3 ${!darkMode ? 'bg-blue-50' : 'bg-blue-500/10'} rounded-xl ${!darkMode ? 'text-blue-600' : 'text-blue-400'}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                    >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>

                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Nam
                    </p>
                    <p className={`${!darkMode ? 'text-gray-900' : 'text-white'} text-2xl font-semibold dark:text-white`}>
                        0
                    </p>
                </div>
            </div>

            {/* Nữ */}
            <div className={`${!darkMode ? 'bg-[#ffffff] border border-gray-100' : 'bg-[#111111] border border-[#141414]'} p-5 rounded-2xl   shadow-sm flex items-center gap-4 transition-colors`}>
                <div className={`p-3 ${!darkMode ? 'bg-pink-50' : 'bg-pink-500/10'} rounded-xl text-pink-600 dark:text-pink-400`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                    >
                        <path d="m16 11 2 2 4-4" />
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                    </svg>
                </div>

                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Nữ
                    </p>
                    <p className={`${!darkMode ? 'text-gray-900' : 'text-white'} text-2xl font-semibold dark:text-white`}>
                        0
                    </p>
                </div>
            </div>
        </div>
    )
}
