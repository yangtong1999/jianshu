import React, {
	Component
} from 'react';
import style from "./index.css";
import wechat from "../../../../assets/wechat.jpeg";
import QueueAnim from 'rc-queue-anim';
class ContentMidRight extends Component {
	state = {
		show: true
	}
	render() {
		return (
			<QueueAnim className="demo-content"
          key="demo"
          type={['right', 'left']}
          ease={['easeOutQuart', 'easeInOutQuart']}>
          {this.state.show ? [
           <div key = "" className = {style.ContentWrapper}>
			    <div className = {style.wechatContent}>
			      <span>可以扫码加我微信哈哈</span>
			      <img className = {style.wechatImg} src ={wechat} alt = ""/>
			    </div>
			</div>
          ] : null}
        </QueueAnim>
		)
	}
}
export default ContentMidRight;