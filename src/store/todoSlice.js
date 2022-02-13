import { v4 as uuidv4 } from 'uuid';
import { createSlice, current } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      }
    ]
  },
  reducers: {
    toggleComplated: (state, action) => {
      state.todos.map(todo => {
        if (todo.id == action.payload) {
          todo.completed = !todo.completed
        }
      })
    },
    addTodo: (state,action) => {
      state.todos.unshift({
        id: uuidv4(),
        title: action.payload,        
        completed: false
      })
    },
    deleteTodo: (state, action) => {
      state.todos.splice(state.todos.map(todo => todo.id).indexOf(action.payload), 1)
    }
  }
})

export const {toggleComplated, addTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer