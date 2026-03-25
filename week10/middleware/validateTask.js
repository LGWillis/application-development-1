module.exports = (req, res, next) => {
  const { title } = req.body;

  if (!title || typeof title !== "string") {
    return next({
      status: 400,
      code: "VALIDATION_ERROR",
      message: "Title is required and must be a string"
    });
  }

  next();
};