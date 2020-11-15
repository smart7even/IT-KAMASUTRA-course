import React from 'react'
import Post from './Post/Post'
import './MyPosts.scss'

const MyPosts = (props) => {

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        props.updateNewPostText(newText)
    }

    let newPostElement = React.createRef()

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <button onClick={addPost}>Add post</button>
            <div>
                {props.posts.map(post => <Post id={post.id} author={post.author} date={post.date} message={post.message}
                                             likesCount={post.likesCount} addLike={props.addLike}/>)}
            </div>
        </div>
    )
}

export default MyPosts
