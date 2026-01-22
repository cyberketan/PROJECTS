import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API_URL = "https://jsonplaceholder.typicode.com/posts";

/* GET */
export const fetchTasks = createAsyncThunk(
  "tasks/fetch",
  async () => {
    const res = await axios.get(API_URL);
    return res.data.slice(0, 5);
  }
);

/* POST */
export const addTask = createAsyncThunk(
  "tasks/add",
  async (task) => {
    const res = await axios.post(API_URL, task);
    return res.data;
  }
);

/* DELETE */
export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

/* UPDATE */
export const updateTask = createAsyncThunk(
  "tasks/update",
  async (task) => {
    const res = await axios.put(`${API_URL}/${task.id}`, task);
    return res.data;
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.list = state.list.filter(t => t.id !== action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.list.findIndex(t => t.id === action.payload.id);
        state.list[index] = action.payload;
      });
  }
});

export default taskSlice.reducer;
