import RequestService from './RequestService';

const endpoint = 'login';

class LoginService {
	constructor () {}

	login (loginInformation = { username, password }) {
		return RequestService.post(endpoint, loginInformation);
	}
}

const singletonInstance = new LoginService();
export default singletonInstance;
