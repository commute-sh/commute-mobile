import React, { Component } from 'react';

import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';

import reducers from './reducers';

import Commute from './commute';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

let middleware = applyMiddleware(thunk, createLogger());

let store = createStore(reducers, {}, middleware);


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Commute />
            </Provider>
        );
    }

}

AppRegistry.registerComponent('commute', () => App);
