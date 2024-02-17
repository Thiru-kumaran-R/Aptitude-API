const { body, validationResult } = require('express-validator');

const validateQuestion = [
    body('question').notEmpty().trim().withMessage('Question cannot be empty'),
    body('answer').notEmpty().trim().withMessage('Answer cannot be empty, only one answer is allowed'),
    body('options', 'Options should be an array with four values, where each value should be in string datatype').notEmpty().trim().isArray(),
    body('explanation').notEmpty().withMessage('Explanation cannot be empty and make sure that explanation is clear').trim()
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
  validateQuestion,
  handleValidationErrors
};
