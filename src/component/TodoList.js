import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
    const toggleComplated = (id) => {
        console.log(id);
    }

  return (
    <div>
        <ul className = 'todo-list'>
            {
                todos.map(todo => (
                    <li key = {todo.id} className = {`todo-item ${todo.completed? 'complated' : ''}`}>
                        <input onChange = {() => toggleComplated(todo.id)} type = 'checkbox'/>
                        {todo.title}
                        <button>Delete</button>
                    </li>            
                ))}            
        </ul>
    </div>
  )
}

export default TodoList