const route= require('express').Router();
const {register, login, update, deleteUser, getUser, follow, unFollow}= require('../controllers/userControllers')

route.post('/register', register)
route.post('/login', login)
route.put('/update/:id', update)
route.delete('/deleteUser/:id', deleteUser)
route.get('/profile/:id', getUser)
route.put('/:id/follow', follow)
route.put('/:id/unfollow', unFollow)

module.exports= route