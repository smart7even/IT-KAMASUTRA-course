import React from 'react'
import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Sidebar from "./Sidebar/Sidebar";
import MyPostContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className="profile">
            <ProfileInfo/>
            <div className="profile__content">
                <Sidebar friends={props.friends}/>
                <MyPostContainer posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
            </div>

        </div>
    )

}

export default Profile
