const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [ 3, 'First name must be at least 3 characters long' ],
        },
        lastname: {
            type: String,
            minlength: [ 3, 'Last name must be at least 3 characters long' ],
        },
        
    },
    email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match : [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
        },
    password:{
        type: String,
        required: true,
        minlength: [ 6, 'Password must be at least 6 characters long' ],
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        default: 'inactive',
        enum: ['active', 'inactive'],
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minLength:[3,'Color must be atleast 3 character long'],
        },
        plate:{
            type: String,
            required: true,
            minLength:[3,'Plate must be atleast 3 character long'],
        },
        capacity:{
            type:Number,
            required: true,
            min : [1,'Capacity must be atleast 1']
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['car','auto','motorcycle'],
        }

    },
    location:{
        lat:{
            type:Number,
        },
        long:{
            type:Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn : '24h'});
    return token;
}
captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}   
captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}
const captainModel = mongoose.model('captain',captainSchema);

module.exports = captainModel;