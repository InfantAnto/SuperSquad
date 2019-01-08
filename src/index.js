import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Import characters from reducers
import rootReducer from './reducers';

// Create store
import { createStore } from 'redux';

// Provider
import { Provider } from 'react-redux';

// Actions
import { addCharacterById } from './actions';

// Create store const
// Store contains whole state info of application 
const store = createStore(rootReducer);
console.log("store.getState()", store.getState())

// A special function subscribe , fired whenever the store gets updated
store.subscribe(() => console.log('STATE: ', store.getState()));

// Dispatch an action
// Call an action --> reducers to update the store (state info)
store.dispatch(addCharacterById(2));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);