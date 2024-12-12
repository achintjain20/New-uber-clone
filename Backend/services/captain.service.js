const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    firstname,lastname,password,email,color,plate,capacity,vehicleType
}) => {
    if(!firstname || !password || !email || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }

    const captain = await captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        password,
        email,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }

    });

    return captain;
}