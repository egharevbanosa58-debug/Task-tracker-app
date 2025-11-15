import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
// import Buttons from './Buttons';


const Input = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");


    // Loading tasks on first render
    useEffect(()=> {
        const saved = localStorage.getItem("tasks");
        if (saved) setTasks(JSON.parse(saved));
    }, []);


    //Saving tasks anytime they change
    useEffect(()=> {
        if (tasks.length > 0 ){
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);



    //The function to add a task
    function addTask() {
        if (!task.trim()) return;
        const newTask = { id: Date.now(), text: task };
        setTasks(prev => [...prev, newTask]);
        setTask("");
    }

    //Function for filter
    const filteredTasks = tasks.filter((task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    //The function to delete a task
    function deleteTask(id) {
        setTasks(prev => prev.filter(t => t.id !== id));
    }
    //Function to toggle checkbox
    function check(id) {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
    }



    //The return Statement
    return (
        <div className="nosa">
            <div className="input-container">
                <input type="text" value={task} placeholder="Add a new task..." onChange={(e) => setTask(e.target.value)} />
                <button onClick={addTask} >+</button>
            </div>

            <p className="len">{tasks.filter(t => !t.completed).length} remaining task(s)</p>

            <div className="button-container">
                <button className={`btn ${filter === "all" ? "active" : "inactive"}`} onClick={() => setFilter("all")}>All</button>
                <button className={`btn ${filter === "active" ? "active" : "inactive"}`} onClick={() => setFilter("active")}>Active</button>
                <button className={`btn ${filter === "completed" ? "active" : "inactive"}`} onClick={() => setFilter("completed")}>Completed</button>
            </div>

            <div >
                <ul >
                    {filteredTasks.map(t => (<li key={t.id} className={`task-container ${t.completed ? "completed" : ""}`}>
                        <input className="tick" type="checkbox" checked={t.completed} onChange={() => check(t.id)} />

                        <span className={`list-div ${t.completed ? "completed" : ""}`}>{t.text}</span>

                        <button onClick={() => deleteTask(t.id)} className="trash">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 h-4 w-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                        </button>
                    </li>))}
                </ul>
            </div>
        </div>
    )
}

export default Input;
