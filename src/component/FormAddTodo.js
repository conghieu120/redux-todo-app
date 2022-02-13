import React from 'react'

const FormAddTodo = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <form className = 'add-form'>
        <input type = 'text' />
        <button type = 'submit' onClick = {handleSubmit}>
            ADD
        </button>
    </form>
  )
}

export default FormAddTodo