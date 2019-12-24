import React, {
	Component
} from "react";
import style from "./index.css";

class AddMore extends Component {
	render() {
		return (
			<div className ={style.addMore} onClick = {this.props.onClick}>
              <span> + </span>
			</div>
		)
	}
}
export default AddMore;