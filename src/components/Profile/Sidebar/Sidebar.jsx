import React from 'react'
import avatar from "../../../assets/avatar/avatar.jpg";
import SidebarFriends from "./Friends/SidebarFriends";

const Sidebar = (props) => {
    return(
        <div className="sidebar">
            <SidebarFriends friends={props.friends}/>
        </div>
    )
}

export default Sidebar