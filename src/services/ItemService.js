import RequestService from './RequestService';

const endpoint = 'v1/item';

class ItemService {
	constructor () {}

	getAll () {
		return RequestService.get(endpoint);
	}

	getWishList () {
		return RequestService.get(endpoint, 'wishlist');
	}
}

const singletonInstance = new ItemService();
export default singletonInstance;
