import React, {
	Component
} from 'react';
import Header from "../../components/Header";
import ArticleContent from "./articleContent";
class lifeArticle extends Component {
	render() {
		return (
			<div>
				<Header/>
				<ArticleContent/>
			</div>
		)
	}
}
export default lifeArticle;