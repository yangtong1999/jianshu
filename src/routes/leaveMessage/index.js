import React, {
	Component
} from "react";
import Header from "../../components/Header";
import style from "./index.css";
import CommentPage from "./CommentList";
class LeaveMessage extends Component {
	render() {
		return (
			<div>
			  <Header/>
		<span className = {style.LeaveMessageTitle}>我的留言板</span>
			  <CommentPage/>
			</div>
		)
	}
}
export default LeaveMessage;