//one box for each letter of the word!

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Boxes.css'

class Boxes extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div
      className={`Boxes fill-${this.props.value || 0}`}
      />
    )
  }
}

export default Boxes
