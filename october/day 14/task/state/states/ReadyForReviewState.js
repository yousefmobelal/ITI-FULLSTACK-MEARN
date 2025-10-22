const State = require("./State");

class ReadyForReviewState extends State {
  viewStatus() {
    console.log("Task is Ready for Review.");
  }
}

module.exports = ReadyForReviewState;
