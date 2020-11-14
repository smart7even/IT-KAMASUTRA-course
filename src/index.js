import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={store.getState()} addPost={store.addPost.bind(store)} addLike={store.addLike.bind(store)}
                 onPostChange={store.onPostChange.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
