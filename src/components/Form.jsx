import React, { useState } from 'react'
import "../styles/Form.css"
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(), // This creates a random UUID
      text: input,
      completed: false
    };

    props.onSubmit(newTask)
    setInput('')
  }

  return (
    <form
      className='task-form'
      >
      <input
        className='task-input'
        type='text'
        placeholder='Enter a task'
        name='text'
        onChange={handleChange}
        />
      <button className='task-btn' onClick={handleSubmit}>Add Task</button>
    </form>
  )
}

export default Form
