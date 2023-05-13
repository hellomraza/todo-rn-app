import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todosList: [],
};
export const todoSlice = createSlice({
  name: 'todos/Slice',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.todosList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      let newList = state.todosList.filter(todo => todo.id !== action.payload);
      return {...state, todosList: newList};
    },
    editTodos: (state, action) => {},
  },
});

export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
