import { Component } from 'react';
import {TaskList, TaskItem} from '../styles/Tasks';

class Tasks extends Component {

  state = {
    tasks: this.props.tasks
  }
  render(){
    return (
      <div>
        <h1>Task List</h1>
        <TaskList>
          {this.state.tasks.map((task, index) => (
            <TaskItem key={index}>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </TaskItem>
          ))}
        </TaskList>
      </div>
    );
  }
}

export default Tasks;
