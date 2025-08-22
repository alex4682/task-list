import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Tasks from './components/Tasks';
import Form from './components/Form';

let tasks = [
  { title: 'Task 1', description: 'make hw' },
  { title: 'Task 2', description: 'play basketball on the court' },
  { title: 'Task 3', description: 'task 3' },
];

const addTask = (newTask) => {
  tasks.push(newTask);
  renderApp(); // Перерендерити додаток
};

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Form addTask={addTask} />
      <Tasks tasks={tasks} />
    </React.StrictMode>
  );
};

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
