const ADD_MESSAGE = "ADD-MESSAGE"
const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE"

const addMessage = (state) => {
    const messages = state.messages
    let newMessageId = messages[messages.length - 1].id + 1
    let newMessage = {
        id: newMessageId,
        message: state.newMessageText
    }
    messages.push(newMessage)

    return state
}

const onMessageChange = (state, action) => {
    state.newMessageText = action.newMessageText

    return state
}

export const dialogsReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case ADD_MESSAGE:
            state = addMessage(state)
            break
        case ON_MESSAGE_CHANGE:
            state = onMessageChange(state, action)
            break
    }
    return state
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const onMessageChangeActionCreator = (newMessageText) => ({
    type: ON_MESSAGE_CHANGE,
    newMessageText: newMessageText
})

export default dialogsReducer