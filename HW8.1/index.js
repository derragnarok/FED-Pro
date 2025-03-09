let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this; // підніматиме вас на одну сходинку
    },
    down: function () { 
        this.step--;
        return this;// опускатиме вас на одну сходинку
    },
    showStep: function () {
        alert( this.step );
        return this; // показує поточну сходинку
    }
  };

  ladder.up(). up(). down(). showStep() ;// покаже 1 а потім 0
  