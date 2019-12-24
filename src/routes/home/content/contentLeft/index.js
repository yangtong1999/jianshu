import React, {
	Component
} from 'react';
import style from "./index.css";
import photowall1 from "../../../../config/photowall1.jpeg";
import photowall2 from "../../../../config/photowall2.jpeg";
import HeadTitle from "../../../../components/HeadTitle";
import {
	Carousel
} from 'antd';
import QueueAnim from 'rc-queue-anim';
class ContentLeft extends Component {
	render() {
		return (
			<div className = {style.ContentWrapper}>
                    <HeadTitle title = "我可！！！！" link = "/"/>
                    <div className = {style.photoWallContent}>
		               <img alt = "" className = {style.photoWall} src = {photowall1}/>
                        <img alt = "" className = {style.photoWall} src = {photowall2}/>
                    </div>
				</div>
		)
	}
}
export default ContentLeft;