const route= require('express').Router();
const multer= require('multer')
const { v4: uuidv4 } = require('uuid');
const path= require('path')

const {register, login, update, deleteUser, getUser, follow, unFollow, profilePicture, coverPicture}= require('../controllers/userControllers')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/profile')
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}${uuidv4()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

route.post('/register', register)
route.post('/login', login)
route.put('/update/:id', update)
route.delete('/deleteUser/:id', deleteUser)
route.get('/profile/:id', getUser)
route.put('/:id/follow', follow)
route.put('/:id/unfollow', unFollow)
route.put('/profile/:id/profile', upload.single('profile'), profilePicture)
route.put('/profile/:id/cover', upload.single('cover'), coverPicture)

module.exports= route 