module.exports = function authMiddleware(req, res, next) {
  const userId = req.session.userId;

  if (!userId) return next(new Error("No session"));

  return next();
};
