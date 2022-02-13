import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toggleComplated, deleteTodo} from '../store/todoSlice'

const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)

    const toggleComplate = (id) => {
        dispatch(toggleComplated(id))
    }
    const handleDelete = (id) => {
       dispatch(deleteTodo(id))
    }

  return (
    <div>
        <ul className = 'todo-list'>
            {
                todos.map(todo => (
                    <li key = {todo.id} className = {`todo-item ${todo.completed? 'complated' : ''}`}>
                        <input  
                            onChange = {() => toggleComplate(todo.id)} 
                            type = 'checkbox'
                            checked = {todo.completed}
                        />
                        {todo.title}
                        <button onClick = {() => handleDelete(todo.id) }>
                        Delete</button>
                    </li>            
                ))}            
        </ul>
    </div>
  )
}

export default TodoList