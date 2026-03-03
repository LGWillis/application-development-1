let users = [];
let nextUserId = 1;


exports.getAllUsers = async (req, res) => {
  res.status(200).json(users);
};


exports.getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    error.code = "NOT_FOUND";
    throw error;
  }

  res.status(200).json(user);
};


exports.createUser = async (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    const error = new Error("Username and email are required");
    error.status = 400;
    error.code = "INVALID_INPUT";
    throw error;
  }

  if (users.some(u => u.email === email)) {
    const error = new Error("Email already exists");
    error.status = 409;
    error.code = "CONFLICT";
    throw error;
  }

  const newUser = {
    id: nextUserId++,
    username,
    email
  };

  users.push(newUser);

  res.status(201).json(newUser);
};


exports.updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    error.code = "NOT_FOUND";
    throw error;
  }

  if (
    req.body.email &&
    users.some(u => u.email === req.body.email && u.id !== id)
  ) {
    const error = new Error("Email already exists");
    error.status = 409;
    error.code = "CONFLICT";
    throw error;
  }

  if (req.body.username !== undefined) user.username = req.body.username;
  if (req.body.email !== undefined) user.email = req.body.email;

  res.status(200).json(user);
};


exports.deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    const error = new Error("User not found");
    error.status = 404;
    error.code = "NOT_FOUND";
    throw error;
  }

  users.splice(index, 1);

  res.status(204).send();
};