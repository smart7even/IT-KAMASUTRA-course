import React from 'react'
import './Dialogs.scss'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    return (
        <div className="dialogs">
            <div className="dialogs__items">
                {props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className="dialogs__messages">
                {props.messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs