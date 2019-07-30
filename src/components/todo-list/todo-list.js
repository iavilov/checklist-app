import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <div key={item.id} className="todo-list-row">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)} />
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