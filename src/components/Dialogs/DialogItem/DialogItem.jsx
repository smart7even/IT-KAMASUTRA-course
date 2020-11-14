import {NavLink} from "react-router-dom";
import Avatar from "../../../assets/avatar/avatar.jpg";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <NavLink to={path} className="dialogs__link">
            <div className="dialogs__item">
                <img src={Avatar} alt="" className="dialogs__avatar" />
                <div className="dialogs__name">{props.name}</div>
            </div>
        </NavLink>
    )
}

export default DialogItem