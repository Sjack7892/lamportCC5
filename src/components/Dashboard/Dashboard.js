import React, { Component } from 'react';
import { connect } from 'react-redux';

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class Dashboard extends Component {
  render() {

  //   let passengerNumber = 0;

  //   let passengerCount = this.props.reduxState.passengers.map(passenger => {
  //     return (
  //         passengerNumber += 1;
  //     )   
  // })
    return (
      <div>
        <h2>Dashboard</h2>
        
        <p>SPEED: {this.props.reduxState.speed}</p>
        <p>PASSENGER COUNT: {this.props.reduxState.passengers.length}</p>
      </div>
    )
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Dashboard);