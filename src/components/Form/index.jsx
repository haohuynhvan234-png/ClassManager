import React from 'react'

export const Form = ({ darkMode }) => {
    return (
        <div className="mb-6">
            <div className={`${!darkMode ? 'bg-white' : 'bg-[#111111]'} rounded-xl shadow p-6 max-w-md`}>
                <h3 className="text-lg font-semibold mb-4">Hồ sơ học sinh mới</h3>
                <div className="grid grid-cols-2 gap-4">
                    <label className="text-sm text-gray-500">Họ và tên
                        <input className="mt-2 w-full rounded-md border border-gray-200 p-2 text-sm" placeholder="Nguyễn Văn A" />
                    </label>

                    <label className="text-sm text-gray-500">Ngày sinh
                        <input type="date" className="mt-2 w-full rounded-md border border-gray-200 p-2 text-sm" />
                    </label>

                    <label className="text-sm text-gray-500">Giới tính
                        <input className="mt-2 w-full rounded-md border border-gray-200 p-2 text-sm" placeholder="Nam" />
                    </label>

                    <label className="text-sm text-gray-500">Địa chỉ
                        <input className="mt-2 w-full rounded-md border border-gray-200 p-2 text-sm" placeholder="123 Đường Lê Lợi" />
                    </label>
                </div>

                <div className="flex justify-end mt-6">
                    <button className="bg-black text-white px-4 py-2 rounded-md">Tạo hồ sơ</button>
                </div>
            </div>
        </div>
    )
}
