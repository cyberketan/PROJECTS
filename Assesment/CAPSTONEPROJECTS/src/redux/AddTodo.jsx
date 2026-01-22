


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoslice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addtodohandler = (e) => {
    e.preventDefault(); // ✅ correct
    if (input.trim() === "") return;

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addtodohandler}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">ADD Todo</button>
    </form>
  );
};

export default AddTodo;
