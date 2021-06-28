const mongoose= require('mongoose')

const postSchema= mongoose.Schema({
    userId:{type: String, required: true},
    desc:{type: String, max: 500},
    img:{type: String},
    likes: {type: Array, default: []},
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'Comment'
        },
    ]
}, {timestamps: true})

const Post= mongoose.model('Post', postSchema)

module.exports= Post