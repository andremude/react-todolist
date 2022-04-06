import React, { useState } from 'react'
import Task from './Task'
import Form from './Form'
import '../styles/TaskList.css'

const TaskList = () => {

const [tasks, setTasks] = useState([]);

const addTask = task => {
  if(task.text.trim()) {
    task.text = task.text.trim();

    const tasksUpdated = [task, ...tasks];
    setTasks(tasksUpdated);
  }
};

const deleteTask = id => {
  const tasksUpdated = tasks.filter(task => task.id !== id);
  setTasks(tasksUpdated)
}

const completeTask = id => {
  const tasksUpdated = tasks.map(task => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });
  setTasks(tasksUpdated);
}

  return (
    <>
      <Form onSubmit={addTask}/>
      <div className='task-list-container'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          )
        }
      </div>

    </>
  )
}

export default TaskList
