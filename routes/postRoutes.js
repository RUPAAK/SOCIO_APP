const route= require('express').Router()
const {createPost, updatePost, deletePost,likePost, getPost, getPosts}= require('../controllers/postControllers')

route.post('/', createPost)
route.put('/:id', updatePost)
route.delete('/:id', deletePost)
route.put('/:id/like', likePost)
route.get('/:id', getPost)
route.get('/timeline/allposts', getPosts)

module.exports=route