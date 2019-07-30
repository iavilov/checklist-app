import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    render() {
        return (
            <div className="item-add-form">
                <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.props.onAdd('Hello world')}>Add item</button>
            </div>
        )
    }
}