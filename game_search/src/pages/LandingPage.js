import React, { Component } from 'react'



export class LandingPage extends Component {
    render() {
        return (
            <div className='background'>
                <div className='wrapper'>
                    <input type='text'
                        className='input'
                        placeholder='What game are you looking for?' />
                    <div className='search-button'>
                        <i className='fa fa-search' aria-hidden='true' />
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage
