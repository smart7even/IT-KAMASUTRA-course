let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, author: "Aleck", date: "3 Dec 2015", message: "my first post", likesCount: 42},
                {id: 2, author: "Smart", date: "8 Sep 2048", message: "my second post", likesCount: 322}
            ],
            friends: [
                {id: 1, name: "Andrew"},
                {id: 2, name: "Aleck"},
                {id: 3, name: "Norton"},
                {id: 4, name: "Edward"},
                {id: 5, name: "Clement"},
                {id: 6, name: "Simon"},
            ],
            newPostText: ""
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Aleck"},
                {id: 2, name: "Vadim"},
                {id: 3, name: "Vova"},
                {id: 4, name: "Erzhan"},
                {id: 5, name: "Michael"}
            ],
            messages: [
                {id: 1, message: "my first message"},
                {id: 2, message: "my second message"}
            ],
            newMessageText: ""
        }
    },
    _callSubscriber() {
        console.log("Not subscribed")
    },
    getState () {
      return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    addPost() {
        const posts = this._state.profilePage.posts;
        let newPostId = posts[posts.length - 1].id + 1
        let newPost = {
            id: newPostId,
            message: this._state.profilePage.newPostText,
            author: "Aleck",
            date: Date().toString(),
            likesCount: 0
        }
        posts.push(newPost)
        this._callSubscriber()
    },
    addLike(postId) {
        this._state.profilePage.posts.forEach((post) => {
            if(post.id === postId){
                post.likesCount += 1
            }
        })
        this._callSubscriber()
    },
    onPostChange(newPostText) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber()
    },
    addMessage() {
        const messages = this._state.messagesPage.messages
        let newMessageId = messages[messages.length - 1].id + 1
        let newMessage = {
            id: newMessageId,
            message: this._state.messagesPage.newMessageText
        }
        messages.push(newMessage)
        this._callSubscriber()
    },
    onMessageChange(newMessageText) {
        this._state.messagesPage.newMessageText = newMessageText
        this._callSubscriber()
    },
    dispatch(action){
        switch (action.type) {
            case ADD_POST:
                this.addPost()
                break
            case ADD_LIKE:
                this.addLike(action.postId)
                break
            case ON_POST_CHANGE:
                this.onPostChange(action.newPostText)
                break
            case ADD_MESSAGE:
                this.addMessage()
                break
            case ON_MESSAGE_CHANGE:
                this.onMessageChange(action.newMessageText)
                break
            default:
                break
        }
    }
}

const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";
const ADD_LIKE = "ADD-LIKE";
const ADD_MESSAGE = "ADD-MESSAGE"
const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE"

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const onPostChangeActionCreator = (newPostText) => ({
    type: ON_POST_CHANGE,
    newPostText: newPostText
})

export const addLikeActionCreator = (postId) => ({
    type: ADD_LIKE,
    postId: postId
})

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const onMessageChangeActionCreator = (newMessageText) => ({
    type: ON_MESSAGE_CHANGE,
    newMessageText: newMessageText
})

export default store