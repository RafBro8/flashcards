import React, { Component } from 'react';
import Stacklist from './Stacklist';

class App extends Component {

    render() {
        return(
            <div>
                <h2>Flashcards</h2>
                <hr/>
                <Stacklist />
            </div>
        )
    }
}

export default App;