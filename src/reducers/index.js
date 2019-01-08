import characters_json from '../data/characters.json';

// Reducer is actually a function which accepts
// 2 params @state, @action

function characters(state = characters_json, action) {
    switch(action.type) {
        default:
            return state;
    }
}

export default characters;
