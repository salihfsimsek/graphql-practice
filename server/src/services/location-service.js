import BaseService from './base-service'
import LocationModel from '../models/location-model'

class LocationService extends BaseService {
    model = LocationModel
}

export default new LocationService()