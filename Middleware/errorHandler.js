const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.UNAUTHORIZED:
      res.json({
        status: constants.UNAUTHORIZED,
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.BAD_REQUEST:
      res.json({
        status: constants.BAD_REQUEST,
        title: "Bad Request:(",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        status: constants.FORBIDDEN,
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        status: constants.NOT_FOUND,
        title: "Not Found!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.INTERNAL_SERVER_ERROR:
      res.json({
        status: constants.INTERNAL_SERVER_ERROR,
        title: "Internnal server error!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
  }
};
module.exports = errorHandler;
