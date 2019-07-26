import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }

    return (
        <div className="item-row">
            <p style={style}>{label}</p>
            <div className="item-button">
                <button type="button" className="btn btn-outline-success btn-sm">
                    <i className="fa fa-check"></i>
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-exclamation"></i>
                </button>
            </div>
        </div>

    );
}

export default TodoListItem;