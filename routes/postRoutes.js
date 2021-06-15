const route= require('express').Router()
const multer = require('multer')
const path= require('path')
const { v4: uuidv4 } = require('uuid');

const {createPost, updatePost, deletePost,likePost, getPost, getPosts}= require('../controllers/postControllers')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/images')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}${uuidv4()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })


route.post('/', upload.single('postImage'), createPost)
route.put('/:id', updatePost)
route.delete('/:id', deletePost)
route.put('/:id/like', likePost)
route.get('/:id', getPost)
route.get('/timeline/allposts', getPosts)

module.exports=route