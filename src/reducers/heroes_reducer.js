import { ADD_CHARACTER } from '../actions';
import { createCharacterById } from './helper';

// Heroes reducer
function heroes(state = [], action) {
    switch(action.type) {
        case ADD_CHARACTER:
        let heroes = [...state, createCharacterById(action.id)]
        return heroes;

        default:
            return state;
    }
}

export default heroes;