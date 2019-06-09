import RequestService from './RequestService';

const endpoint = 'v1/amigo';

class AmigoService {
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

	update (body) {
		return RequestService.put(endpoint, body);
	}
}

const singletonInstance = new AmigoService();
export default singletonInstance;
