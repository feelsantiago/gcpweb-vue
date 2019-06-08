import RequestService from './RequestService';

const endpoint = 'v1/dvdcd';

class DvdCdService {
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
}

const singletonInstance = new DvdCdService();
export default singletonInstance;
