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

let initialState = {
    dialogs: [
        {id: 1, name: "Aleck"},
        {id: 2, name: "Vadim"},
        {id: 3, name: "Vladimir"},
        {id: 4, name: "Erina"},
        {id: 5, name: "Michael"}
    ],
    messages: [
        {id: 1, message: "my first message"},
        {id: 2, message: "my second message"}
    ],
    newMessageText: ""
}

export const dialogsReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case ADD_MESSAGE:
        {
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy = addMessage(stateCopy)
            return stateCopy
        }

        case ON_MESSAGE_CHANGE:
        {
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy = onMessageChange(stateCopy, action)
            return stateCopy
        }
    }
    return state
}

export const addMessageAC = () => ({
    type: ADD_MESSAGE
})

export const onMessageChangeAC = (newMessageText) => ({
    type: ON_MESSAGE_CHANGE,
    newMessageText: newMessageText
})

export default dialogsReducer