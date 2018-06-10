import React, { Component } from 'react';
//similar as const Component = React.Component;

class SearchBar extends Component {
    // not used render: function() {} instead,
    render() {
            return <input onChange={this.onInputChange} />;
    }
    onInputChange() {

    }
}

export default SearchBar;