
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

let goals = [
  { id: 1, title: 'Launch Calendar MVP', progress: 20 },
  { id: 2, title: 'Workout 3x a week', progress: 50 }
];

let tasks = [
  { id: 1, title: 'Build calendar UI', date: '2025-03-27', goalId: 1 },
  { id: 2, title: 'Setup Express API', date: '2025-03-26', goalId: 1 }
];

app.get('/api/goals', (req, res) => res.json(goals));
app.get('/api/tasks', (req, res) => res.json(tasks));

app.post('/api/goals', (req, res) => {
  const newGoal = { id: Date.now(), ...req.body };
  goals.push(newGoal);
  res.status(201).json(newGoal);
});

app.post('/api/tasks', (req, res) => {
  const newTask = { id: Date.now(), ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
