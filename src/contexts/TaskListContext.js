import React, { createContext, useState, useEffect } from 'react'
import {v1 as uuid} from "uuid";

export const TaskListContext = createContext()

const TaskListContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const [editItem, setEditItem] = useState(null)

    // Add tasks - Yapılacak şey ekle
    const addTask = title => {
        setTasks([...tasks, { title, id: uuid() }])
    }

    // Remove tasks - Yapılacak şeyi sil
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    // Clear tasks - Yapılacak şeyi temizle
    const clearList = () => {
        setTasks([])
    }

    // Find task - Yapılacak şeyi bul
    const findItem = id => {
        const item = tasks.find(task => task.id === id)

        setEditItem(item)
    }

    // Edit task - Yapılacak şeyi düzenle
    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

        console.log(newTasks)

        setTasks(newTasks)
        setEditItem(null)
    }

    return (
        <TaskListContext.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                clearList,
                findItem,
                editTask,
                editItem
            }}
        >
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider