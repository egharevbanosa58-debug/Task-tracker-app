import React from 'react'
import Input from './Input';
const TaskCount = (props) => {
  return (
    <div>
      <p>{<Input/>} tasks remaining</p> 
    </div>
  )
}

export default TaskCount;
