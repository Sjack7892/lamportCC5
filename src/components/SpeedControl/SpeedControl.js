import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

  handleClickIncrease = () => {
    console.log('speed increased');
    this.props.dispatch({
      type: 'increaseSpeed',
      payload: 1
  })
  }

  handleClickDecrease = () => {
    console.log('speed decreased');
    this.props.dispatch({
      type: 'decreaseSpeed',
      payload: 1
  })
  }

  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.handleClickIncrease}>Increase Speed</button>
        <p>SPEED: {this.props.reduxState}</p>
        <button onClick={this.handleClickDecrease}>Decrease Speed</button>
      </div>
    )
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(SpeedControl);