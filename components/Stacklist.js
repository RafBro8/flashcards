import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import stacks from '../data/stacks.json';
import { setStack } from "../actions/index";


class Stacklist extends Component {

    render() {
        //console.log('stacklist props', this.props);
        return (
            <div>
                {
                    stacks.map(stack => {
                        return (
                            <Link
                                key={stack.id}
                                to='/stack'
                                onClick={() => this.props.setStack(stack)}>
                            <h4>{stack.title}</h4>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setStack }, dispatch);
}

export default connect(null, mapDispatchToProps)(Stacklist);


//connect this Component to Redux so it has access to the Store and is able to dispatch Actions
//connect takes 2 parameters that are also functions
//1st parameter (mapStateToProps) in connect() handles connecting Component to the Store and getting back data
//it also describes which part of Store we want this Component to listen to

//2nd parameter (mapDispatchToProps) in connect() handles allowing Component
// to use the Action Creators and send Actions to Reducers to update Store

//mapDispatchToProps() takes dispatch from Redux and binds the setStack Action
//onto the Props of the Component (Stacklist)

//Stacklist Component doesn't need data from Store because it
//gets data from stacks.json