import * as api from "../services/example";
import {
	message
} from "antd";
export default {
	namespace: "lifeArticle",
	state: {
		lifeArticleList: []
	},
	reducers: {
		updateList(state, action) { //向当前列表添加增加的内容（一个）
			let newlifeArticleList = deepClone(state);
			newlifeArticleList.lifeArticleList.push(action.payload);
			return newlifeArticleList;
		},
		getList(state, action) { //本地更新生活随笔列表数据
			return {
				...state,
				lifeArticleList: action.data
			}
		},
		loadMoreList(state, action) { //向生活随笔中增加新的内容（数组）
			let newlifeArticleList = deepClone(state);
			for (let i = 0; i < action.payload.length; i++) {
				newlifeArticleList.lifeArticleList.push(action.payload[i]);
			}
			console.log(newlifeArticleList)
			return newlifeArticleList;
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
		* loadMoreListHttp({ //加载更多生活随笔，向后台的请求
			payload
		}, {
			call,
			put
		}) {
			const result = yield call(api.getlifeArticle, payload);
			console.log(result.data);
			if (result.data.length != 0) {
				yield put({
					type: "loadMoreList",
					payload: result.data
				})
			} else {
				message.info("没有更多的数据了,不要再点了");
			}

		},
		* updateListHttp({ //添加生活随笔列表
			payload
		}, {
			call,
			put
		}) {
			console.log(payload);
			const result = yield call(api.updateLifeArticle, payload);
			if (result) {
				yield put({
					type: 'updateList',
					payload
				})
			}
		}
	}
}

function deepClone(arr) {
	let _obj = JSON.stringify(arr),
		objClone = JSON.parse(_obj);
	return objClone;
}