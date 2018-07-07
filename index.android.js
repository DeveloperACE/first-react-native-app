import React from 'react';
import {
    AppRegistry
} from 'react-native';

import { Provider } from 'react-redux';
import store from './configureStore';
import App from './App';

const firstPracticeApp = () => {
    <Provider store={store}>
        <App />
    </Provider>
}

AppRegistry.registerComponent('firstPracticeApp', () => firstPracticeApp());
