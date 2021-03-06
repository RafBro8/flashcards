import React from 'react';
import { shallow } from 'enzyme';
import { Stackform } from '../components/Stackform';

describe('Stackform', () => {
    const stackForm = shallow(<Stackform  />);

    it('renders the form title', () => {
        expect(stackForm.find('h4').at(1).text()).toEqual('Create New Stack');
    });

    it('renders a link home', () => {
        expect(stackForm.find('h4').at(0).text()).toEqual('Home');
    });

    it('renders a Form component', () => {
        expect(stackForm.find('Form').exists()).toBe(true);
    });

    it('renders a button to add new Card', () => {
        expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
    });

    it('renders a button to submit the Form', () => {
        expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add Stack');
    });

    describe('and updating the title', () => {
        beforeEach(() => {
          stackForm.find('FormControl').simulate('change', { target: {value: 'change title' }})
        });

        it('updates the title in state', () => {
           //console.log(stackForm.state());
           expect(stackForm.state().title).toEqual('change title');
        });
    });

    describe('when adding a new card', () => {
        beforeEach(() => {
            stackForm.find('Button').at(0).simulate('click');
        });


        afterEach(() => {
            stackForm.setState({ cards: []});


        });
        it('adds a new card to the state', () => {
            expect(stackForm.state().cards.length).toEqual(1);
        });

        it('renders the prompt section', () => {
            expect(stackForm.find('ControlLabel').at(1).props().children).toEqual('Prompt:');
        });

        it('renders the answer section', () => {
            expect(stackForm.find('ControlLabel').at(2).props().children).toEqual('Answer:');
        });

        describe('and updating the card prompt ', () => {
            beforeEach(() => {
                stackForm.find('FormControl').at(1).simulate('change', { target: {value: 'change prompt' } });
            });

            it('updates the prompt in the state', () => {
                //console.log(stackForm.state());
                expect(stackForm.state().cards[0].prompt).toEqual('change prompt');
            });
        });

        describe('and updating the card answer', () => {
            beforeEach(() => {
                stackForm.find("FormControl").at(2).simulate('change', {target: { value: 'change answer' } });
            });

            it('updates the asnwer in the state', () => {
                expect(stackForm.state().cards[0].answer).toEqual('change answer');
            });
        });
    });
});