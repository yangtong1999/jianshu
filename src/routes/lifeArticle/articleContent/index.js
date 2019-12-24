import React, {
	Component
} from 'react';
import style from "./index.css";
import ContentLeft from "./contentLeft";
import AddMore from "../../../components/AddMore";
import {
	withRouter
} from 'react-router-dom';
class ArticleContent extends Component {
	addMore() {
		this.props.history.push('/addMoreLifeArticle');
	}
	render() {
		return (
			<div className = {style.ContentWrapper}>
              <div className = {style.ContentLeft}>
                  <ContentLeft/>
                  <AddMore className = {style.AddMore} onClick = {this.addMore.bind(this)}/>
              </div>
		  </div>
		)
	}
}
export default withRouter(ArticleContent);