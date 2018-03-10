import React from 'react';
import { shallow } from 'enzyme';
import { Stacklist } from '../components/Stacklist';
import { stacks } from '../data/fixtures';

// const props = {
//     stacks:{
//         id: 0,
//         title: 'test title',
//         cards: [{id: 0, prompt: 'test prompt', answer: 'test answer'}]
//     }};

//moved above props to fixtures.js file

const props = { stacks };


describe('Stacklist', () => {
    const stackList = shallow(<Stacklist {...props} />);

    it('renders the correct number of links', () => {
        expect(stackList.find('Link').length).toEqual(props.stacks.length);
    });
});