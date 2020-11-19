import React from 'react'
import axios from 'axios'

import './Users.scss'
import User from "./User/User";

let called = false
const Users = (props) => {

    if (props.users.length === 0 && !called){
        called = true
        axios.get('http://localhost:5000/api/users').then(response => {
            console.log(response)
            props.setUsers(response.data.users)
        })
    }


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