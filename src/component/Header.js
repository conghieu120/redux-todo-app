import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const todos = useSelector(state => state.todos.todos)
  let dontComplate = 0
  todos.forEach(todo => {
    if (!todo.completed) dontComplate += 1
  });
  return (
    <div>
        <h1>Redux Todo App</h1>
        <ul className = 'nav'>
            <li>Dont completed: {dontComplate}</li>
            <li>Home</li>
            <li>Contact</li>
            <li>Total Todo: {todos.length}</li>
        </ul>
    </div>
  )
}

export default Header