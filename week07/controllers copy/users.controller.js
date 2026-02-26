let users = [];
let nextId = 1;

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

exports.getUserById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return next({
      status: 404,
      code: "NOT_FOUND",
      message: "User not found"
    });
  }

  res.status(200).json(user);
};

exports.createUser = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return next({
      status: 400,
      code: "INVALID_INPUT",
      message: "Name and email are required"
    });
  }

  
  if (users.some(u => u.email === email)) {
    return next({
      status: 409,
      code: "CONFLICT",
      message: "Email already exists"
    });
  }

  const newUser = {
    id: nextId++,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

exports.updateUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return next({
      status: 404,
      code: "NOT_FOUND",
      message: "User not found"
    });
  }

  if (req.body.email && users.some(u => u.email === req.body.email && u.id !== id)) {
    return next({
      status: 409,
      code: "CONFLICT",
      message: "Email already exists"
    });
  }

  if (req.body.name !== undefined) user.name = req.body.name;
  if (req.body.email !== undefined) user.email = req.body.email;

  res.status(200).json(user);
};

exports.deleteUser = (req, res, next) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return next({
      status: 404,
      code: "NOT_FOUND",
      message: "User not found"
    });
  }

  users.splice(index, 1);
  res.status(204).send();
};
