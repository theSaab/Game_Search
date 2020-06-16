import React, { Component } from 'react'
import HideableText from '../components/HideableText'


export class LandingPage extends Component {
    render() {
        return (
            // <div style={{ backgroundColor: 'black' }}>
            //     <div className='background'>
            //         <div className='wrapper'>
            //             <input type='text'
            //                 className='input'
            //                 placeholder='What game are you looking for?' />
            //             <div className='search-button'>
            //                 <i className='fa fa-search' aria-hidden='true' />
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div>
                <HideableText text='hello'/>
            </div>
        )
    }
}

export default LandingPage
