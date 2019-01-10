import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
    render() {
        console.log('this.props: ', this.props)
        return(
            <div>
                <h4>Character List</h4>
                <ul>
                    {
                        this.props.characters.map(character => {
                            return(
                                <li key={character.id}>
                                    <div>{character.name}</div>
                                    <div
                                        onClick={ () => this.props.addCharacterById(character.id)}
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({addCharacterById}, dispatch)
}

// Use connect to connect the component to redux store(state)
export default connect(mapStateToProps, mapDispatchToProps) (CharacterList);