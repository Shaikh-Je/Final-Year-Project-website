const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/finalYearProjects', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Project Schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  imageUrl: String,
});

const Project = mongoose.model('Project', projectSchema);

// Routes
app.get('/api/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.post('/api/projects', async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
