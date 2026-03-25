const pool = require("../db");


exports.getAllTasks = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tasks");
    res.status(200).json({
      data: rows,
      meta: {
        total: rows.length
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.getTaskById = async (req, res) => {
  const id = req.params.id;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM tasks WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      const error = new Error("Task not found");
      error.status = 404;
      error.code = "NOT_FOUND";
      throw error;
    }

    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(err.status || 500).json({
      error: err.message,
      code: err.code || "SERVER_ERROR"
    });
  }
};



exports.createTask = async (req, res) => {
  const { title, status, project_id } = req.body;

  if (!title || !status || !project_id) {
    const error = new Error("Title, status, and project_id are required");
    error.status = 400;
    error.code = "INVALID_INPUT";
    throw error;
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO tasks (title, status, project_id) VALUES (?, ?, ?)",
      [title, status, project_id]
    );

    res.status(201).json({
      id: result.insertId,
      title,
      status,
      project_id
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateTask = async (req, res) => {
  const id = req.params.id;
  const { title, status } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE tasks SET title = ?, status = ? WHERE id = ?",
      [title, status, id]
    );

    if (result.affectedRows === 0) {
      const error = new Error("Task not found");
      error.status = 404;
      error.code = "NOT_FOUND";
      throw error;
    }

    const [updatedRows] = await pool.query(
      "SELECT * FROM tasks WHERE id = ?",
      [id]
    );

    res.status(200).json(updatedRows[0]);
  } catch (err) {
    res.status(err.status || 500).json({
      error: err.message,
      code: err.code || "SERVER_ERROR"
    });
  }
};


exports.deleteTask = async (req, res) => {
  const id = req.params.id;

  try {
    const [result] = await pool.query(
      "DELETE FROM tasks WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      const error = new Error("Task not found");
      error.status = 404;
      error.code = "NOT_FOUND";
      throw error;
    }

    res.status(204).send();
  } catch (err) {
    res.status(err.status || 500).json({
      error: err.message,
      code: err.code || "SERVER_ERROR"
    });
  }
};