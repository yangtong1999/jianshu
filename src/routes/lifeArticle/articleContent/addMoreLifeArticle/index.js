import React, {
	Component
} from 'react';
import style from "./index.css";
import {
	DatePicker,
	Input,
	Button,
	Form,
	message
} from 'antd';
import {
	connect
} from "dva";
import Header from "../../../../components/Header";
@Form.create()
class AddMoreLifeArticle extends Component {
	onChange(date, dateString) {
		console.log(date, dateString);
	}
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, fieldsValue) => {
			if (err) {
				message.error('提交失败，请填写完整随笔');
				return;
			}
			const values = {
				...fieldsValue,
				'lifeArticleData': fieldsValue['lifeArticleData'].format('YYYY-MM-DD')
			};
			this.props.dispatch({
				type: "lifeArticle/updateListHttp",
				payload: values
			})
			message.success("提交生活随笔成功");
			this.props.history.push("/lifeArticle");
		});
	};
	render() {
		const {
			TextArea
		} = Input;
		const config = {
			rules: [{
				type: 'object',
				required: true,
				message: '请选择日期呀!'
			}]
		}
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<div className = {style.ContentWrapper}>
              <Header/>
              <div className = {style.AddMoreContent}>
		        <span className = {style.AddMoreContentTitle}>生活随笔添加</span>
		        <Form onSubmit={this.handleSubmit}>
                <div className = {style.DataContent}>
                <Form.Item>
                <span>请选择日期</span>
		          {getFieldDecorator('lifeArticleData', config)(<DatePicker onChange={this.onChange} />)}
		        </Form.Item>
              	</div>
              	<div className = {style.ArticleContent}>
	              	<Form.Item>
			          {getFieldDecorator('lifeArticleContent',{
			            rules: [
			              {
			                required: true,
			                min:5,
			                message: '最少五个字符呀，哈哈哈哈',
			              }
			            ]
						})(<TextArea rows={6} placeholder = "随笔内容"/>)	}
			        </Form.Item>
              	 </div>
              	 <Button className = {style.Button} htmlType = "submit">提交随笔</Button>
              	</Form>
              </div>
		  </div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		lifeArticleList: state.lifeArticle.lifeArticleList
	}
}
export default connect(mapStateToProps)(AddMoreLifeArticle);