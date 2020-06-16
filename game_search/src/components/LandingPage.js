
// React 
import React, { Component } from 'react'

// MUI stuff 
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";

export class AutoCompleteText extends Component {
    constructor(props) {
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

    suggestionSelected(value) {
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

            // <div className='suggestions'>
            //     <input value={text}
            //     onChange={this.onTextChanged}
            //     style={{}}
            //     type='text' 
            //     className='search'
            //     placeholder='What game are you searching for?'/>
            //     {this.renderSuggestions()}
            // </div>
            <form noValidate autoComplete="off" className='search-bar'>
                <TextField className='outlined-search-bar' 
                id="outlined-basic" 
                // label="What"
                placeholder='What game are you looking for?' 
                variant="outlined" />
            </form>

        )
    }
}

export default AutoCompleteText;
