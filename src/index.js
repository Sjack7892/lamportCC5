import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!
const firstReducerInitialState = 0;

const myReducer = (state = firstReducerInitialState, action) => {
   console.log('in myReducer:',  action)
    if (action.type === 'increaseSpeed'){
        state += action.payload;
    } else if (action.type === 'decreaseSpeed'){
        state -= action.payload;
    }
    return state;
}

// use reducer in store
const storeInstance = createStore( myReducer );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
