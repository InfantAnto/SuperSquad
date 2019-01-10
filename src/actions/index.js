export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARCTER = "REMOVE_CHARACTER";

// Action is a js object with action type
// To activate reducers to do some actions
// This actions will shrink the character
export function addCharacterById(id) {
    const action = {
        type: ADD_CHARACTER,
        id // <-- id: id (ES6 syntax simplification)
    }
    
    return action;
}

export function removeCharacterById(id) {
    const action = {
        type: REMOVE_CHARCTER,
        id
    }

    return action;
}