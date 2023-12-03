const FileLogger = require('../../services/FileLogger')

//URL visit log data
let Log_ = async function LogData(req, res, next) {
    await FileLogger(req, res, "None", "APIVisitLogs.txt")
    next();
}
module.exports = Log_;