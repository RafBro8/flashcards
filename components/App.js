import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Stacklist from './Stacklist';
import Stackform from "./Stackform";

class App extends Component {

    render() {
        return(
            <div>
                <h2>Flashcards</h2>
                <hr/>
                <Stacklist />
                <hr/>
                <Link to='stack_form'><h4>Create New Stack</h4></Link>
            </div>
        )
    }
}

export default App;