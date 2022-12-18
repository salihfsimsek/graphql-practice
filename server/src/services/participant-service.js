import BaseService from './base-service'
import ParticipantModel from '../models/participant-model'

class ParticipantService extends BaseService {
    model = ParticipantModel
}

export default new ParticipantService()