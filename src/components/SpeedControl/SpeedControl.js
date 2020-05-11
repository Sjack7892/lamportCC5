import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

  // Dispatches increase click value to speed reducer.
  handleClickIncrease = () => {
    console.log('speed increased');
    this.props.dispatch({
      type: 'increaseSpeed',
      payload: 1
  })
  }
  // Dispatches decrease click value to speed reducer.
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
        <p>SPEED: {this.props.reduxState.speed}</p>
        <button onClick={this.handleClickDecrease}>Decrease Speed</button>
      </div>
    )
  }
}

// Gives SpeedControl access to reduxState and dispatch.
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(SpeedControl);