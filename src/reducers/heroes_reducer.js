import { ADD_CHARACTER, REMOVE_CHARCTER } from '../actions';
import { createCharacterById } from './helper';

// Heroes reducer
function heroes(state = [], action) {
    switch(action.type) {
        case ADD_CHARACTER:
        let heroes = [...state, createCharacterById(action.id)]
        return heroes;

        case REMOVE_CHARCTER:
        heroes = state.filter(item => item.id !== action.id)
        return heroes;

        default:
            return state;
    }
}

export default heroes;