import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const totalTodos = useSelector(state => state.todos.todos.length)
  return (
    <div>
        <h1>Redux Todo App</h1>
        <ul className = 'nav'>
            <li>Home</li>
            <li>Contact</li>
            <li>Total Todo: {totalTodos}</li>
        </ul>
    </div>
  )
}

export default Header