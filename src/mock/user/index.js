import Mock from 'mockjs'
import * as ApiMaps from '@/api/apiMaps'

// 用户登录
export const loginMock = () => {
	Mock.mock(ApiMaps.SYSTEM.USER.LOGIN, {
		'code': 10000,
		'message': 'success',
		'body': {
			'token|2': 'admin'
		}
	})
}
