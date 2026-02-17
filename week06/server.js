const express = require('express');
const logger = require('./middleware/logger');

const usersRoutes = require('./routes/users.routes');
const tasksRoutes = require('./routes/tasks.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: "Route not found"
    }
  });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    error: {
      code: err.code || "SERVER_ERROR",
      message: err.message || "Something went wrong"
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
