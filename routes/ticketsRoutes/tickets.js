const express = require('express');
const app = express.Router();
const ticketControllers=require("../../services/ticketController/tickets");


// To get the status of ticket
app.get("/openTickets",ticketControllers.getOpenTickets);










module.exports = app;