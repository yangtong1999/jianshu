import React, {
	Component
} from 'react';
import style from "./index.css";
import {
	connect
} from "dva";
import {
	Form,
	Icon,
	Input,
	Button,
	Checkbox,
	message
} from 'antd';
@Form.create()
class Login extends Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				this.props.dispatch({
					type: "home/getLoginHttp",
					payload: values
				}).then((result) => {
					if (result.data.isLogin) {
						this.props.history.push("/home");
					} else {
						message.info("登陆失败啊");
					}
				})
			}
		});
	};
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<div className = {style.LoginWrapper}>
				<div className = {style.Login}>
		         <span className = {style.LoginTitle}>我的博客-登陆</span>
		         <hr className = {style.hr}/>
                   <Form onSubmit={this.handleSubmit} className={style.login_form}>
                  <Form.Item className = {style.LoginInput}>
		          {getFieldDecorator('username', {
		            rules: [{ required: true, message: '请输入用户名呀!' }],
		          })(
		            <Input
		              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
		              placeholder="Username"
		            />,
		          )}
		        </Form.Item>
		        <Form.Item className = {style.LoginInput}>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: '请输入杨彤同学的密码！' }],
		          })(
		            <Input
		              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
		              type="password"
		              placeholder="Password"
		            />,
		          )}
		        </Form.Item>
		        <Form.Item className = {style.LoginInput}>
		        	<Button type="dashed" htmlType="submit" className={style.login_form_button}>
                      登陆
                  </Button>
                  </Form.Item>
		      </Form>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		isLogin: state.home.isLogin
	}
}
export default connect(mapStateToProps)(Login);