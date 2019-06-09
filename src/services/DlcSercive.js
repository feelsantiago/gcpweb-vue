import RequestService from './RequestService';

const endpoint = 'v1/dlc';

class DlcService {
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

const singletonInstance = new DlcService();
export default singletonInstance;
