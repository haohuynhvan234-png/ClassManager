import React, { useState, useEffect } from 'react'

import { Header } from '../../components/Header'
import { DashboardStats } from '../../components/DashboardStats'
import { Search } from '../../components/Search'
import { Form } from '../../components/Form'
import { StudentList } from '../../components/StudentList'

const Home = () => {
    const [darkMode, setdarkMode] = useState(() => {
        const savedMode = localStorage.getItem("darkMode");
        return savedMode ? JSON.parse(savedMode) : false;
    });

    const toggleDarkMode = () => {
        setdarkMode((prevMode) => {
            const nextMode = !prevMode;
            localStorage.setItem("darkMode", JSON.stringify(nextMode));
            return nextMode;
        });
    };

    const [listTask, setListTask] = React.useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
    //khai báo student
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    //tạo hàm nút bấm thêm lớp học
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    };
    //tạo hàm load dữ liệu từ localStorage
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
        setStudents(savedStudents);
    }, []);

    //tạo hàm lưu dữ liệu vào localStorage
    const [student, setStudent] = useState({
        name: "",
        age: "",
        gender: "",
        address: "",
    });

    //hàm submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!student.name || !student.age || !student.gender || !student.address) {
            alert("Vui lòng điền đầy đủ thông tin");
            return;
        }

        setStudents((prevStudents) => {
            debugger
            const updatedStudents = [
                ...prevStudents,
                {
                    id: Date.now(),
                    ...student,
                    gender: student.gender || "Nam",
                },
            ];
            localStorage.setItem("students", JSON.stringify(updatedStudents));
            return updatedStudents;
        });

        setStudent({
            name: "",
            age: "",
            gender: "",
            address: "",
        });
        setOpen(false);
    };

    //hàm quản lý danh sách sinh viên
    const totalStudents = students.length;
    const maleStudents = students.filter((student) => student.gender === "Nam").length;
    const femaleStudents = students.filter((student) => student.gender === "Nữ").length;
    //hàm điền dữ liệu học sinh vào list
    const studentsach = students;
    //hàm xóa học sinh
    const handleDeleteStudent = (id) => {
        setStudents((prevStudents) => {
            const updatedStudents = prevStudents.filter((student) => student.id !== id);
            localStorage.setItem("students", JSON.stringify(updatedStudents));
            return updatedStudents;
        })
    };

    const [editingStudentId, setEditingStudentId] = useState(null);
    const isEditing = editingStudentId !== null;

    const handleEditStudent = (id) => {
        const studentToEdit = students.find((student) => student.id === id);
        if (studentToEdit) {
            setStudent(studentToEdit || {});
            setEditingStudentId(id);
        }
    };

    // hàm hủy chỉnh sửa
    const handleCancelEdit = () => {
        setStudent({
            name: "",
            age: "",
            gender: "",
            address: "",
        });
        setEditingStudentId(null);
    };

    //hàm lưu chỉnh sửa
    const handleSaveEdit = (e) => {
        e.preventDefault();
        if (!student.name || !student.age || !student.gender || !student.address) {
            alert("Vui lòng điền đầy đủ thông tin");
            return;
        }

        setStudents((prevStudents) => {
            const updatedStudents = prevStudents.map((s) =>
                s.id === editingStudentId ? { ...s, ...student } : s
            );
            localStorage.setItem("students", JSON.stringify(updatedStudents));
            return updatedStudents;
        });
        setStudent({
            name: "",
            age: "",
            gender: "",
            address: "",
        });
        setEditingStudentId(null);
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-[#0A0A0A] text-white' : 'bg-gray-50 text-gray-900'} duration-300`}>

            <div className="max-w-7xl mx-auto px-8">

                <div className="mx-auto max-w-6xl px-6 py-8 font-sans leading-6 duration-300">
                    <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <DashboardStats darkMode={darkMode}
                        totalStudents={totalStudents}
                        maleStudents={maleStudents}
                        femaleStudents={femaleStudents} />
                    <Search darkMode={darkMode} />
                    <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-1">
                            <Form darkMode={darkMode}
                                student={student}
                                setStudent={setStudent}
                                handleSubmit={handleSubmit}
                                handleCancelEdit={handleCancelEdit}
                                handleEditStudent={handleEditStudent}
                                isEditing={isEditing}

                            />
                        </div>
                        <div className="lg:col-span-2">
                            <StudentList
                                students={studentsach}
                                darkMode={darkMode}
                                handleDeleteStudent={handleDeleteStudent}
                                handleEditStudent={handleEditStudent}
                            />
                        </div>
                    </main>
                </div>
            </div >
        </div >
    )
}

export default Home
