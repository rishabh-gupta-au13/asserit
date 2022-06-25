const express = require('express');
const app = express.Router();
const ticketControllers=require("../../services/ticketController/tickets");
const ticketValidator=require("../../middleware/validation")


// To get the status of ticket
app.get("/openTickets",ticketControllers.getOpenTickets);
app.get ("/closeTickets",ticketControllers.getCloseTickets);
app.patch("/bookTheTicket",ticketValidator.bookTicketValidator,)










module.exports = app;