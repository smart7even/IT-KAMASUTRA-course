import React from 'react'
import {Route} from "react-router-dom";
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                <Route path="/profile" render={() => <Profile friends={props.store.getState().profilePage.friends}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>
                <Route path="/music" component={Music}/>
                <Route path="/users"
                       render={() => <UsersContainer />}/>
            </div>
        </div>
    );
}

export default App
