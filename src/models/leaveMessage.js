import * as api from "../services/example";
export default {
	namespace: "leaveMessage",
	state: {
		commentList: [{
			name: "杨彤",
			message: "杨彤的博客写的真棒",
			children: [{
				name: "杨彤1",
				message: "不好"
			}, {
				name: "杨彤2",
				message: "hahahahaha"
			}]
		}, {
			name: "游客1",
			message: "真好啊",
			children: [{
				name: "游客2",
				message: "不好"
			}]
		}]
	},
	reducers: {
		addComment(state, action) {
			const i = action.data.index;
			let newlifeArticleList = deepClone(state);
			const data = {
				name: action.data.comment.username,
				message: action.data.comment.comment
			}
			newlifeArticleList.commentList[i].children.push(data);
			console.log(newlifeArticleList);
			return newlifeArticleList;
		},
		addCommentParent(state, action) {
			let newlifeArticleList = deepClone(state);
			const data = {
				name: action.data.name,
				message: action.data.comments,
				children: []
			}
			newlifeArticleList.commentList.push(data);
			return newlifeArticleList;
		}
	},
	effects: {
		* getMenuHttp({
			payload
		}, {
			call,
			put
		}) {
			const result = yield call(api.getMenu);
			if (result) {
				yield put({
					type: "getMenu",
					data: result.data
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