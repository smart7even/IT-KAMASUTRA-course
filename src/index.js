import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/redux-store";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
