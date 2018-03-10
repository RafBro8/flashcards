import React from 'react';
import { shallow } from 'enzyme';
import { Stack } from '../components/Stack';
import { stack } from '../data/fixtures';



//in order to shallow test Connected Component like Stack.js
//add 'export' to class Stack in the implementation
//and add { } braces to Stack import in the test like { Stack }

//also need to add props for that Component like below (const props)
//then add the props with rendered Component <Stack {...props}/>

// const props = {
//     stack:{
//     id: 0,
//     title: 'test title',
//     cards: [{id: 0, prompt: 'test prompt', answer: 'test answer'}]
// }};

//moved above props to fixtures.js file



const props = { stack };

describe('Stack', () => {
    const stack = shallow(<Stack {...props} />);

    it('renders the title', () => {
        expect(stack.find('h3').text()).toEqual(props.stack.title);
    });

    it('renders the Link home', () => {
        expect(stack.find('Link h4').text()).toEqual('Home');
    });

    it('renders the correct number of cards', () => {
        expect(stack.find('Card').length).toEqual(props.stack.cards.length);
    });
});