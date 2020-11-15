import React from 'react'
import Dialogs from "./Dialogs";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
        props.dispatch(onMessageChangeActionCreator(""))
    }

    const onMessageChange = (newText) => {
        props.dispatch(onMessageChangeActionCreator(newText))
    }

    return (
        <Dialogs dialogs={props.dialogs} messages={props.messages} newMessageText={props.newMessageText}
                 addMessage={addMessage} onMessageChange={onMessageChange}/>
    )
}

export default DialogsContainer