import React, { Component } from 'react';
//similar as const Component = React.Component;

class SearchBar extends Component {

    constructor(props) {
        super(props);

        //initialising state (only first time)
        this.state = {
            term: ''
        }
    }

    // not used render: function() {} instead,
    render() {
            return (
                <div>
                    <input
                        value = {this.state.term}
                        onChange={ event => this.setState({ term: event.target.value })} />
                </div>
            );


        // INPUT handler
    }



}

export default SearchBar;