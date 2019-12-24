import React, {
	Component
} from 'react';
import style from './index.css';
import Header from "../../components/Header";
import Me from "../../config/me.jpeg";
class AboutMe extends Component {
	render() {
		return (
			<div>
                 <Header/>
                 <div className = {style.AboutMeWrapper}>
                     <span className = {style.AboutMeTitle}>关于我</span>
                     <img src ={Me} className = {style.MePhoto}/>
		             <p className = {style.AboutMe}>杨彤 女 重庆邮电大学 2021届电子商务专业 希望一名出色的前端工程师</p>
                     <h2>我的技能</h2>
                     <ul>
                     	<li>掌握Html5、CSS3、JavaScript基础以及ES6的基本用法</li>
                     	<li>能够熟练使用React及其相关技术、了解Vue</li>
                     	<li>能够使用Ajax与后台进行交互，熟练使用Axios，了解WebSocket、FetchAPI</li>
                     	<li>掌握常用布局，能够使用stylus、Less、Scss编辑CSS、了解ElementUI、Bootstrap、antd等</li>
                     	<li>能够使用Git、Webpack、Google开发者工具进行前端开发</li>
                     	<li>了解HTTP协议以及计算机相关网络知识、了解NodeJs</li>
                     </ul>
                 </div>
            </div>
		)
	}
}
export default AboutMe;