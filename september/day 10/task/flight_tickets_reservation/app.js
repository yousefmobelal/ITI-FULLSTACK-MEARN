const FlightTicket = require("./models/flightTicket.js");
const FlightTicketsReservation = require("./FlightTicketsReservation.js");

const flightTicketsReservation = new FlightTicketsReservation();

const ticket = new FlightTicket(2, 44, "Cairo", "Rome", "20-9-2025");
flightTicketsReservation.createTicket(ticket);

flightTicketsReservation.displayTicket(2);

const updatedTicket = new FlightTicket(2, 22, "Alexandria", "Madrid");
flightTicketsReservation.updateTicket(2, updatedTicket);

flightTicketsReservation.displayTicket(2);
