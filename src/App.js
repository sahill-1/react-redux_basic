import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask } from './taskActions';

import './App.css';

const App = ({tasks, addTask, removeTask}) => {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if(taskText.trim() !== ""){
      addTask({id:Date.now(), text:taskText});
      setTaskText("")
    }
  };
  const handleRemoveTask = taskId => {
    removeTask(taskId)
  };

  return(
    <div className='App'>
      <h1>Redux Store</h1>
      <div>
        <input
          type='text'
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}{" "}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        )
        )}
      </ul>
    </div>
  )
}
const mapStateToProps = state => {
  return{
    tasks:state.tasks
  }
}

const mapDispatchToProps = {
  addTask,
  removeTask
}

export default connect(mapStateToProps,mapDispatchToProps)(App)