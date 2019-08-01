import React, { Component } from 'react';
import ItemStatusFilter from '../item-status-filter';
import './search-panel.css';

export default class SearchPanel extends Component {
    
    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    }

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    render() {

        const { filter, onFilterChange } = this.props;

        return (
            <div className="search-panel" >
                <input
                    type="text"
                    placeholder="type of search"
                    onChange={this.onSearchChange}
                    value={this.state.term}
                    className="form-control" />
                <ItemStatusFilter 
                filter={filter}
                onFilterChange={onFilterChange}
                />
            </div>
        )
    }
}
