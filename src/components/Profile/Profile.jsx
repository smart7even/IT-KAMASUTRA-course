import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Sidebar from "./Sidebar/Sidebar";

const Profile = (props) => {

    return (
        <div className="profile">
            <ProfileInfo/>
            <div className="profile__content">
                <Sidebar friends={props.friends}/>
                <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
            </div>

        </div>
    )

}

export default Profile
