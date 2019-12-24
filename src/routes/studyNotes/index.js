import React, {
	Component
} from 'react';
import Header from "../../components/Header";
import {
	Card,
	Form
} from 'antd';
import style from './index.css';
import AddMore from "../../components/AddMore";
import ReactMarkdown from 'react-markdown';
import codeBlock from '../../config/codeBlock.js';
import AppMarkdown from '../../config/CSS.md';
import ArticleDrawer from "./ArticleDrawer";
import 'github-markdown-css';
import {
	connect
} from "dva";
@Form.create()
class StudyNotes extends Component {
	state = {
		markdown: ''
	};
	componentWillMount() {
		fetch(AppMarkdown)
			.then(res => res.text())
			.then(text => this.setState({
				markdown: text
			}));
	}
	addMore() {
		this.props.history.push('/uploadArticle');
	}
	render() {
		const {
			studyNotesContent
		} = this.props;
		const {
			markdown
		} = this.state;
		return (
			<div>
				<Header/>
				<ArticleDrawer/>
				<Card bordered={false} className = {style.markdownWrapper}>
		              <ReactMarkdown
				        className="markdown-body"
			            source={studyNotesContent?studyNotesContent:markdown}
			            escapeHtml={false}
			            renderers={{
			              code: codeBlock
			            }}
			          />
	        	</Card>
	        	<AddMore onClick = {this.addMore.bind(this)}/>
		  </div>
		);
	}
}
const mapToProps = (state) => {
	return {
		studyNotesContent: state.studyNotes.studyNotesContent
	}
}
export default connect(mapToProps)(StudyNotes);