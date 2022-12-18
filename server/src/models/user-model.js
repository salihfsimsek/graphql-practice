import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePhoto: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
        }
    ]
})

const UserModel = mongoose.model('User', UserSchema)

export default UserModel