import { Component } from 'react';
import { TaskList, TaskItem } from '../styles/Tasks';
import { StyledForm } from '../styles/StyledForm';

class Tasks extends Component {
  state = {
    tasks: this.props.tasks,
    title: '',
    description: ''
  };

  formSubmit = (e) => {
    e.preventDefault();
    const { title, description, tasks } = this.state;
    this.setState({
      tasks: [...tasks, { title, description }],
      title: '',
      description: ''
    });
  };

  render() {
    const { title, description } = this.state;

    return (
      <div>
        <StyledForm onSubmit={this.formSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
            required
          />
          <label>Task</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => this.setState({ description: e.target.value })}
            required
          />
          <button type="submit">Add Task</button>
        </StyledForm>
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
      </div>
    );
  }
}

export default Tasks;
