import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'



class game extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }
}

  function wrongGuessCount(word, guesses) {
    return guesses.filter(letter => word.indexOf(letter) == -1).length;
    function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
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

  console.log('test winner 1:', !isWinner('hello', ['e', 'x']))
  console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))


  /*function wrongGuessCount(word, guesses) {

      let count = 0
      guesses.forEach(function(guess) {
        if (word.indexOf(guess)<0) {
          count += 1
    }



     });
   return count
  }


  console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2);



  function showGuess(word, guesses) {
    let wordIntoArray = word.split('').join('_');}

  console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _')
  console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _')*/


export default game
