const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    //connect to database
    const userData = [{
        "id": 1,
        "name": "Kgotso",
        "username": "kg@kg",
        "email": "email@email.com"
    }]

    res.send(userData)
})

module.exports = router