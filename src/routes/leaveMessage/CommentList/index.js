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
import AddNewComment from "../addNewComment";
@Form.create()
class CommentPage extends Component {
	state = {
		visible: false,
		index: null
	};

	showModal(index) {
		console.log(index);
		this.setState({
			visible: true,
		});
		this.setState({
			index: index
		})
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log(values);
				console.log(this.state.index);
				console.log('Received values of form: ', values);
				this.props.dispatch({
					type: "leaveMessage/addComment",
					data: {
						comment: values,
						index: this.state.index
					}
				})
			}
		});
	};
	handleCancel = e => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		const {
			commentList
		} = this.props;
		return (
			<div className = {style.CommentInput}>
			    <AddNewComment/>
		         {
                    commentList.map((item,index)=>{
                    return(
                    	<div key = {index} className = {style.borderWrapper}>
                    	<div>
                    	<div className = {style.titleWrapper}>
                    	   <div className= {style.ImgWrapper}>
                    	    <span><img className = {style.Img} src = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3396003971,1106716031&fm=26&gp=0.jpg"/></span>
                    		<span className = {style.title}>{item.name}</span>
                    		</div>
                    		<span className = {style.title}><a onClick = {this.showModal.bind(this,index)}>回复</a></span>
                    	</div>
                    		<div className={style.comments}>{item.message}</div>
                    	</div>
                    		{
                    			item.children.map((item,index)=>{
                    				return(
                                      <div key = {index} className = {style.childComment}>
                                      	<span className = {style.childItem}>{item.name}:</span>
                                      	<span className = {style.childItem}>{item.message}</span>
                                      </div>
                    				)
                    			})
                    		}
                    	</div>	
                    	)
                    })
                 } 
                  <Modal
			          title="添加内容"
			          visible={this.state.visible}
			          footer = {null}
			          onCancel={this.handleCancel}
			        >
			          <Form onSubmit={this.handleSubmit1} className="login-form">
					        <Form.Item>
					          {getFieldDecorator('username', {
					            rules: [{ required: true, message: '请输入你的昵称' }],
					          })(
					            <Input
					              placeholder="昵称"
					            />,
					          )}
					        </Form.Item>
					        <Form.Item>
					          {getFieldDecorator('comment', {
					            rules: [{ required: true, message: '请输入你的留言内容' }],
					          })(
					            <Input
					              placeholder="留言内容"
					            />,
					          )}
					        </Form.Item>
					        <Form.Item>
					          <Button type="primary" htmlType="submit" className="login-form-button">
					            添加回复内容
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
export default connect(mapStateToProps)(CommentPage);