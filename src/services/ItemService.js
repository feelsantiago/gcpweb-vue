import RequestService from './RequestService';

const endpoint = 'v1/item';

class ItemService {
	constructor () {}

	getAll (query) {
		return RequestService.get(endpoint, undefined, query);
	}

	getWishList () {
		return RequestService.get(endpoint, 'wishlist');
	}
}

const singletonInstance = new ItemService();
export default singletonInstance;
