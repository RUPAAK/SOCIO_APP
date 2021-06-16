const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const errorAsync = require('express-async-handler')

const protect = errorAsync(async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            console.log(token)
            const decode = await jwt.verify(token, process.env.SECRETKEY)
            req.user = await User.findById(decode.id).select('-password')
            next()
        } catch (error) {
            res.status(401)
            throw new Error('Authorization Failed')
        }
    }
})

module.exports= protect