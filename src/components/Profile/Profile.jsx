import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Sidebar from "./Sidebar/Sidebar";

const Profile = (props) => {

    return (
        <div className="profile">
            {/*<img className="profile__header"
                 src="https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?size=626&ext=jpg"
                 alt=""/>*/}
            <ProfileInfo/>
            <div className="profile__content">
                <Sidebar friends={props.friends}/>
                <MyPosts posts={props.posts} newPostText={props.newPostText} addPost={props.addPost}
                         addLike={props.addLike} onPostChange={props.onPostChange}/>
            </div>

        </div>
    )

}

export default Profile
