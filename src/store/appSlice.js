import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList = [...state.taskList, action.payload];
      localStorage.setItem("task-list", JSON.stringify([...state.taskList]));
    },

    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter((task) => task.id !== action.payload);
      localStorage.setItem("task-list", JSON.stringify(state.taskList));
    },

    processingTask: (state, action) => {
      state.taskList.map((item) => {
        if (action.payload === item.id) {
          if (item.status === "pending") {
            item.status = "processing";
          } else {
            item.status = "pending";
          }
        }
      });
      localStorage.setItem("task-list", JSON.stringify(state.taskList));
    },

    completedTask: (state, action) => {
      state.taskList.map((item) => {
        if (action.payload === item.id) {
          if (item.status === "processing" || "pending") {
            item.status = "done";
          } else {
            item.status = "processing" || "pending";
          }
        }
      });
      localStorage.setItem("task-list", JSON.stringify(state.taskList));
    },
  },
});

export const { addTask, deleteTask, processingTask, completedTask } = appSlice.actions;

export default appSlice.reducer;
