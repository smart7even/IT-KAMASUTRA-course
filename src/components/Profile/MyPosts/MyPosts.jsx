import React from 'react'
import Post from './Post/Post'
import './MyPosts.scss'
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch(onPostChangeActionCreator(""))
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        props.dispatch(onPostChangeActionCreator(newText))
    }

    let newPostElement = React.createRef()

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} name="" id="" cols="30" rows="10" value={props.newPostText}/>
            </div>
            <button onClick={addPost}>Add post</button>
            <div>
                {props.posts.map(post => <Post id={post.id} author={post.author} date={post.date} message={post.message}
                                             likesCount={post.likesCount} dispatch={props.dispatch}/>)}
            </div>
        </div>
    )
}

export default MyPosts
