const mongoose= require('mongoose')
const bcrypt= require('bcryptjs')

const userSchema= mongoose.Schema({
    username:{type: String, required: true, min:3, max: 20, unique: true},
    email: {type: String, require: true, max: 50, unique: true},
    password: {type: String, require: true, min: 6},
    profilePicture: {type: String, default: ''},
    coverPicture: {type: String, default: ''},
    followers: {type: Array, default: []},
    followings: {type: Array, default: []},
    isAdmin: {type: String, default: false},
    desc:{type: String, max:50},
    city: {type: String, max: 50},
    from: {type: String, max: 50},
    replationship: {type: String, enum: [1, 2, 3]}
}, {timestamps: true})


userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt= await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password, salt)
    next()
})

userSchema.methods.comparePassword= async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

const User= mongoose.model('User', userSchema)

module.exports= User