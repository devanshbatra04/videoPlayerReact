import React, { Component } from 'react';
//similar as const Component = React.Component;

class SearchBar extends Component {
    // not used render: function() {} instead,
    render() {
            return <input onChange={ (event) => console.log(event.target.value)} />;
    }

    // INPUT handler


}

export default SearchBar;