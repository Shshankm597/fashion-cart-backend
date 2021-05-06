async function catchError(response, callback) {
  try {
   await callback()
  }
  catch (error) {
    response(error);
  }
}

module.exports = { catchError }