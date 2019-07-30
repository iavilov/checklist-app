import React, { Component } from 'react';
//import ItemStatusFilter from '../item-status-filter'
import './todo-list-item.css';

export default class TodoListItem extends Component {

    constructor() {
        super();
        this.state = {
            done: false,
            important: false
        };
    }

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    onClickMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    }

    render() {
        const { label } = this.props;
        const { done, important } = this.state;

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
                    onClick={this.onLabelClick}>{label}</p>
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
                        onClick={this.onClickMarkImportant}>
                        <i className="fa fa-exclamation"></i>
                    </button>
                </div>
            </div>

        );
    }
}