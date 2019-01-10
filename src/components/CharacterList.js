import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
    render() {
        return(
            <div>
                <h4>Characters</h4>
                <ul className='list-group'>
                    {
                        this.props.characters.map(character => {
                            return(
                                <li className='list-group-item' key={character.id}>
                                    <div className='list-item'>
                                    {character.name}
                                    </div>
                                    <div className='list-item button-right'
                                        onClick={() => this.props.addCharacterById(character.id)}
                                    >
                                    +
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

// To use the redux's state in props - FUNCTION
function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

// To use actions in component, bind all the action creators
// Pass action creators as 1st param

// Comment this and directly pass action creators in connect
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({addCharacterById}, dispatch)
// }

// Use connect to connect the component to redux store(state)
// To be simplified and save time we can directly pass action creators as 2nd param
export default connect(mapStateToProps, {addCharacterById}) (CharacterList);