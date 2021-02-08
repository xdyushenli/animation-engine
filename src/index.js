import React from 'react';
import ReactDOM from 'react-dom';
import Pixi from './pixi';

const App = () => {
    return (
        <Pixi />
    );
}

ReactDOM.render(<App />, document.getElementById('container'));