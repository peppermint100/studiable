function CustomException(message:string) {
  const error = new Error(message);

  return error;
}

CustomException.prototype = Object.create(Error.prototype);