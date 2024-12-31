const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required:[true,"Please add the user name"]
    },
    email: {
        type: String,
        require: [true, "Please add the your email address"],
        unique:[true,"Email address already registered"]
    },
    password: {
        type: String,
        required:[true,"Please add your password"]
    }
},
    {
        timestamps: true
    }
)



module.exports = mongoose.model("User",userSchema)