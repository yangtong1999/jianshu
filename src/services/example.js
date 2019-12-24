import request from '../utils/request';

export function query() {
	return request('/api/users');
}
export function getMenu() { //http://47.100.44.131:4000
	return request('http://127.0.0.1:4000/getMenu'); // /api/menu
}
export function getStudyNotes() {
	return request('http://127.0.0.1:4000/getStudyNotes'); // /api/menu
}
export function getlifeArticle(data) {
	return request('http://127.0.0.1:4000/getLifeArticle', {
		method: "post",
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		},
		body: JSON.stringify({
			"page": data.page,
			"pagesize": data.pagesize
		})
	});
}
export function getLogin(data) {
	return request('http://127.0.0.1:4000/getLogin', {
		method: "post",
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		},
		body: JSON.stringify({
			"username": data.username,
			"password": data.password
		})
	});
}
export function updateLifeArticle(data) {
	return request('http://127.0.0.1:4000/updateLifeArticle', {
		method: "post",
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		},
		body: JSON.stringify({
			"lifeArticleData": data.lifeArticleData,
			"lifeArticleContent": data.lifeArticleContent
		})
	});
}
export function updateStudyNotes(data) {
	console.log(data);
	return request('http://127.0.0.1:4000/updateStudyNotes', {
		method: "post",
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		},
		body: JSON.stringify({
			"studyNotesTitle": data.notesTitle,
			"studyNotesContent": data.notesContent,
			"studyNotesDate": data.notesDate
		})
	});
}