import RequestService from './RequestService';

const endpoint = 'v1/dlc';

class DlcService {
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

const singletonInstance = new DlcService();
export default singletonInstance;
