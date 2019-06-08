import { Subject } from 'rxjs';

const observable = new Subject();

class LoaderService {
	constructor (props) {}

	getSubject () {
		return observable;
	}

	loading () {
		observable.next(true);
	}

	clear () {
		observable.next(false);
	}
}

const singletonInstance = new LoaderService();
export default singletonInstance;
