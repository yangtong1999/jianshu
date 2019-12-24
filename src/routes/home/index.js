import React, {
	Component
} from 'react';
import Header from "../../components/Header";
import Content from "./content";
import style from "./index.css";
import Footer from "../../components/Footer";
class Home extends Component {
	render() {
		console.log(sessionStorage.getItem('isLogin'));
		return (
			<div className = {style.Wrapper}>
				<Header/>
				<Content/>
				<Footer/>
			</div>
		)
	}
}
export default Home;