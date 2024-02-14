const { body, validationResult } = require('express-validator');

const validateUser = [
    body('question').notEmpty().trim().withMessage('Question cannot be empty'),
    body('answer').notEmpty().trim().withMessage('Answer cannot be empty, only one answer is allowed'),
    body('options').notEmpty().withMessage('Options should contain only four value within a array').isArray().isLength({min : 4, max : 4}).withMessage('Options should contain only four value within a array'),
    body('explanation').notEmpty().trim().withMessage('Explanation cannot be empty and make sure that explanation is clear')
] ;


const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  let error
  if (!errors.isEmpty()) {
    error = new Error(errors.array()[0].msg);
    error.statusCode = 422;
    error.field = errors.array()[0].path;
    throw error
  }
  next(error);
};

module.exports = {
  validateUser,
  handleValidationErrors
};
