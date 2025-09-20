const FlightTicket = require("./models/flightTicket.js");

class FlightTicketsReservation {
  constructor() {
    this.tickets = [];
  }

  createTicket(ticket) {
    this.tickets.push(ticket.toObject());
    console.log("Ticket Created Successfully");
  }

  displayTicket(seatNum) {
    let res = this.tickets.find((ele) => ele.seatNum === seatNum);
    if (!res) {
      console.log("No Ticket founded");
      return;
    }

    const ticket = FlightTicket.fromObject(res);
    console.log(ticket.toString());
  }

  updateTicket(id, ticket) {
    const foundedTicket = this.tickets.find((ele) => ele.seatNum === id);
    if (!foundedTicket) {
      console.log("No Ticket founded");
      return;
    }

    const newTicket = new FlightTicket(
      ticket.seatNum,
      ticket.flightNum ?? foundedTicket.flightNum,
      ticket.departureAirport ?? foundedTicket.departureAirport,
      ticket.arrivalAirport ?? foundedTicket.arrivalAirport,
      ticket.travellingDate ?? foundedTicket.travellingDate
    );

    this.tickets = this.tickets.map((ele) =>
      ele.seatNum === id ? newTicket : ele
    );
    console.log("Ticket Updated Successfully");
  }
}

module.exports = FlightTicketsReservation;
