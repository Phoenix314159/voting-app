import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import myApp from './reducers';
import Results from './components/Results'
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(myApp);

function render() {
    ReactDOM.render(
        <div className="container">
            <App store={store}/>,
            <hr/>
            <Results store={store}/>
        </div>,
        document.getElementById('root'),
    registerServiceWorker()
    );
}

store.subscribe(render);

render();