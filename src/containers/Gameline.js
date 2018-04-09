import  React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Gameline.css'
import game from '../lib/game'


 class Gameline extends PureComponent {
  static propTypes = {
    gameline: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired
  }
  reder(){
    return (
      <div className="Gameline">
      </div>
    )
  }
}


const word = [ "hello"]

  const mapStateToProps = () => ({
    word: word,
    game:game
  })



// Then pass it to connect:
export default connect(mapStateToProps)(Gameline)
