import  React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AlphabetButtons extends React.Component {

alphaFilter(e) {
  console.log(e.target.id);

}


render() {

 return (
    <div>
       <button onClick={this.AlphabetButtons} id="A" className="Alphabet"></button>

    </div>
  );
 }
}
