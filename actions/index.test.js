import * as actions from './index';
import { stack, stacks } from '../data/fixtures';


describe('actions', () => {
    it('creates an action to set the main stack', () => {
       const expectedAction = {
           type: actions.SET_STACK,
           stack                      //from fixtures.js file
       };

       expect(actions.setStack(stack)).toEqual(expectedAction);
    });

    it('creates an action to add stack', () => {
        const expectedAction = {
            type: actions.ADD_STACK,
            stack                     //from fixtures.js file
        };

        expect(actions.addStack(stack)).toEqual(expectedAction);
    });

    it('creates an action to load stacks', () => {
        const expectedAction = {
            type: actions.LOAD_STACKS,
            stacks                      //from fixtures.js file
        };

        expect(actions.loadStacks(stacks)).toEqual(expectedAction);
    });
});