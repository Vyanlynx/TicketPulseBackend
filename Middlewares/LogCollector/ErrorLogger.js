// to find out why error Happened
const FileLogger = require('../../services/FileLogger')
const ErrorLogger = async function errorHandler(err, req) {
    await FileLogger(req, "", err, "ErrorHappened.txt")
}

module.exports = ErrorLogger