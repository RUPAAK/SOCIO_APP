const mongoose= require('mongoose')

const Database= ()=>{
    mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
    })
        .then(()=> console.log('CONNECTED TO DATABASE'.cyan.bold))
    .catch((e)=>{
        console.error(`ERROR: ${e.message}`.red.bold)
        process.exit(1)
    })
    
}
module.exports= Database