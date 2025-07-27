import React, { useEffect, useState } from 'react';
import api from '../api';

function TaskList({ onEdit, refresh }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get('/tasks');
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  return (
     <div className="mt-6">
      <h2 className="text-3xl font-semibold mb-2">Task List</h2>
      {tasks.map(task => (
        <div key={task.id} className="border p-3 mb-2 rounded bg-white shadow-sm">
          <h3 className="font-bold">{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.completed ? '✅ Done' : '⏳ Pending'}</p>
          <button
            className="text-blue-600 hover:underline mt-2"
            onClick={() => onEdit(task)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
