import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders the `Flashcards` title', () => {
        expect(app.find('h2').text()).toEqual('Flashcards');
    });

    it('renders Stacklist', () => {
        //console.log(app.debug()); //use to see app structure and know how to test parts of the app
         expect(app.find('Connect(Stacklist)').exists()).toBe(true);
    });

    it('renders link to create new stacks', () => {
        expect(app.find('Link h4').text()).toEqual('Create New Stack');
    });
});