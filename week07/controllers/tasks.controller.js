let tasks = [];
let nextTaskId = 1;

exports.getAllTasks = (req, res) => {
  
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  
  const paginatedTasks = tasks.slice(startIndex, endIndex);

  
  res.status(200).json({
    data: paginatedTasks,
    meta: {
      page,
      limit,
      total: tasks.length
    }
  });
};


exports.getTaskById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return next({
      status: 404,
      code: "NOT_FOUND",
      message: "Task not found"
    });
  }

  res.status(200).json(task);
};

exports.createTask = (req, res, next) => {
  const { title, completed } = req.body;

  if (!title) {
    return next({
      status: 400,
      code: "INVALID_INPUT",
      message: "Title is required"
    });
  }

  
  if (tasks.some(t => t.title === title)) {
    return next({
      status: 409,
      code: "CONFLICT",
      message: "Task title already exists"
    });
  }

  const newTask = {
    id: nextTaskId++,
    title,
    completed: completed ?? false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

exports.updateTask = (req, res, next) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return next({
      status: 404,
      code: "NOT_FOUND",
      message: "Task not found"
    });
  }

  
  if (
    req.body.title &&
    tasks.some(t => t.title === req.body.title && t.id !== id)
  ) {
    return next({
      status: 409,
      code: "CONFLICT",
      message: "Task title already exists"
    });
  }

  if (req.body.title !== undefined) task.title = req.body.title;
  if (req.body.completed !== undefined) task.completed = req.body.completed;

  res.status(200).json(task);
};

exports.deleteTask = (req, res, next) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return next({
      status: 404,
      code: "NOT_FOUND",
      message: "Task not found"
    });
  }

  tasks.splice(index, 1);

  res.status(204).send();
};
