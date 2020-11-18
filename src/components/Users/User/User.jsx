import React from 'react'
import Avatar from "../../../assets/avatar/avatar.jpg";

const User = (props) => {

    const onFollowClick = () => {
        props.onFollowClick(props.id)
    }

    return (
        <div className="users__item">
            <img src={Avatar} alt="" className="users__avatar"/>
            <div className="users__info">
                <div className="users__name">{props.name}</div>
                <div className="users__location">{props.location.city}, {props.location.country}</div>
            </div>

            <button onClick={onFollowClick}
                    className={"users__follow-btn"}>{props.followed ? "Unfollow" : "Follow"}</button>
        </div>
    )
}

export default User