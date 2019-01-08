import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Import characters from reducers
import rootReducer from './reducers';

// Create store
import { createStore } from 'redux';

// Provider
import { Provider } from 'react-redux';

// Create store const
const store = createStore(rootReducer);
console.log("store.getState()", store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);