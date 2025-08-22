import styled from 'styled-components';

export const TaskList = styled.div`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap:20px;
    justify-content: center;
    margin: 20px 0 20px 0;
`;

export const TaskItem = styled.div`
    border: 2px solid #000;
    border-radius: 10px;
    padding: 10px;
    width: 300px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
    background-color: #f9f9f9;
    & h2 {
        margin: 0 0 10px 0;
        font-size: 1.5em;
    }
    & p {
        margin: 0;
        font-size: 1em;
        color: #555;
    }
`;