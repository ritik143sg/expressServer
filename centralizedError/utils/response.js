const submitError = (res, msg) => {
  return res.status(msg.statusCode).json({
    status: false,
    message: msg.message,
  });
};

module.exports = submitError;
