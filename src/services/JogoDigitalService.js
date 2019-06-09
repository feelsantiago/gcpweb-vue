import RequestService from './RequestService';

const endpoint = 'v1/jogodigital';

class JogoDigitalService {
	constructor () {}

	getAll () {
		return RequestService.get(endpoint);
	}

	save (hq) {
		return RequestService.post(endpoint, hq);
	}

	getById (id) {
		return RequestService.get(endpoint, id);
	}

	delete (id) {
		return RequestService.delete(endpoint, id);
	}

	update (id) {
		return RequestService.put(endpoint, id);
	}
}

const singletonInstance = new JogoDigitalService();
export default singletonInstance;
