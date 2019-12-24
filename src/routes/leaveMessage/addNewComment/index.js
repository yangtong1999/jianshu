import React, {
	Component
} from "react";
import style from "./index.css";
import {
	connect
} from "dva";
import {
	Button,
	Modal,
	Form,
	Icon,
	Input,
	message
} from "antd";
@Form.create()
class AddNewComment extends Component {
	state = {
		visible1: false
	};
	showModal1 = () => {
		this.setState({
			visible1: true
		});
	};
	handleSubmit1 = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				this.props.dispatch({
					type: "leaveMessage/addCommentParent",
					data: values
				})
			}
		});
	};
	handleCancel1 = e => {
		console.log(e);
		this.setState({
			visible1: false,
		});
	};
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<div>
			       <a onClick = {this.showModal1}>添加新留言</a>
			        <Modal
			          title="添加新留言"
			          visible={this.state.visible1}
			          footer = {null}
			          onCancel={this.handleCancel1}
			        >
			          <Form onSubmit={this.handleSubmit1} className="login-form">
					        <Form.Item>
					          {getFieldDecorator('name', {
					            rules: [{ required: true, message: '请输入你的昵称' }],
					          })(
					            <Input
					              placeholder="昵称"
					            />,
					          )}
					        </Form.Item>
					        <Form.Item>
					          {getFieldDecorator('comments', {
					            rules: [{ required: true, message: '请输入你的留言内容' }],
					          })(
					            <Input
					              placeholder="留言内容"
					            />,
					          )}
					        </Form.Item>
					        <Form.Item>
					          <Button type="primary" htmlType="submit" className="login-form-button">
					            添加留言内容
					          </Button>
					        </Form.Item>
					      </Form>
			        </Modal>  
			     </div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		commentList: state.leaveMessage.commentList
	}
}
export default connect(mapStateToProps)(AddNewComment);