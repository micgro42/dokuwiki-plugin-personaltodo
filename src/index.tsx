import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App/App';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';


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
