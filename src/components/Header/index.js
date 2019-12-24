import React, {
	Component
} from "react";
import style from "./index.css";
import {
	Menu,
	Row,
	Col
} from 'antd';
import {
	connect
} from "dva";
import Texty from 'rc-texty';
import me from "../../assets/me.jpeg";
import {
	Link
} from 'react-router-dom';
class Header extends Component {
	componentDidMount() {
		this.props.dispatch({
			type: "menu/getMenuHttp"
		})
	}
	render() {
		const {
			menuList
		} = this.props;
		console.log(menuList);
		return (
			<div className = {style.HeaderWrapper}>
			    <Row>
			    <Col span = {14}>
			    <div className = {style.HeaderImgDiv}>
			    	<img className = {style.HeaderImg} src = {me} alt = ""/>
			    	  <div className={style.HeaderText}><Texty>杨彤的博客</Texty></div>
			    </div>
			    </Col>
			    <Col span = {10}>
				<Menu mode = "horizontal">
					{
						menuList.map((item)=>{
							return(
                              <Menu.Item key = {item.key}>
                                 <Link to = {item.key}>
                                 <Texty>{item.title}</Texty>
                                 </Link>
                              </Menu.Item>
							)
						})
					}
				</Menu>
				</Col>
				</Row>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		menuList: state.menu.menuList
	}
}
export default connect(mapStateToProps)(Header);