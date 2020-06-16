import React, { Component } from 'react'
import { IconButton, Button } from 'react-mdl'


export class HideableText extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isHidden: false,

        }
    }
    
    toggleisHidden () {
        this.setState((currentState) => ({
            isHidden: !currentState.isHidden,
        }));
    }
    
    render() {
        return (
            <div className='toggle-button'>
                <Button className='toggle-button-text' onClick={() => this.toggleisHidden()}>Toggle</Button>
                {this.state.isHidden && this.props.text}
            </div>
        )
    }
}

export default HideableText
