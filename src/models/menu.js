import * as api from "../services/example";
export default {
	namespace: "menu",
	state: {
		menuList: []
	},
	reducers: {
		getMenu(state, action) {
			return {
				...state,
				menuList: action.data
			}
		},

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