import * as api from "../services/example";
import {
	message
} from "antd";
export default {
	namespace: "home",
	state: {
		isLogin: null,
		lifeArticleList: []
	},
	reducers: {
		getList(state, action) { //本地更新生活随笔列表数据
			return {
				...state,
				lifeArticleList: action.data
			}
		},
		getLogin(state, action) {
			return {
				...state,
				isLogin: action.data
			}
		}
	},
	effects: {
		* getListHttp({ //获取生活随笔的列表，向后台的请求
			payload
		}, {
			call,
			put
		}) {
			const result = yield call(api.getlifeArticle, payload);

			if (result.data) {
				yield put({
					type: "getList",
					data: result.data
				})
			}

		},
		* getLoginHttp({
			payload
		}, {
			call,
			put
		}) {
			const result = yield call(api.getLogin, payload);
			yield put({
				type: "getLogin",
				data: result.data.isLogin
			});
			return result;
			// const isLogin = result.data;
			// sessionStorage.setItem('isLogin', JSON.stringify(isLogin));
		}
	}

}