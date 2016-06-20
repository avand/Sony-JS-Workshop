"use strict";

class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    setTimeout(function() {
      console.log(`times up! ${this.seconds} have elapsed`);
    }, this.seconds * 1000);
  }
}

var timer = new Timer(3);
timer.start();
