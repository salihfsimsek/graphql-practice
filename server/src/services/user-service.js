import BaseService from './base-service';
import UserModel from '../models/user-model';

class UserService extends BaseService {
    model = UserModel;
}

export default new UserService();