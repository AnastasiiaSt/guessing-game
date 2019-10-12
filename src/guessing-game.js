class GuessingGame {
	constructor() {
		this.guessedNumber = 0;
	}

  setRange(min, max) {
		this.min = min;
		this.max = max;
		this.guessedNumber = Math.round(min + ((max - min)/2));
  }

  guess() {
		return this.guessedNumber;
	}

  lower() {
		this.max = this.guessedNumber;
		this.guessedNumber = Math.round(this.min + ((this.max - this.min)/2));        
  }

  greater() {
		this.min = this.guessedNumber;
		this.guessedNumber = Math.round(this.min + ((this.max - this.min)/2));     
  }
}

module.exports = GuessingGame;
