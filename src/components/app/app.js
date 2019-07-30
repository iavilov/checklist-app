import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {

    maxId = 100;
    state = {
        todoData: [
            { label: 'Drink cofee', important: false, id: 1 },
            { label: 'Make awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            imoprtant: false,
            id: this.maxId++
        }

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ] 

            return {
                todoData: newArr
            }
        });

    };

    render() {
        return (
            <div className="todo-app">
                <div className="content">
                    <AppHeader />
                    <SearchPanel />
                    <TodoList
                        todos={this.state.todoData}
                        onDeleted={this.deleteItem} />
                    <ItemAddForm onAdd={this.addItem} />
                </div>
            </div>
        );
    }
}