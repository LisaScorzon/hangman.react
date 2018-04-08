




export default (letter) => {
  return {
    type: GUESS,
    payload: letter
  }

}

export const GUESS= 'GUESS'

//only one action allowed....Guess or NewGame?!
