import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "./todoslice";
import { useState } from "react";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    dispatch(editTodo({ id, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSave(todo.id)}>Save</button>
            </>
          ) : (
            <>
              {todo.text}
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
