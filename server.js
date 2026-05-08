// server.js

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let tasks = []; // memory storage

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Add task
app.post("/tasks", (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.json({ message: "Task added" });
});

// Delete task
app.delete("/tasks/:index", (req, res) => {
    const index = req.params.index;
    tasks.splice(index, 1);
    res.json({ message: "Task deleted" });
});

app.listen(3000, () => {
    console.log("Server running on this http://localhost:3000");
});


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});