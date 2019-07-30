import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    render() {
        return (
            <div className="item-status-filter">
                <button type="button" className="btn btn-outline-success btn-sm">
                    <i className="fa fa-check"></i>
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-exclamation"></i>
                </button>
            </div>
        );
    }
}