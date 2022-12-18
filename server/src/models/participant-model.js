import mongoose from 'mongoose'

const ParticipantSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
    },
})

const ParticipantModel = mongoose.model('Participant', ParticipantSchema)

export default ParticipantModel