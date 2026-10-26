
const express = require("express");

const app = express();
const PORT = 3000;

const tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build my first API", completed: false },
  { id: 3, title: "Push code to GitHub", completed: false }
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
