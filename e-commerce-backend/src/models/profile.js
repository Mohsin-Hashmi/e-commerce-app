
const mongoose= require('mongoose');

const profileSchema= mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
    }

})

const Profile= mongoose.model('Profile', profileSchema);

module.exports= Profile;