import React from 'react'

export const StudentList = ({ darkMode }) => {
    return (
        <div className="mb-10">
            <div className={`${!darkMode ? 'bg-white border-dashed border-gray-200' : 'bg-[#111111] border-dashed border-[#222]'} rounded-xl shadow p-8 min-h-[300px] flex items-center justify-center`}>
                <div className="text-center text-gray-500">
                    <div className={`${darkMode ? 'bg-[#222]' : 'bg-gray-100'} mx-auto mb-4 w-16 h-16 rounded-md flex items-center justify-center`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-8 h-8 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                        >
                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                        </svg>
                    </div>
                    <div className="text-lg font-semibold">Không tìm thấy học sinh</div>
                    <div className="text-sm mt-2">Chưa có dữ liệu hoặc không có kết quả phù hợp với tìm kiếm của bạn.</div>
                </div>
            </div>
        </div>
    )
}
