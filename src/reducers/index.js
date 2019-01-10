import { combineReducers } from 'redux';

// Import reducers
import characters from './character_reducer.js';
import heroes from './heroes_reducer';

const rootReducer = combineReducers({
    characters,
    heroes
});

export default rootReducer;
