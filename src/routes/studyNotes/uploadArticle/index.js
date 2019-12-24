import React, {
	Component
} from 'react';
import style from "./index.css";
import Header from "../../../components/Header";
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import {
	Input,
	Button,
	message
} from "antd";
import {
	connect
} from "dva";
const MOCK_DATA = "欢迎使用markdown进行编辑你的文章"
class UploadArticle extends Component {
	mdParser = null;
	constructor(props) {
		super(props);
		this.mdParser = new MarkdownIt();
		this.state = {
			notesTitle: "",
			notesContent: ""
		};
	};
	handleNotesTitle(e) {
		this.setState({
			notesTitle: e.target.value
		});
	};
	handleEditorChange({
		html,
		text
	}) {
		this.setState({
			notesContent: String(text)
		});
	};
	handleNotes() {
		if (this.state.notesTitle == "" || this.state.notesContent == "") {
			message.info("请检查你的笔记标题或内容是否为空");
		} else {
			let data = new Date();
			let string = data.toLocaleDateString(data);
			this.props.dispatch({
				type: "studyNotes/updateStudyNotes",
				payload: {
					notesTitle: this.state.notesTitle,
					notesContent: this.state.notesContent,
					notesDate: string
				}
			});
		}
	};
	render() {
		return (
			<div>
			<Header/>
			<div className = {style.commitNote}>
				<Input addonBefore = "笔记标题" onChange = {this.handleNotesTitle.bind(this)}/>
				<Button onClick = {this.handleNotes.bind(this)}>提交笔记</Button>
			</div>
			<div className={style.Editor} style={{height: 500+"px"}}>
		        <MdEditor
		          value={MOCK_DATA}
		          renderHTML={(text) => this.mdParser.render(text)}
		          onChange={this.handleEditorChange.bind(this)} 
		        />                
		      </div>
        </div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		notesList: state.studyNotes.notesList
	}
}
export default connect(mapStateToProps)(UploadArticle);