const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";
const ADD_LIKE = "ADD-LIKE";

const addPost = (state) => {
    const posts = state.posts;
    let newPostId = posts[posts.length - 1].id + 1
    let newPost = {
        id: newPostId,
        message: state.newPostText,
        author: "Aleck",
        date: Date().toString(),
        likesCount: 0
    }
    posts.push(newPost)

    return state
}
const addLike = (state, action) => {
    state.posts.forEach((post) => {
        if(post.id === action.postId){
            post.likesCount += 1
        }
    })

    return state
}
const onPostChange = (state, action) => {
    state.newPostText = action.newPostText

    return state
}

let initialState = {
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
}

export const profileReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case ADD_POST:
            state = addPost(state, action)
            break
        case ADD_LIKE:
            state = addLike(state, action)
            break
        case ON_POST_CHANGE:
            state = onPostChange(state, action)
            break
    }
    return state
}

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

export default profileReducer