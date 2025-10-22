const State = require("./State");

class InProgressState extends State {
  viewStatus() {
    console.log("Task is currently In Progress.");
  }
}

module.exports = InProgressState;
