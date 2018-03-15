
import { USER_TOKEN } from '@/maps/constants'

// 引入szyutils公用工具库
const getCookie = require('szyutils/modules/getCookie')
const setCookie = require('szyutils/modules/setCookie')
const removeCookie = require('szyutils/modules/removeCookie')

export default {
	getToken () {
		return getCookie(USER_TOKEN)
	},

	setCookie (name, value, days) {
		return setCookie(name, value, days)
	},

	removeToken () {
		return removeCookie(USER_TOKEN)
	}
}
