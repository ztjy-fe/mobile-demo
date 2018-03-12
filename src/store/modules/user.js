import Common from '@/utils/common'

const User = {
	namespaced: true,

	state: {
		token: Common.getToken()
	},

	getters: {
		getUsername (state) {
			return state.token
		}
	},

	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		}
	},

	actions: {
		// 登录
		login ({ commit }) {
			return new Promise((resolve, reject) => {
				resolve()
			})
		}
	}
}

export default User
