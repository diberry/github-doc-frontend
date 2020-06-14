import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import gitHubNotesApp from './storage/client/reducers'

//@ts-ignore
export const store = createStore(gitHubNotesApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const printStore = (storeState:any ) =>console.log(`store = ${JSON.stringify(storeState)}`)
console.log(`initial store = ${JSON.stringify(store.getState())}`)
const unsubscribe = store.subscribe(() => printStore(store.getState()))
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
