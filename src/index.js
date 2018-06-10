import React from 'react';
import ReactDOM from 'react-dom';


import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyCfFyLznYOnGx24C2_MZGO-NeNyd58yw9w';

// Create a new component
// This component should produce some html
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
};
//Take this component's generated HTML and put it on the page
//(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));