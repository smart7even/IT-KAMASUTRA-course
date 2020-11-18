import React from 'react'
import './Dialogs.scss'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let newMessageElement = React.createRef()

    const addMessage = () => {
        props.addMessage()
    }

    const onMessageChange = () => {
        const newMessageText = newMessageElement.current.value;
        props.onMessageChange(newMessageText)
    }

    return (
        <div className="dialogs">
            <div className="dialogs__items">
                {props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className="dialogs__messages">
                {props.messages.map(m => <Message key={m.id} message={m.message}/>)}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}
                              placeholder={"Enter your message"}/>
                </div>

                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs