class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
   
    setInterval (() => {
      this.currentTime +=1;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }
    

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
  if (value < 10) return `0${value}`;
  return `0${value}`
  }

  stop() {
    clearInterval();
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
  }
}
