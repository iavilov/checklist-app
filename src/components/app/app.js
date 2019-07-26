import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import './app.css';

const App = () => {

    const todoData = [
        { label: 'Drink cofee', important: false, id: 1 },
        { label: 'Make awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ];

    return (
        <div className="todo-app">
            <div className="content">
                <AppHeader />
                <SearchPanel />
                <TodoList todos={todoData} />
            </div>
        </div>
    );

}

export default App;