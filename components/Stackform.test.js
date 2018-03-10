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
});