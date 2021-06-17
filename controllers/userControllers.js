const errorAsync = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const generateToken= require('../config/generateToken')

//login
const login = errorAsync(async (req, res) => {
    try {
        const { email, password } = await req.body
        const user = await User.findOne({ email })
        const friends= await Promise.all(
            user.followings.map(friend=>{
                return(
                    User.findById(friend).select('-password').select('-email')
                )
            })
        )
        if (user && await user.comparePassword(password)) {
            res.status(200).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                profilePicture: user.profilePicture || '',
                coverPicture: user.coverPicture || '',
                followers: user.followers || [],
                followings: user.followings || [],
                friends,
                token: generateToken(user._ids)
            })
        } else {
            res.status(404)
            throw new Error('INVALID CREDIENTIALS')
        }
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }   
})

//register
const register = errorAsync(async (req, res) => {
    try {
        const { username, email, password } = await req.body
        const newUser = { username, email, password }
        const existuser = await User.findOne({ email })
        if (existuser) {
            res.status(401)
            throw new Error('USER ALREADY EXIST')
        }
        const user = await User(newUser).save()
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture,
            coverPicture: user.coverPicture,
            followers: user.followers,
            followings: user.followings,
            token: generateToken(user._ids)
        })
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//updateuser
const update = errorAsync(async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body })
            await res.status(200).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id)
            })
        } catch (error) {
            res.status(400)
            throw new Error(error)
        }
    } else {
        res.status(403)
        throw new Error('CANNOT RUN UPDATE')
    }
})
//uplaod  profile
const profilePicture= errorAsync(async(req, res)=>{
    const user= await User.findById(req.params.id)
    user.profilePicture=  `${process.env.APP_BASE_URL}/profile/${req.file.filename}`
    const updatedUser= await user.save()
    res.status(201).json(updatedUser)
})
//upload cover
const coverPicture= errorAsync(async(req, res)=>{
    const user= await User.findById(req.params.id)
    user.coverPicture=  `${process.env.APP_BASE_URL}/profile/${req.file.filename}`
    const updatedUser= await user.save()
    res.status(201).json(updatedUser)
})

//deleteuser
const deleteUser = errorAsync(async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
        const user= await User.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Accound Deleted"})
        } catch (error) {
            res.status(400)
            throw new Error(error)
        }
    } else {
        res.status(400)
        throw new Error('INVALID CREDIENTIAL')
    }
})
 
//getuser
const getUser= errorAsync(async(req, res)=>{
    try {
        const user= await User.findById(req.params.id)
        const friends= await Promise.all(
            user.followings.map(friend=>{
                return(
                    User.findById(friend).select('-password').select('-email')
                )
            })
        )
        res.status(200).json({
            _id: user._id,
            profilePicture: user.profilePicture,
            coverPicture: user.coverPicture,
            email: user.email,
            followers: user.followers,
            followings: user.followings,
            username: user.username,
            friends
            })
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//followUser
const follow= errorAsync(async(req, res)=>{
    if(req.body.userId !== req.params.id){
        try {
            const user= await User.findById(req.params.id)
            const currentUser= await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers: req.body.userId}})
                await currentUser.updateOne({$push:{followings: req.params.id}})
                res.status(200).json('USER HAVE BEEN FOLLOWED')
            }else{
                res.status(403).json('USER ALREADY FOLLOWING')
            }
        } catch (error) {
            res.status(500)
            throw new Error(error)
        }
    }else{
        res.status(403)
        throw new Error('CANNOT FOLLOW YOURSELF')
    }
})


//unfollow
const unFollow= errorAsync(async(req, res)=>{
    if(req.body.userId !== req.params.id){
        try {
            const user= await User.findById(req.params.id)
            const currentUser= await User.findById(req.body.userId)
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers: req.body.userId}})
                await currentUser.updateOne({$pull:{followings: req.params.id}})
                res.status(200).json('USER HAVE BEEN UNFOLLOWED')
            }else{
                res.status(403).json('USER ALREADY UNFOLLOWING')
            }
        } catch (error) {
            res.status(500)
            throw new Error(error)
        }
    }else{
        res.status(403)
        throw new Error('CANNOT UNFOLLOW YOURSELF')
    }
})

module.exports = { login, register, update, deleteUser, getUser, follow, unFollow, profilePicture, coverPicture}