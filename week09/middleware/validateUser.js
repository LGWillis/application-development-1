module.exports = (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      status: 400,
      code: "INVALID_INPUT",
      message: "Name and email are required"
    });
  }

  next();
};