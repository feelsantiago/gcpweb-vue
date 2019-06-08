import axios from 'axios';

const baseUrl = 'https://gcpweb-application.herokuapp.com/api/';

function getFullUrl (endpoint, params, query) {
	let fullUrl = baseUrl + endpoint;

	if (params) {
		if (Array.isArray(params)) fullUrl += transformArrayToEndpoint(params);
		else fullUrl += '/' + params;
	}

	if (query) {
		fullUrl += serializeQueryParam(params);
	}

	return fullUrl;
}

function transformArrayToEndpoint (params) {
	let result;

	for (let param of params) {
		if (param !== '' && param !== ' ') result += '/' + param;
	}

	return result;
}

function serializeQueryParam (query) {
	const keys = Object.keys(query);
	const result = '?';

	for (let key of keys) {
		result += key + '=' + query[key] + '&';
	}

	if (result.endsWith('&')) return result.substr(0, result.length - 2);

	return result;
}

class RequestService {
	constructor () {}

	get (endpoint, params, query) {
		return axios.get(getFullUrl(endpoint, params, query));
	}

	post (endpoint, body) {
		return axios.post(getFullUrl(endpoint), body);
	}

	put (endpoint, body, params) {
		return axios.put(getFullUrl(endpoint, params), body);
	}

	delete (endpoint, params) {
		return axios.delete(getFullUrl(endpoint, params));
	}
}

const singletonInstance = new RequestService();
export default singletonInstance;
