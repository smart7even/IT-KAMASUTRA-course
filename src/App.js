import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="content">
                    <Route path="/profile" render={() => <Profile posts={props.appState.profilePage.posts}
                                                                  friends={props.appState.profilePage.friends}
                                                                  newPostText={props.appState.profilePage.newPostText}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/dialogs" render={() => <DialogsContainer dialogs={props.appState.messagesPage.dialogs}
                                                                           messages={props.appState.messagesPage.messages}
                                                                           newMessageText={props.appState.messagesPage.newMessageText}
                                                                           dispatch={props.dispatch}/>}/>
                    <Route path="/music" component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App
