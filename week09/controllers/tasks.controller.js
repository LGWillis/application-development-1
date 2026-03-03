let tasks = [];
let nextTaskId = 1;


exports.getAllTasks = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const completed = req.query.completed;
  const sort = req.query.sort;

  let filteredTasks = [...tasks];

 
  if (completed !== undefined) {
    const isCompleted = completed === "true";
    filteredTasks = filteredTasks.filter(t => t.completed === isCompleted);
  }


  if (sort) {
    if (sort === "title") {
      filteredTasks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "-title") {
      filteredTasks.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort === "id") {
      filteredTasks.sort((a, b) => a.id - b.id);
    } else if (sort === "-id") {
      filteredTasks.sort((a, b) => b.id - a.id);
    }
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedTasks = filteredTasks.slice(startIndex, endIndex);

  res.status(200).json({
    data: paginatedTasks,
    meta: {
      page,
      limit,
      total: filteredTasks.length
    }
  });
};


exports.getTaskById = async (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    const error = new Error("Task not found");
    error.status = 404;
    error.code = "NOT_FOUND";
    throw error;
  }

  res.status(200).json(task);
};


exports.createTask = async (req, res) => {
  const { title, completed } = req.body;

  if (!title) {
    const error = new Error("Title is required");
    error.status = 400;
    error.code = "INVALID_INPUT";
    throw error;
  }

  if (tasks.some(t => t.title === title)) {
    const error = new Error("Task title already exists");
    error.status = 409;
    error.code = "CONFLICT";
    throw error;
  }

  const newTask = {
    id: nextTaskId++,
    title,
    completed: completed ?? false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};


exports.updateTask = async (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    const error = new Error("Task not found");
    error.status = 404;
    error.code = "NOT_FOUND";
    throw error;
  }

  if (
    req.body.title &&
    tasks.some(t => t.title === req.body.title && t.id !== id)
  ) {
    const error = new Error("Task title already exists");
    error.status = 409;
    error.code = "CONFLICT";
    throw error;
  }

  if (req.body.title !== undefined) task.title = req.body.title;
  if (req.body.completed !== undefined) task.completed = req.body.completed;

  res.status(200).json(task);
};


exports.deleteTask = async (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    const error = new Error("Task not found");
    error.status = 404;
    error.code = "NOT_FOUND";
    throw error;
  }

  tasks.splice(index, 1);

  res.status(204).send();
};