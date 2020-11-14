import React from 'react'
import avatar from "../../../assets/avatar/avatar.jpg";

const ProfileInfo = () => {
    return (
        <div className="profile__info">
            <div className="profile__avatar">
                <img className="profile__avatar-img" src={avatar} alt=""/>
            </div>
            <div className="profile__data">
                <div className="profile__data-main">
                    <div className="profile__name">Oleg Magomedov</div>
                    <div className="profile__status">Back to the future</div>
                </div>

                <div className="profile__data-about">
                    <div className="profile__labels">
                        <div className="profile__label">Birthday:</div>
                        <div className="profile__label">Institution:</div>
                    </div>
                    <div className="profile__values">
                        <div className="profile__birthday">August 7</div>
                        <div className="profile__institution">School 1</div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProfileInfo