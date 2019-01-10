import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions'

class HeroesList extends Component {
    render() {
        return(
            <div>
                <h4>Your Hero List</h4>
                <ul className='list-group'>
                    {
                        this.props.heroes.map(hero => {
                            return(
                                <li className='list-group-item' key={hero.id}>
                                    <div className='list-item'>
                                       {hero.name} 
                                    </div>
                                    <div
                                        className='list-item button-right'
                                        onClick={() => this.props.removeCharacterById(hero.id)}
                                    >
                                        x
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

function mapDispatchToProps(state) {
    return {
        heroes: state.heroes
    }
}

export default connect(mapDispatchToProps, {removeCharacterById}) (HeroesList);