/*import { NEW_GUESS } from '../actions/types'

const initialState = {
  word: "",
  guesses: []
}

export default  (state = initialState,  { type, payload, action } = {}) => {
  switch (type) {
      case NEW_GUESS :
        return state = state.push(payload.guess)

      default :

        return state
    }
}

/*function wrongGuessCount(word, guesses) {
  let filteredArray = guesses.filter(function (element) {
    if (word.indexOf(element)===-1){return element}
  })
  return filteredArray.length
}
function showGuess(word, guesses) {
  let splittedword = Array.from(word)
  let hiddenletters = splittedword.map(function(letterOfWord){
    if (guesses.indexOf(letterOfWord) !== -1){return letterOfWord}
    else {return '_'}})
return hiddenletters.join(' ')
}
function isWinner(word, guesses) {
  let splittedword = Array.from(word)
  let removeguessedletters = splittedword.filter(function(letter) {guesses.indexOf(letter) !== -1})
  if (removeguessedletters === 0) return true
}
// to read from the console
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})
function next(word, guesses) {
    // check if lost
    if (isWinner(word, guesses) === true) return console.log('You lose!')
    // check if won
    if (isWinner) return console.log('You won!')
    // ask for the next letter
    rl.question('next letter? ', answer => {
        console.log('player wrote:', answer);

        // do something with answer
    })
}
console.log('test winner 1:', !isWinner('hello', ['e', 'x']))
console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))
let word = "hello"
let guesses = []
const initialState = [[0,0,0,0,0]]

const game = {
  word: word,
  guesses: guesses,
  wordToShow: showGuess(word, guesses),
  wrongGuessCount: 0,
  isWinner: false,

}
*/
