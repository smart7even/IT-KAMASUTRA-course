import React from 'react'
import SidebarFriends from "./Friends/SidebarFriends";

const Sidebar = (props) => {
    return(
        <div className="sidebar">
            <SidebarFriends friends={props.friends}/>
        </div>
    )
}

export default Sidebar