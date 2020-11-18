import Users from "./Users";
import {followAC} from "../../redux/usersReducer";

const {connect} = require("react-redux");


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onFollowClick: (userId) => {
            dispatch(followAC(userId))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer