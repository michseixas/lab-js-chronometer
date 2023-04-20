class Chronometer {
    constructor() {
      this.currentTime = 0;
      this.intervalId = null;
    }
  
    start(printTimeCallback) {
      if (typeof printTimeCallback !== "function") {
        return;
      }
  
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
  
        if (this.currentTime === 3) {
          this.currentTime += 1;
          clearInterval(this.intervalId);
        }
  
        printTimeCallback(this.currentTime);
      }, 1000);
    }
  }

  /*  if (moviesArray.length === 0){
    return 0

  }*/