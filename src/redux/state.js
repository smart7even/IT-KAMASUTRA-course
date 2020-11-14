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
            ]
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
    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPostId = this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1
            let newPost = {
                id: newPostId,
                message: this._state.profilePage.newPostText,
                author: "Aleck",
                date: Date().toString(),
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber()
        } else if (action.type === "ADD-LIKE"){
            this._state.profilePage.posts.forEach((post) => {
                if(post.id === action.postId){
                    post.likesCount += 1
                }
            })
            this._callSubscriber()
        } else  if(action.type === "ON-POST-CHANGE"){
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber()
        }
    }
}

const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";
const ADD_LIKE = "ADD-LIKE";

export const addPostActionCreator = () => (
    {
        type: ADD_POST
    }
)

export const onPostChangeActionCreator = (newPostText) => (
    {
        type: ON_POST_CHANGE,
        newPostText: newPostText
    }
)

export const addLikeActionCreator = (postId) => (
    {
        type: ADD_LIKE,
        postId: postId
    }
)

export default store