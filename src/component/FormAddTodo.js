import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addTodo} from '../store/todoSlice'

const FormAddTodo = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos)
  const [title, setTitle] = useState()
  const changeTitle = e => {
    setTitle(e.target.value)
  }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(title.trim() !== '') dispatch(addTodo(title.trim()))
        setTitle('')
    }
  return (
    <form className = 'add-form'>
        <input value = {title} onChange = {changeTitle} type = 'text'/>
        <button type = 'submit' onClick = {handleSubmit}>
            ADD
        </button>
    </form>
  )
}

export default FormAddTodo