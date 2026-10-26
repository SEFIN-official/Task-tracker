
const express = require("express");

const app = express();
const PORT = 3000;

// Parse incoming JSON request bodies.
app.use(express.json());

const tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build my first API", completed: false },
  { id: 3, title: "Push code to GitHub", completed: false }
];

// GET /tasks - Read all tasks.
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST /tasks - Create a new task.
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  // Validate the title.
  if (typeof title !== "string" || !title.trim()) {
    return res.status(400).json({
      error: "Title is required and must be a non-empty string."
    });
  }

  const newTask = {
    id: tasks.length
      ? Math.max(...tasks.map(task => task.id)) + 1
      : 1,
    title: title.trim(),
    completed: false
  };

  tasks.push(newTask);

  return res.status(201).json(newTask);
});

// Start the server.
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
