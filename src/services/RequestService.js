import axios from 'axios';
import AuthService from './AuthService';

axios.defaults.baseURL = 'http://localhost:8081/api/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, PATCH, DELETE';
axios.defaults.headers.common['Authorization'] = AuthService.getToken().toString();

function getFullUrl (endpoint, params, query) {
	let fullUrl = endpoint;

	if (params) {
		if (Array.isArray(params)) fullUrl += transformArrayToEndpoint(params);
		else fullUrl += '/' + params;
	}

	if (query) {
		fullUrl += serializeQueryParam(query);
	}

	return fullUrl;
}

function transformArrayToEndpoint (params) {
	let result = '';

	for (let param of params) {
		if (param !== '' && param !== ' ') result += '/' + param;
	}

	return result;
}

function serializeQueryParam (query) {
	const keys = Object.keys(query);
	let result = '?';

	for (let key of keys) {
		if (query[key] !== '' && query[key] !== ' ') result += key + '=' + query[key] + '&';
	}

	if (result.endsWith('&')) return result.substr(0, result.length - 1);

	return result;
}

function getHeaders () {
	return {
		'Access-Control-Allow-Origin'      : '*',
		'Access-Control-Allow-Headers'     : 'Authorization',
		'Access-Control-Allow-Methods'     : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
		'Access-Control-Allow-Credentials' : true,
		Authorization                      : AuthService.getToken()
	};
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
