import React from 'react';
import './app-header.css';

const AppHeader = ({todo, done}) => {
    return (
        <header>
            <h1>TODO list</h1>
            <p>{todo} more to do, {done} done</p>
        </header>
    );
}

export default AppHeader;