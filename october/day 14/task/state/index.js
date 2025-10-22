const DoneState = require("../../task/state/states/DoneState");
const InProgressState = require("../../task/state/states/InProgressState");
const ReadyForReviewState = require("../../task/state/states/ReadyForReviewState");

const STATE_IN_PROGRESS = "IN_PROGRESS";
const STATE_READY_FOR_REVIEW = "READY_FOR_REVIEW";
const STATE_DONE = "DONE";

class TaskContext {
  constructor(stateName) {
    switch (stateName) {
      case STATE_IN_PROGRESS:
        this.state = new InProgressState();
        break;
      case STATE_READY_FOR_REVIEW:
        this.state = new ReadyForReviewState();
        break;
      case STATE_DONE:
      default:
        this.state = new DoneState();
    }
  }

  viewStatus() {
    this.state.viewStatus();
  }
}

let task1 = new TaskContext(STATE_IN_PROGRESS);
task1.viewStatus();

let task2 = new TaskContext(STATE_READY_FOR_REVIEW);
task2.viewStatus();

let task3 = new TaskContext(STATE_DONE);
task3.viewStatus();
