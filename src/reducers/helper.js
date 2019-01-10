import characters_json from '../data/characters.json'

export function createCharacterById(id) {
    // Find a character from characters json
    let character = characters_json.find(char => char.id === id);
    return character;
}