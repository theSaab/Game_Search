

import React, { Component } from 'react'

export class AutoCompleteText extends Component {
    constructor (props) {
        super(props);
        this.items = [
            'David',
            'Davien',
            'Dada',
            'Sara',
            'Jane',
        ];
        this.state = {
            suggestions: [],
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions() {  
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) =>
                    <li onClick={() => 
                    this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }


    render() {
        const { text } = this.state
        return (
            <div >
                <input value={text}
                onChange={this.onTextChanged}
                type='text' 
                className='search'
                placeholder='What game are you searching for?'/>
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default AutoCompleteText;
