import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App/App';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
import hydrateStore from './actions/RootActions';

const store = createStore(
    rootReducer,
// @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const params = { call: 'plugin_personaltodo', action: 'getdata'};
const paramString = Object.entries(params).map(([k,v]) => `${k}=${v}`).join('&')
fetch( 'http://127.0.0.1/~michael/dokuwiki/lib/exe/ajax.php?'+paramString, {
    // credentials: 'include',
    mode: 'cors',
} )
    .then( response => response.json())
    .then( response => {
        console.log(response);
        store.dispatch(hydrateStore(response));
    })
    .catch(
        console.error
    );


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
