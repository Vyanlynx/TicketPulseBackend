const fs = require('fs/promises');
const FileLogger = async (req, res, err, fileName) => {
    //to aviod too much data inside log file delete at certain point
    try {
        let fileDataOfLog = await fs?.readFile(fileName, 'utf8') ?? null
        let date = new Date();
        if (Number(date.getDate()) !== Number(fileDataOfLog.split(' ')[3])) {
            await fs?.unlink(fileName)
        }
    }
    catch {

    }
    finally {
        let logObject = {
            instance: Date(),
            method: req?.method,
            host: req?.host || req?.hostname,
            path: req?.path,
            query: req?.query,//need to check when query comes
            body: req?.body,
            ip: req?.ip,
            userAgent: req?.headers['user-agent'],
            error: err
        }
        const objectString = Object.entries(logObject).map(([key, value]) => `${key}: ${value}`).join('\n');
        await fs.appendFile(fileName, objectString + '\n\n', 'utf8')
    }

}
module.exports = FileLogger