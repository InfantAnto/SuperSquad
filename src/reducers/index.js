import characters_json from '../data/characters.json';
// Reducer is actually a function which accepts
// 2 params @state, @action

// Import an action type constant and play with it in reducers
import { ADD_CHARACTER } from '../actions';

function characters(state = characters_json, action) {
    switch(action.type) {
        case ADD_CHARACTER:
        let characters = state.filter(item => item.id !== action.id)
        return characters;

        default:
            return state;
    }
}

export default characters;
