import React, {
	Component
} from 'react';
import style from "./index.css";
import HeadTitle from "../../../../components/HeadTitle";
import {
	connect
} from "dva";
import QueueAnim from 'rc-queue-anim';
class ContentRight extends Component {
	state = {
		show: true
	}
	componentDidMount() {
		this.props.dispatch({
			type: "studyNotes/getStudyNotes"
		})
	}
	render() {
		const {
			notesList
		} = this.props;
		return (
			<div className = {style.ContentWrapper}>
                <HeadTitle title = "学习分享" link = "/studyNotes"/>
                <div className = {style.ContentDiv}>
				{
					notesList.map((item,index) => {
						return (
							<QueueAnim key = {item._id}    className="demo-content"
						          animConfig={[
						            { opacity: [1, 0], translateY: [0, 50] }
						          ]}>
						          {this.state.show ? [
						          	<div key = {item._id}>
                              		<div className = {style.Content}>
		                				<span className = {style.ArticleTitle}>{item.studyNotesTitle}</span>
		                        		<span className = {style.ArticleData}>{item.studyNotesDate}</span>
		                			</div>
		                			</div>
						          ] : null}
						        </QueueAnim>
						        
							)
						})
					}

                </div>   
			</div>
		);
	}
}
const mapToProps = (state) => {
	return {
		notesList: state.studyNotes.notesList
	}
}
export default connect(mapToProps)(ContentRight);