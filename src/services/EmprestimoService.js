import RequestService from './RequestService';

const endpoint = 'v1/emprestimo';

class EmprestimoService {
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

	abertos () {
		return RequestService.get(endpoint, 'abertos');
	}

	devolver (id) {
		return RequestService.get(endpoint, [ 'devolver', id ]);
	}
}

const singletonInstance = new EmprestimoService();
export default singletonInstance;
