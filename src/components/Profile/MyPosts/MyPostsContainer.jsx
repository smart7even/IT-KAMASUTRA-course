import React from 'react'
import MyPosts from "./MyPosts";
import {addLikeAC, addPostAC, onPostChangeAC} from "../../../redux/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newText) => {
            dispatch(onPostChangeAC(newText))
        },
        addPost: () => {
            dispatch(addPostAC())
        },
        addLike: (postId) => {
            dispatch(addLikeAC(postId))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer