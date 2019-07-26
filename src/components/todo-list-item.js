import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }

    return (
        <div className="item-row">
            <td style={style}>{label}</td>
            <button type="button" class="btn btn-outline-success btn-sm">
                <i class="fa fa-check"></i>
            </button>
        </div>

    );
}

export default TodoListItem;