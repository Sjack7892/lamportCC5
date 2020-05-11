import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!
const speedInitialState = 0;

const speed = (state = speedInitialState, action) => {
    console.log('in myReducer:', action)
    if (action.type === 'increaseSpeed') {
        state += action.payload;
    } else if (action.type === 'decreaseSpeed') {
        state -= action.payload;
    }
    return state;
}

const passengersInitialState = ['Steve'];

const passengers = (state = passengersInitialState, action) => {
    console.log('in myReducer:', action)
    if (action.type === 'addPassenger') {
        state = [...state, action.payload];
    } 
    return state;
}

// use reducer in store
// const storeInstance = createStore(myReducer);

const storeInstance = createStore(
    combineReducers({
        speed,
        passengers

    })
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
