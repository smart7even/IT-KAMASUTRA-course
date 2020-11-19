const express = require('express')
const mongoose = require('mongoose')
const config = require("./config/default.json")

const start = async () => {
    await mongoose.connect(config['mongoUri'], {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
}

start()

const usersStorage = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    city: String,
    followed: Boolean,
    country: String
})

const UserVK = mongoose.model('UserVK', usersStorage)

let initialState = {
    users: [
        { id: 1, name: "Ryzen", followed: false, location: { city: "Kazan", country: "Russia" } },
        { id: 2, name: "Mike", followed: true, location: { city: "New York", country: "USA" } },
        { id: 3, name: "Noize MC", followed: true, location: { city: "Moscow", country: "Russia" } },
        { id: 4, name: "Aleck", followed: false, location: { city: "Moscow", country: "Russia" } },
        { id: 5, name: "Main", followed: true, location: { city: "Moscow", country: "Russia" } },
        { id: 6, name: "Alex", followed: true, location: { city: "Saint-Petersburg", country: "Russia" } },
    ]
}

const instantiateUsers = async () => {
    for (user of initialState.users) {
        console.log(user)
        newUser = new UserVK({ name: user.name, city: user.location.city, country: user.location.country, followed: user.followed })
        await newUser.save()
    }
}

app = express()

app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(5000, () => {
    console.log("App started")
})

let users
const getUsers = async () => {
    await UserVK.find().then((response) => {
        users = response
    })
}

const refactorUsers = (users) => {
    let refactoredUsers = users.map(user => {
        return {
            id: user._id,
            name: user.name,
            followed: user.followed,
            location: {
                city: user.city,
                country: user.country
            }
        }
    })
    console.log(refactoredUsers)
    return refactoredUsers
}

app.get("/api/users", (req, res) => {
    getUsers().then(() => {
        res.json({
            users: refactorUsers(users)
        })
    })
})