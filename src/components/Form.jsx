import React, { useState } from 'react';
import {StyledForm} from '../styles/StyledForm';

const Form = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <label>Title</label>
            <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <label>Task</label>
            <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </StyledForm>
    );
};

export default Form;
