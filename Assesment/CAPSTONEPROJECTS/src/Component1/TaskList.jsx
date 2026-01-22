import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTask, updateTask } from "../features/taskslice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.list);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filtered = tasks.filter(t =>
    t.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input placeholder="Search by name" onChange={e => setSearch(e.target.value)} />

      {filtered.length === 0 && <p>No records found</p>}

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.priority}</td>
              <td>
                <button onClick={() => dispatch(deleteTask(task.id))}>
                  Delete
                </button>
                <button onClick={() => dispatch(updateTask({ ...task, title: "Updated" }))}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
