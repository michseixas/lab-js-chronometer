class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval (() => {
      this.currentTime +=1;
      if (printTimeCallback) { //checking if the callback was passed before attempting to run it
        printTimeCallback();
      }
    }, 1000); //every 1 second invokes the printTimeCallback
  }
    

  getMinutes() {
    return Math.floor(this.currentTime / 60); //when this reached 60, equals 1. When this reaches 120, equals 2, etc...
  }

  getSeconds() {
    return this.currentTime % 60; //gets the remainder seconds of the current minute
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {       //if value is less than 10, it has only 1 char. 
      return `0${value}`;    //Then returns 0 + char (when enters the if)
    }
    return `${value}`; //automaticaly comes to this return when the value has 2 char.
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
  }
}
