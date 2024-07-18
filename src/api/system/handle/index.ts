import request from '/@/utils/request';

/**
 * 登录api接口集合
 * @method signIn 用户登录
 */
export function getpet(params: object){
	return request({
		url: '/pet/findByStatus',
		method: 'get',
	});
}
