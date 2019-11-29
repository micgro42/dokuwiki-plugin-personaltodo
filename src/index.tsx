import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App/App';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

const params = { call: 'plugin_personaltodo', action: 'getdata'};
const paramString = Object.entries(params).map(([k,v]) => `${k}=${v}`).join('&')
fetch( 'http://127.0.0.1/~michael/dokuwiki/lib/exe/ajax.php?'+paramString )
    .then( response => response.text())
    .then( response => console.log(response))
    .catch(
        console.error
    );
const store = createStore(rootReducer, {
    todos: {
        'asd': {
            id: 'asd',
            title: 'a hardcoded todo',
            projectsIds: [],
            completedDate: null
        }
    },
    projects: {
        'qwe': {
            id: 'qwe',
            title: 'hardcoded Testproject'
        }
    }
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note: this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
