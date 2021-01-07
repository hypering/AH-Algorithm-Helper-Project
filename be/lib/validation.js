class Validation {
  static isUser(req, res, next) {
    if (!req.session) {
      res.status(403).json(false);
      return;
    }
    next();
  }
}

module.exports = Validation;
