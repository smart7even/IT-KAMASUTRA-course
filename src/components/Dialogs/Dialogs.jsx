import React from 'react'
import './Dialogs.scss'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let newMessageElement = React.createRef()

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
        props.dispatch(onMessageChangeActionCreator(""))
    }

    const onMessageChange = () => {
        const newMessageText = newMessageElement.current.value;
        props.dispatch(onMessageChangeActionCreator(newMessageText))
    }

    return (
        <div className="dialogs">
            <div className="dialogs__items">
                {props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className="dialogs__messages">
                {props.messages.map(m => <Message message={m.message}/>)}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} name=""
                              id="" cols="30" rows="10"></textarea>
                </div>

                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs