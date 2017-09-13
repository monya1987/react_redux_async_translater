import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import rootReduser from '../reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Translater from "./Translater";
import logger from 'redux-logger'



const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk, logger)))
window.store = store;

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Translater/>
        </Provider>
    );
  }
}
