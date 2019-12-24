import React, {
	Component
} from "react";
import style from "./index.css";

class LoadMoreButton extends Component {
	render() {
		return (
			<div className ={style.loadMoreButton} onClick = {this.props.onClick}>加载更多</div>
		)
	}
}
export default LoadMoreButton;