import React, { Component } from 'react';
//similar as const Component = React.Component;

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    // not used render: function() {} instead,
    render() {
            return <input onChange={ (event) => this.setState({
                term: event.target.value
            })} />;

        // INPUT handler
    }



}

export default SearchBar;