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
                <MyPostContainer/>
            </div>

        </div>
    )
}

export default Profile
