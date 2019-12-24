import React, {
	Component
} from 'react';
import style from './index.css';
import {
	Link
} from 'react-router-dom';
class HeadTitle extends Component {
	render() {
		const {
			title,
			link
		} = this.props;
		return (
			<div className = {style.photoWallTitle}>
                   <span>{title}</span>
                   <Link to = {link}>
                   <span className = {style.HeadTitleLink}>查看更多</span>
                   </Link>
            </div>
		)
	}
}
export default HeadTitle;