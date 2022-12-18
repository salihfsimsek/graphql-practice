import BaseService from './base-service'
import EventModel from '../models/event-model'

class EventService extends BaseService {
    model = EventModel
}

export default new EventService()