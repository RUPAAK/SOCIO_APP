const errorAsync = require('express-async-handler')
const Post = require('../models/postModels')
const User = require('../models/userModel')
const multer = require('multer')


//createPost
const createPost = errorAsync(async (req, res) => {
    const { userId, desc } = await req.body
    const img= req.file.filename
    try {
        const newPost = new Post({ userId, desc, img})
        const savedPost = await newPost.save()
        console.log(savedPost)
        // const imageUrl= `${process.env.APP_BASE_URL}/${req.file.filename}`
        res.status(200).json({
            userId: savedPost.userId,
            desc: savedPost.desc,
            img: `${process.env.APP_BASE_URL}/post/${savedPost.img}`,
        })
    } catch (error) {
        res.status(500)
        throw new Error(error)
    }
})


//updatepost
const updatePost = errorAsync(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body })
        res.status(200).json('POST IS UPDATED')
    } else {
        res.status(403)
        throw new Error('NO ACCESS TO POST')
    }
})

//deletepost
const deletePost = errorAsync(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
        await post.deleteOne()
        res.status(200).json('POST IS DELETED')
    } else {
        res.status(403)
        throw new Error('NO ACCESS TO POST')
    }
})

//like-dislikepost
const likePost = errorAsync(async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } })
            res.status(200).json('POST LIKED')
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).json('POST DISLIKED')
        }
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// userPosts

const getUserPost= errorAsync(async(req, res)=>{
    try {
        const posts= await Post.find({userId: req.params.id})
        const user= await User.findById(posts[0].userId).select('-password')
        res.json({
            posts, 
            user
        })
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})
const getUser= errorAsync(async(req, res)=>{
    console.log('hi')
    try {
        const user= await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//getonepost
const getPost = errorAsync(async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//timelinepost
const getPosts = errorAsync(async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId)
        const userPosts = await Post.find({ userId: currentUser._id })
        const friendPost = await Promise.all(
            currentUser.followings.map(friendId => {
                return (
                    Post.find({ userId: friendId })
                )
            })
        )
        res.json(userPosts.concat(...friendPost))
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})


module.exports = { createPost, updatePost, deletePost, likePost, getPost, getPosts, getUserPost,getUser }