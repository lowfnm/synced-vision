import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: uuidv4(),
        text: action.payload.text,
        isCompleted: false,
      });
    },
    toggleComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.isCompleted = !toggledTodo.isCompleted;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
