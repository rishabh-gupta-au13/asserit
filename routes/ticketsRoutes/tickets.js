const express = require('express');
const app = express.Router();
const ticketControllers=require("../../services/ticketController/tickets");
const ticketValidator=require("../../middleware/validation")


// To get the status of ticket
app.get("/openTickets",ticketControllers.getOpenTickets);
app.get ("/closeTickets",ticketControllers. getCloseTicketes);
app.patch("/bookTicket",ticketValidator.bookTicketValidator,ticketControllers.bookTickets);
app.get("/status",ticketValidator.statusTicketValidator,ticketControllers.getTicketStatus);
app.get("/authenticate",ticketValidator.authenticateUser,ticketControllers.authenticateUsers);











module.exports = app;