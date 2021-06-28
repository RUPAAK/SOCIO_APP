const route= require('express').Router()
const multer = require('multer')
const path= require('path')
const protect= require('../config/Protect')
const { v4: uuidv4 } = require('uuid');

const {createPost, updatePost, deletePost,likePost, getPost, getPosts, getUserPost, getUser, commentPost, getComment}= require('../controllers/postControllers')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/images')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}${uuidv4()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })


route.post('/', upload.single('photoPp'), createPost)
route.put('/:id', updatePost)
route.delete('/:id', deletePost)
route.put('/:id/like', likePost)
route.get('/userPosts/:id',  getUserPost)
route.get('/user/:id', getUser)
route.get('/:id', getPost)
route.post('/timeline/allposts', getPosts)
route.put('/:id/commentpost', commentPost)
route.get('/:id/postcomment', getComment)

module.exports=route