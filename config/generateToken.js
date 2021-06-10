const jwt= require('jsonwebtoken')

const generateToken=(id)=>{
    return jwt.sign({id}, process.env.SECRETKEY, {
        expiresIn: '1hr'
    })
}

module.exports= generateToken