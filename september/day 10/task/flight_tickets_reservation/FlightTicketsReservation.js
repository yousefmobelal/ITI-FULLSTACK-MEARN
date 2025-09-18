import FlightTicket from "./models/flightTicket.js";
import fs from "fs";

export default class FlightTicketsReservation {
  constructor() {}

  createTicket(ticket) {
    fs.readFile("tickets.json", (err, data) => {
      if (!err) {
        console.log("File has been read successfully");
        let tickets = [];
        if (data.length !== 0) {
          tickets = JSON.parse(data);
        }

        tickets.push({
          seatNum: ticket.seatNum,
          flightNum: ticket.flightNum,
          departureAirport: ticket.departureAirport,
          arrivalAirport: ticket.arrivalAirport,
          travellingDate: ticket.travellingDate,
        });
        const ticketsStr = JSON.stringify(tickets);
        fs.writeFile("tickets.json", ticketsStr, (err) => {
          if (!err) {
            console.log("Ticket has been added successfully");
          } else {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    });
  }

  displayTicket(seatNum) {
    let res;

    try {
      const data = fs.readFileSync("tickets.json");
      if (data.length === 0) return res;

      const tickets = JSON.parse(data);
      res =
        tickets.find((ele) => ele.seatNum === seatNum) || "No Ticket Available";

      const ticket = new FlightTicket(
        res.seatNum,
        res.flightNum,
        res.departureAirport,
        res.arrivalAirport,
        res.travellingDate
      );

      res = ticket.toString();
    } catch (err) {
      res = err;
    }

    return res;
  }

  updateTicket(id, ticket) {
    fs.readFile("tickets.json", (err, data) => {
      if (!err) {
        let tickets = [];
        if (data.length !== 0) {
          tickets = JSON.parse(data);
        }

        const foundedTicket = tickets.find((ele) => ele.seatNum === id);
        if (!foundedTicket) {
          console.log("No Ticket founded");
        }

        tickets = tickets.map((ele) => (ele.seatNum === id ? ticket : ele));
        const ticketsStr = JSON.stringify(tickets);
        fs.writeFile("tickets.json", ticketsStr, (err) => {
          if (!err) {
            console.log("Ticket has been updated successfully");
          } else {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    });
  }
}
