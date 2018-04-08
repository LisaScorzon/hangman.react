import  { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Gameline.css'
import Game from '../lib/Game'


 class Gameline extends PureComponent {
  static propTypes = {
    gameline: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired
  }
}

const word = [ "hello"]

  const mapStateToProps = () => ({
    word: word,
    Game:Game
  })



// Then pass it to connect:
export default connect(mapStateToProps)(Gameline)
