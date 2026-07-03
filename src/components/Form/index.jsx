import React from 'react'

export const Form = ({ darkMode, student, setStudent, handleSubmit, handleCancelEdit, handleEditStudent, isEditing }) => {
    return (
        <div className="mb-6">
            <div className={`${!darkMode ? 'bg-white' : 'bg-[#111111]'} rounded-xl shadow p-6 max-w-md`}>
                <h3 className="text-lg font-semibold mb-4">Hồ sơ học sinh mới</h3>
                <div className="grid grid-cols-2 gap-4">
                    <label className="text-sm text-gray-500">Họ và tên
                        <input
                            type="text"
                            className="mt-2 w-full rounded-md border border-gray-200 p-2 text-sm"
                            placeholder="Nguyễn Văn A"
                            value={student.name}
                            onChange={(e) => setStudent({ ...student, name: e.target.value })}
                        />
                    </label>

                    <label className="text-sm text-gray-500">Tuổi
                        <input
                            type="date"
                            min="0"
                            className="mt-2 w-full rounded-md border border-gray-200 p-2 text-sm"
                            placeholder="18"
                            value={student.age}
                            onChange={(e) => setStudent({ ...student, age: e.target.value })}
                        />
                    </label>

                    <label className="text-sm text-gray-500">Giới tính
                        <select
                            className={`${!darkMode ? 'bg-gray-50 border-gray-200 text-gray-900' : 'bg-[#111111]  text-white'} mt-2 w-full rounded-md border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white  appearance-none`}
                            value={student.gender}
                            onChange={(e) =>
                                setStudent({ ...student, gender: e.target.value })
                            }
                        >
                            <option value="Male">Nam</option>
                            <option value="Female">Nữ</option>
                            <option value="Other">Khác</option>
                        </select>
                    </label>

                    <label className="text-sm text-gray-500">Địa chỉ
                        <input
                            type="text"
                            className="mt-2 w-full rounded-md border border-gray-200 p-2 text-sm"
                            placeholder="123 Đường Lê Lợi"
                            value={student.address}
                            onChange={(e) => setStudent({ ...student, address: e.target.value })}
                        />
                    </label>
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        className={`${!darkMode ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity duration-300`}
                        onClick={handleSubmit}
                    >
                        {isEditing ? 'Lưu cập nhật' : 'Tạo hồ sơ'}
                    </button>
                    {isEditing && (
                        <button
                            className={`${!darkMode ? 'bg-gray-300 text-gray-700' : 'bg-[#333] text-white'} ml-4 px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity duration-300`}
                            onClick={handleCancelEdit}
                        >
                            Hủy
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
