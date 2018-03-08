import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

class Stack extends Component {

    render() {
        //console.log('stack props', this.props);
        const { title, cards } = this.props.stack;
        return(
            <div>
                <Link className='link-home' to='/'>
                    <h4>Home</h4>
                </Link>
                <h3>{title}</h3>
                <br />
                {
                    cards.map(card => {
                        return (
                            <Card key={card.id} card={card}/>
                        )

                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { stack: state }     //map stack to State
}

export default connect(mapStateToProps, null)(Stack);

//mapStateToProps() will take part of the Redux Store and attach it
//to the Props object on Stack Component, it maps the State of the Redux Store
//onto the Props of the Component