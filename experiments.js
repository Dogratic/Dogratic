const timesToRepeat = 100;
const character = "🐩";

let word = ""; // start with an empty string
for (let i = 0; i < timesToRepeat; i++) {
  word = word + character;
}

console.log(word);
