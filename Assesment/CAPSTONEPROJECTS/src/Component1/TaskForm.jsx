import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskslice";

const TaskForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!form.title) return alert("Title required");
    dispatch(addTask(form));
    setForm({ title: "", description: "", dueDate: "", priority: "Low" });
  };

  return (
    <form onSubmit={submitHandler}>
      <input name="title" placeholder="Task Title" onChange={handleChange} value={form.title} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input type="date" name="dueDate" onChange={handleChange} />
      <select name="priority" onChange={handleChange}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;
