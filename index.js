import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';
import Stack from './components/Stack';
import { setStack} from "./actions/index";
import index from 'index.css';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(setStack({ id: 0, title: 'example', cards: [] }));

//subscribe will run the code you pass it, when Store is updated
//in above case it will run console.log('store', store.getstate())
//dispatch triggers the actions to run
//Provider makes Store available to entire App


ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/stack' component={Stack} />
        </Switch>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);




