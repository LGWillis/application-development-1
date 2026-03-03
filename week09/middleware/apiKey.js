module.exports = (req, res, next) => {
  const apiKey = req.header('x-api-key');

  if (apiKey !== "12345") {
    return next({
      status: 401,
      code: "UNAUTHORIZED",
      message: "Invalid or missing API key"
    });
  }

  next();
};