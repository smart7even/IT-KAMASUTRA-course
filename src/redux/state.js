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
    addPost() {
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
}

export default store