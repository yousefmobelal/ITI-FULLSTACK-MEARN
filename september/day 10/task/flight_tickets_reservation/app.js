import FlightTicketsReservation from "./FlightTicketsReservation.js";
import FlightTicket from "./models/flightTicket.js";

const flightTicketsReservation = new FlightTicketsReservation();

const ticket = new FlightTicket(2, 44, "Cairo", "Rome", "20-9-2025");
flightTicketsReservation.createTicket(ticket);

const updatedTicket = new FlightTicket(2, 44, "Cairo", "Madrid", "20-9-2025");
flightTicketsReservation.updateTicket(2, updatedTicket);

console.log(flightTicketsReservation.displayTicket(2));
