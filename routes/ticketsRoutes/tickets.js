const express = require('express');
const app = express.Router();
const ticketControllers=require("../../services/ticketController/tickets");
const ticketValidator=require("../../middleware/validation");
const {validateJwtToken}=require("../../middleware/verifyJwt");


// To get the status of ticket
app.get("/openTickets",validateJwtToken,ticketControllers.getOpenTickets);
app.get ("/closeTickets",validateJwtToken,ticketControllers. getCloseTicketes);
app.patch("/bookTicket",validateJwtToken,ticketValidator.bookTicketValidator,ticketControllers.bookTickets);
app.get("/status",validateJwtToken,ticketValidator.statusTicketValidator,ticketControllers.getTicketStatus);
app.get("/authenticate",ticketValidator.authenticateUser,ticketControllers.authenticateUsers);
app.patch("/openAllTicket",validateJwtToken,ticketControllers.openAllTickets);
app.get("/getInfoTicket",validateJwtToken,ticketValidator.getInfo,ticketControllers.getInfoOfPerson)












module.exports = app;