import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label)
    }

    render() {
        return (
            <form 
            className="item-add-form"
            onSubmit={this.onSubmit}>
                <input type="text"
                className="form-control"
                onChange={this.onLabelChange}
                placeholder="What needsto be done"/>
                <button className="btn btn-info btn-sm">Add item</button>
            </form>
        )
    }
}