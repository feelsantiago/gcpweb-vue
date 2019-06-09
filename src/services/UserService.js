import RequestService from './RequestService';

const endpoint = 'v1/user';

class UserService {
	constructor () {}

	save (body) {
		return RequestService.post(endpoint, body);
	}
}

const singletonInstance = new UserService();
export default singletonInstance;
