let initialState = {
    users: []
    /* users: [
        {id: 1, name: "Ryzen", followed: false, location: {city: "Kazan", country: "Russia"}},
        {id: 2, name: "Mike", followed: true, location: {city: "New York", country: "USA"}},
        {id: 3, name: "Noize MC", followed: true, location: {city: "Moscow", country: "Russia"}},
        {id: 4, name: "Aleck", followed: false, location: {city: "Moscow", country: "Russia"}},
        {id: 5, name: "Robert", followed: true, location: {city: "Moscow", country: "Russia"}},
        {id: 6, name: "Alex", followed: true, location: {city: "Saint-Petersburg", country: "Russia"}},
    ] */
}


const usersReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case ON_FOLLOW_CLICK:
            const copyState = {...state}
            copyState.users = state.users.map(u => {
                if (u.id === action.id){
                    return {
                        ...u, followed: !u.followed
                    }
                }
                return u
            })
            return copyState
        case SET_USERS:
            return  {...state, users: [...state.users, ...action.users]}
    }
    return state
}

const ON_FOLLOW_CLICK = "ON-FOLLOW-CLICK"
const SET_USERS = "SET-USERS"

export const followAC = (userId) => {
    return{
        type: ON_FOLLOW_CLICK,
        id: userId
    }
}

export const usersAC = (users) => {
    return{
        type: SET_USERS,
        users: users
    }
}

export default usersReducer