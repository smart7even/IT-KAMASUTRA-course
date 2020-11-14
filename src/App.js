import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";

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
                                                                  addPost={props.addPost} addLike={props.addLike}
                                                                  onPostChange={props.onPostChange}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.appState.messagesPage.dialogs}
                                                                  messages={props.appState.messagesPage.messages}/>}/>
                    <Route path="/music" component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App
