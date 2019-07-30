import React, { Component } from 'react';
//import ItemStatusFilter from '../item-status-filter'
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const {
            label,
            onToggleDone,
            onToggleImportant,
            done,
            important } = this.props;

        let classNames = '';
        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <div className="item-row">
                <p
                    className={classNames}
                    onClick={onToggleDone}
                >{label}</p>
                <div className="item-status-filter">
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={this.props.onDeleted}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-success btn-sm"
                        onClick={onToggleImportant}>
                        <i className="fa fa-exclamation"></i>
                    </button>
                </div>
            </div>

        );
    }
}