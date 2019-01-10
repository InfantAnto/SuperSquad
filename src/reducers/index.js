import characters_json from '../data/characters.json';
// Reducer is actually a function which accepts
// 2 params @state, @action

// Import an action type constant and play with it in reducers
import { ADD_CHARACTER } from '../actions';

// Character reducer
function characters(state = characters_json, action) {
    switch(action.type) {
        case ADD_CHARACTER:
        let characters = state.filter(item => item.id !== action.id)
        return characters;

        default:
            return state;
    }
}

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

function createCharacterById(id) {
    // Find a character from characters json
    let character = characters_json.find(char => char.id === id);
    return character;
}

export default characters;
