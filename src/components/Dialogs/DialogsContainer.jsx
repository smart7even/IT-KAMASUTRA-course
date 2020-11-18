import React from 'react'
import Dialogs from "./Dialogs";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: () => {
            dispatch(addMessageAC())
            dispatch(onMessageChangeAC(""))
        },
        onMessageChange: (newText) => {
            dispatch(onMessageChangeAC(newText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer