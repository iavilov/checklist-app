import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import './index.css';

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

ReactDOM.render(<App />, document.getElementById('root'));