import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className='text-4xl'>📝 Task Manager</h1>
      <TaskForm selectedTask={selectedTask} onSave={triggerRefresh} />
      <TaskList refresh={refresh} onEdit={setSelectedTask} />
    </div>
  );
}

export default App;

