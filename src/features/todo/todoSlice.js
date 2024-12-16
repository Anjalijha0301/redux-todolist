import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({ id: Date.now(), name: action.payload });
    },
    updateTodo: (state, action) => {
      const index = state.todo.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.todo[index].name = action.payload.name; // Update name
      }
    },
    removeTdo: (state, action) => {
      state.todo = state.todo.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, removeTdo } = todoSlice.actions;
export default todoSlice.reducer;
