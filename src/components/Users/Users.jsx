import React from 'react'

import './Users.scss'
import User from "./User/User";

const Users = (props) => {
    return (
        <div>
            <div>Users list</div>
            <div className="users">
                {props.users.map(user => <User onFollowClick={props.onFollowClick} key={user.id} id={user.id}
                                               name={user.name} location={user.location} followed={user.followed}/>)}
            </div>

        </div>

    )
}

export default Users