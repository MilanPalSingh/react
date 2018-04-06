import React from 'react';
import ReactDom from 'react-dom'

// Create a react Html component.
const App = ()=> <div>Hi!</div> ;

// add that component on the page(DOM).
ReactDom.render(<App />, document.querySelector('.container'));