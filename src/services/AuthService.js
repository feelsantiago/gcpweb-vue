let authenticated = false;
let remember = false;
let user;
let token;
const token_key = 'token-key-login';
const user_key = 'user-key-login';

class AuthService {
	constructor () {}

	setUserAuthentication (user, token, save) {
		user = user;
		token = token;
		remember = save;

		if (remember) {
			localStorage.setItem(token_key, token);
			localStorage.setItem(user_key, user);
		}

		authenticated = true;
	}

	clearAuthentication () {
		user = undefined;
		token = undefined;
		remember = false;

		localStorage.clear();
	}

	isAuthenticated () {
		if (authenticated) return authenticated;

		this.getToken();
		this.getUser();

		if (token || user) authenticated = true;

		return authenticated;
	}

	getToken () {
		if (token) return token;

		token = localStorage.getItem(token_key);
		return token;
	}

	getUser () {
		if (user) return user;

		user = localStorage.getItem(user_key);
		return user;
	}
}

const singletonInstance = new AuthService();
export default singletonInstance;
