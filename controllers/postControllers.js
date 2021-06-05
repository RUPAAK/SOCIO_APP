const errorAsync= require('express-async-handler')
const Post= require('../models/postModels')
const User= require('../models/userModel')


//createPost
const createPost= errorAsync(async(req, res)=>{
    const newPost= await new Post(req.body)
    try{
        const savedPost= await newPost.save()
        res.status(200).json(savedPost)
    }catch(error){
        res.status(500)
        throw new Error(error)
    }
})


//updatepost
const updatePost= errorAsync(async(req, res)=>{
    const post= await Post.findById(req.params.id)
    if(post.userId=== req.body.userId){
        await post.updateOne({$set: req.body})
        res.status(200).json('POST IS UPDATED')
    }else{
        res.status(403)
        throw new Error('NO ACCESS TO POST')
    }
})

//deletepost
const deletePost= errorAsync(async(req, res)=>{
    const post= await Post.findById(req.params.id)
    if(post.userId=== req.body.userId){
        await post.deleteOne()
        res.status(200).json('POST IS DELETED')
    }else{
        res.status(403)
        throw new Error('NO ACCESS TO POST')
    }
})

//like-dislikepost
const likePost= errorAsync(async(req, res)=>{
    try {
        const post= await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}})
            res.status(200).json('POST LIKED')
        }else{
            await post.updateOne({$pull: {likes: req.body.userId}})
            res.status(200).json('POST DISLIKED')
        }
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})


//getonepost
const getPost= errorAsync(async(req, res)=>{
    try {
        const post= await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//timelinepost

const getPosts= errorAsync(async(req, res)=>{
    try {
        const currentUser= await User.findById(req.body.userId)
        const userPosts= await Post.find({userId: currentUser._id})
        const friendPost= await Promise.all(
            currentUser.followings.map(friendId=> {
                return(
                    Post.find({userId: friendId})
                )
            })
        )
        res.json(userPosts.concat(...friendPost))
    } catch (error) {   
        res.status(400)
        throw new Error(error)
    }
})


module.exports= {createPost, updatePost,deletePost, likePost, getPost, getPosts}