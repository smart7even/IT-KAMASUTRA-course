import React from 'react'
import avatar from "../../../../../assets/avatar/avatar.jpg";

const SidebarFriendsItem = (props) => {
    return(
        <div className="sidebar__friends__item">
            <div className="sidebar__friends__item-avatar">
                <img className="sidebar__friends__item-avatar" src={avatar} alt=""/>
            </div>
            <div className="sidebar__friends__item-name">{props.name}</div>
        </div>
    )
}

export default SidebarFriendsItem