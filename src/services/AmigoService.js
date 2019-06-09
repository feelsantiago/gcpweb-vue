import RequestService from './RequestService';

const endpoint = 'v1/amigo';

class AmigoService {
	constructor () {}

	getAll () {
		return RequestService.get(endpoint);
	}

	save (body) {
		return RequestService.post(endpoint, body);
	}

	getById (id) {
		return RequestService.get(endpoint, id);
	}

	delete (id) {
		return RequestService.delete(endpoint, id);
	}

	update (body) {
		return RequestService.put(endpoint, body);
	}
}

const singletonInstance = new AmigoService();
export default singletonInstance;
