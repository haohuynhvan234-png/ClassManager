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

    const addTask = (task) => {
        const newTask = {
            id: Date.now(),
            text: task,
            completed: false,
        };

        const updatedTasks = [...listTask, newTask];
        setListTask(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
    return (
        <div className={`min-h-screen ${darkMode ? 'bg-[#0A0A0A] text-white' : 'bg-gray-50 text-gray-900'} duration-300`}>

            <div className="max-w-7xl mx-auto px-8">

                <div className="mx-auto max-w-6xl px-6 py-8 font-sans leading-6 duration-300">
                    <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <DashboardStats darkMode={darkMode} />
                    <Search darkMode={darkMode} />
                    <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-1">
                            <Form darkMode={darkMode} />
                        </div>
                        <div className="lg:col-span-2">
                            <StudentList darkMode={darkMode} />
                        </div>
                    </main>
                </div>
            </div >
        </div >
    )
}

export default Home
