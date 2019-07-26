import React from 'react';
import './search-panel.css';

const SearchPanel = () => {

    const searchText = 'Type here to search';

    return (
        <div className="search-panel">
            <input
                placeholder={searchText}
                className="form-control" />
            <div className="btn-group btn-group-toggle">
                <button type="button" className="btn btn-outline-primary">All</button>
                <button type="button" className="btn btn-outline-info">Active</button>
                <button type="button" className="btn btn-outline-success">Done</button>
            </div>
        </div>
    )
}

export default SearchPanel;