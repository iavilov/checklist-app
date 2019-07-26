import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        return (
            <tr key={item.id}>
                <TodoListItem {...item} />
            </tr>
        );
    });

    return (
        <div className="todo-list">
            <table class="table">
                <tbody>
                    {elements}
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;