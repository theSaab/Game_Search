import React, { Component } from 'react'

// Pages
import Gamebox from './Gamebox'

export class Gamepage extends Component {
    render() {
        return (
            <div className='gamebox'>
                <h1>Game</h1>
                <Gamebox />
            </div>
        )
    }
}

export default Gamepage;
