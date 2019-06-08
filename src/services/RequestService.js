import axios from 'axios';
import AuthService from './AuthService';

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
	let result = '?';

	for (let key of keys) {
		result += key + '=' + query[key] + '&';
	}

	if (result.endsWith('&')) return result.substr(0, result.length - 2);

	return result;
}

function getHeaders () {
	return {
		'Access-Control-Allow-Origin'  : '*',
		'Access-Control-Allow-Headers' : 'Authorization',
		'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
		Authorization                  : AuthService.getToken()
	};
}
class RequestService {
	constructor () {}

	get (endpoint, params, query) {
		return axios.get(getFullUrl(endpoint, params, query), { headers: getHeaders() });
	}

	post (endpoint, body) {
		return axios.post(getFullUrl(endpoint), body, { headers: getHeaders() });
	}

	put (endpoint, body, params) {
		return axios.put(getFullUrl(endpoint, params), body, { headers: getHeaders() });
	}

	delete (endpoint, params) {
		return axios.delete(getFullUrl(endpoint, params), { headers: getHeaders() });
	}
}

const singletonInstance = new RequestService();
export default singletonInstance;
