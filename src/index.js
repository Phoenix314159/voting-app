import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import myApp from './reducers';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(myApp);

function render() {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
}

store.subscribe(render);

render();