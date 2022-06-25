const express = require('express');
const app = express();

let apiPath = '/api/v1';
app.use(`${apiPath}/tickets`, require("./ticketsRoutes/tickets"));
module.exports = app;