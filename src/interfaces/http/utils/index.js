const { identity } = require('ramda');

exports.asPromise = (fn, formatError = identity) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    next(formatError(error));
  }
};