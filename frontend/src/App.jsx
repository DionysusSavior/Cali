
import { useEffect, useState } from 'react';

function App() {
  const [goals, setGoals] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/goals')
      .then(res => res.json())
      .then(setGoals);

    fetch('http://localhost:4000/api/tasks')
      .then(res => res.json())
      .then(setTasks);
  }, []);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">🎯 Goals Sidebar</h1>
      <ul>
        {goals.map(goal => (
          <li key={goal.id} className="mb-2">
            <strong>{goal.title}</strong> — {goal.progress}% complete
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🗓️ Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title} ({task.date})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
