import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterList extends Component {
    render() {
        console.log('this.props: ', this.props)
        return(
            <div>
                <h4>Character List</h4>
            </div>
        )
    }
}

// To use the redux's state in props
function mapStateToProps(state) {
    return {
        characters: state.characters
    }
}

// Use connect to connect the component to redux store(state)
export default connect(mapStateToProps, null) (CharacterList);