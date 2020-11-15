import React from 'react'
import MyPosts from "./MyPosts";
import {addLikeActionCreator, addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";

const MyPostContainer = (props) => {

    const updateNewPostText = (newText) => {
        props.dispatch(onPostChangeActionCreator(newText))
    }

    const addPost = () => {
        props.dispatch(addPostActionCreator())
        updateNewPostText("")
    }

    const addLike = (postId) => {
        props.dispatch(addLikeActionCreator(postId))
    }

    return(
        <MyPosts posts={props.posts} updateNewPostText={updateNewPostText} addPost={addPost} addLike={addLike}/>
    )
}

export default MyPostContainer