const mongoose= require('mongoose')

const commentSchema= mongoose.Schema({
    cmt: {type: String},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true})

const Comment= mongoose.model('Comment', commentSchema)

module.exports= Comment