import React, {
	Component
} from 'react';
import {
	Drawer,
	Button
} from 'antd';
import style from './index.css';
import {
	connect
} from "dva";
class ArticleDrawer extends Component {
	state = {
		visible: false
	};
	componentDidMount() {
		this.props.dispatch({
			type: "studyNotes/getStudyNotes"
		})
	}
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};
	onClose = () => {
		this.setState({
			visible: false,
		});
	};
	articleChange(content) {
		this.props.dispatch({
			type: "studyNotes/getContent",
			content
		})
	}
	render() {
		const {
			notesList
		} = this.props;
		return (
			<div>
		        <Button onClick={this.showDrawer} className = {style.ArticleButton}>
		         笔记列表
		        </Button>
		          <Drawer
		          title="前端笔记列表"
		          placement="right"
		          closable={false}
		          onClose={this.onClose}
		          visible={this.state.visible}
		        >
		           {
						notesList.map((item)=>{
							return(
								<div  key = {item._id}  onClick = {this.articleChange.bind(this,item.studyNotesContent)}>
                              		<div className = {style.Content}>
		                				<span className = {style.ArticleTitle}>{item.studyNotesTitle}</span>
		                        		<span className = {style.ArticleData}>{item.studyNotesDate}</span>
		                			</div>
		                 			<hr className = {style.ArticleHr}/>
		                 	</div>
					 		)
					 	})
					 }
		        </Drawer>
		      </div>
		)
	}
}
const mapToProps = (state) => {
	return {
		notesList: state.studyNotes.notesList
	}
}
export default connect(mapToProps)(ArticleDrawer);