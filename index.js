const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const routes = require('./router/routes')
const LogData = require('./Middlewares/LogCollector/API_VisitLogger');
const ErrorLogger = require('./Middlewares/LogCollector/ErrorLogger')

app.use(bodyParser.json());
// app.use(LogData)//log details of every API request

app.use('/test', (req, res) => {
    res.send("Someone is trying to access the home page");
})
app.use('/person', routes);

app.use('*', (req, res) => {
    res.send("Page not found")
    ErrorLogger("Page not found", req)
})
app.listen(4000, () => {
    console.log("Running")
})