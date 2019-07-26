import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        return (
            <div className="todo-list-row" key={item.id}>
                <TodoListItem {...item} />
            </div>
        );
    });

    return (
        <div className="todo-list">
            {elements}
        </div>
    );
}

export default TodoList;