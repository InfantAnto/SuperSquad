import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
    Strength() {
        let strength = 0;
        this.props.heroes.forEach(hero => strength += hero.strength);
        return strength;
    }

    Intelligance() {
        let intelligence = 0;
        this.props.heroes.forEach(hero => intelligence += hero.intelligence);
        return intelligence;
    }

    Speed() {
        let speed = 0;
        this.props.heroes.forEach(hero => speed += hero.speed);
        return speed;
    }

    render() {
        return(
            <div>
                <h4>Squad Stats</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <b>Strength: </b> {this.Strength()}
                    </li>
                    <li className='list-group-item'>
                        <b>Intelligence: </b> {this.Intelligance()}
                    </li>
                    <li className='list-group-item'>
                        <b>Speed: </b> {this.Speed()}
                    </li>
                </ul>   
            </div>
        )
    }
}

function mapStatsToProps(state) {
    return {
        heroes: state.heroes
    }
}

export default connect(mapStatsToProps, null) (SquadStats);