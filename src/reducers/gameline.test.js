import gameline from './gameline'

describe('gameline reducer', () => {
  const reducer = gameline
  const initialState = [[0,0,0,0,0]]

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
