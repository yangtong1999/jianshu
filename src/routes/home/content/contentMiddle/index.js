import React, {
	Component
} from 'react';
import style from "./index.css";
import {
	Timeline
} from 'antd';
import HeadTitle from "../../../../components/HeadTitle";
import timeLine from "../../../../config/TimeLine.js";
import {
	connect
} from "dva";
import QueueAnim from 'rc-queue-anim';
class ContentMiddle extends Component {
	state = {
		show: true
	}
	componentDidMount() {
		this.props.dispatch({
			type: "home/getListHttp",
			payload: {
				page: 1,
				pagesize: 7
			}
		})
	}
	render() {
		const {
			lifeArticleList
		} = this.props;
		return (
			<div className = {style.ContentWrapper}>
			     <HeadTitle title = "生活随笔" link ="/lifeArticle"/>     
			     <Timeline mode="alternate" className = {style.TimeWrapper}>
			     {
                    lifeArticleList.map((item,index)=>{
                    	return(
                    		<QueueAnim  key={index}>
					         {this.state.show ?[
					         	<div key = {index}>
					         	<Timeline.Item key = {index}>{item.lifeArticleContent}<br/>
					         	{item.lifeArticleData}
					         	</Timeline.Item>
					         	</div> ]: null}
					         </QueueAnim> 
                    	);
                    })
                 }
			     </Timeline>
			</div>
		)
	}
}
const mapToProps = (state) => {
	return {
		lifeArticleList: state.home.lifeArticleList
	}
}
export default connect(mapToProps, null, null, {
	forwardRef: true
})(ContentMiddle);