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
                <div className="search-bar">
                    <input
                        value = {this.state.term}
                        onChange={ event => this.onInputChange(event.target.value)} />
                </div>
            );


        // INPUT handler
    }
    onInputChange(term){
            this.setState({term});
            this.props.onSearchTermChange(term);
    }



}

export default SearchBar;