const State = require("./State");

class DoneState extends State {
  viewStatus() {
    console.log("Task is Done!");
  }
}

module.exports = DoneState;
