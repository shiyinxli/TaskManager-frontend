import React, { useState, useEffect } from 'react';
import api from '../api';

function TaskForm({ selectedTask, onSave }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    completed: false,
  });

  useEffect(() => {
    if (selectedTask) setForm(selectedTask);
  }, [selectedTask]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await api.put(`/tasks/${form.id}`, form);
    } else {
      await api.post('/tasks', form);
    }
    setForm({ title: '', description: '', completed: false });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{form.id ? 'Edit Task' : 'New Task'}</h2>
      <input
  name="title"
  value={form.title}
  onChange={handleChange}
  placeholder="Title"
  required
  className="w-full p-2 border rounded mb-2"
/>

<textarea
  name="description"
  value={form.description}
  onChange={handleChange}
  placeholder="Description"
  className="w-full p-2 border rounded mb-2"
/>

<label className="flex items-center space-x-2">
  <input
    type="checkbox"
    name="completed"
    checked={form.completed}
    onChange={handleChange}
  />
  <span>Completed</span>
</label>

<button
  type="submit"
  className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
>
  {form.id ? 'Update' : 'Add'}
</button>

    </form>
  );
}

export default TaskForm;
