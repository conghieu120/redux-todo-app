import React from 'react';
import './App.css';
import Header from './component/Header';
import FormAddTodo from './component/FormAddTodo';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="App">
        <Header/>
        <FormAddTodo/>
        <TodoList/>
    </div>
  );
}

export default App;
