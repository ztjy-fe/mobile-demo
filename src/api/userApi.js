import { API } from './api'
import { SYSTEM } from './apiMaps'

export default {
	login (params, callback) {
		return API.post(SYSTEM.USER.LOGIN, params, callback)
	}
}
