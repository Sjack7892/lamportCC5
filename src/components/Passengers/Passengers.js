import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {

  // Local state for default name value.
  state = {
    name: 'Steve'
  }
  // Sets state to current input value.
  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
    console.log(event.target.value);
  }

  // Dispatches current state to passengers reducer.
  handleClick = () => {
    console.log('clicked');
    this.props.dispatch({
      type: 'addPassenger',
      payload: this.state.name
    })
  }

  render() {

    let passengerNames = this.props.reduxState.passengers.map(passenger => {
      return (
          <p>{passenger}</p>
      )   
  })

    return (
      <div>
        <h2>Passengers</h2>
        <input onChange={this.handleChange.bind(this)} type="text" name="name" placeholder="Enter Name" />
        <button onClick={this.handleClick}>Add Passenger</button>
        <ul>PASSENGER LIST:
        <p>{passengerNames}</p>
        </ul>
      </div>
    )
  }
}

// Gives Passengers access to reduxState and dispatch.
const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(Passengers);