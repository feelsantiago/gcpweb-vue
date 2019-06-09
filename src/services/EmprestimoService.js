import RequestService from './RequestService';

const endpoint = 'v1/emprestimo';

class EmprestimoService {
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

	abertos () {
		return RequestService.get(endpoint, 'abertos');
	}

	devolver (body) {
		return RequestService.get(endpoint, [ 'devolver', body ]);
	}
}

const singletonInstance = new EmprestimoService();
export default singletonInstance;
