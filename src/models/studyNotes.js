import * as api from "../services/example";
export default {
	namespace: "studyNotes",
	state: {
		notesList: [],
		studyNotesContent: ""
	},
	reducers: {
		getStudyNotesData(state, action) {
			return {
				...state,
				notesList: action.data
			}
		},
		getContent(state, action) {
			return {
				...state,
				studyNotesContent: action.content
			}
		}
	},
	effects: {
		* getStudyNotes({ //获取前端笔记的列表，向后台的请求
			payload
		}, {
			call,
			put
		}) {
			const result = yield call(api.getStudyNotes);
			console.log(result);
			if (result.data) {
				yield put({
					type: "getStudyNotesData",
					data: result.data
				})
			}

		},
		* updateStudyNotes({ //添加前端笔记的列表
			payload
		}, {
			call,
			put
		}) {
			console.log(payload);
			const result = yield call(api.updateStudyNotes, payload);

		}
	}
}