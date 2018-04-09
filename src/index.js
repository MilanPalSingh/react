import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

let App = ()=>{
    return(
        <div>
           <SearchBar />
        </div>
    );
};

// add that component on the page(DOM).
ReactDOM.render(<App />, document.querySelector('.container'));