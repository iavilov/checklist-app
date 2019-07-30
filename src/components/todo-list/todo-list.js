import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <div key={item.id} className="todo-list-row">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)} />
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