const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullname : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 25,
    },
    username : {
        type : String,
        required : true,
        minlength : 6,
        maxlength : 20,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    contact : {
        type : String,
        default : '',
    },
    profileImage : {
        type : String,
        default : "https://res.cloudinary.com/dvamgb6jy/image/upload/v1733850930/samples/cloudinary-icon.png"
    },
    followers : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
        }
    ],
    following : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
        }
    ],
    password : {
        type : String,
        required : true,
    }
})