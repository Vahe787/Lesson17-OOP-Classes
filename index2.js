class Shiritori {
  constructor(words = [], gameOver) {
    this.words = words;
    this.gameOver = gameOver;
  }

  play(word) {
    this.gameOver = true;
    if (this.words.length === 0) {
      this.gameOver = false;
      this.words.push(word);
    }
    let firstWord = this.words[this.words.length - 1];
    let anotherWord = word.toLowerCase();
    if (
      this.words.indexOf(word) === -1 &&
      firstWord[firstWord.length - 1] === anotherWord[0]
    ) {
      this.gameOver = false;
      this.words.push(word);
    }
    if (this.gameOver === true) {
      console.log("Game Over");
    }
  }

  myWords() {
    return this.words;
  }

  restart() {
    if (this.gameOver === true) {
      this.words = [];
      console.log("Game Started");
      return this.words;
    } else {
      console.log("Game is not finished");
    }
  }
}

const shiritori = new Shiritori();

shiritori.play("Moscow");
shiritori.play("Washington");
shiritori.play("New York");
shiritori.play("Yerevan");

console.log(shiritori.myWords());
console.log(shiritori);
