import React, {
    Component
} from 'react';
import style from "./index.css";
import {
    Timeline
} from 'antd';
import {
    connect
} from "dva";
import LoadMoreButton from "../../../../components/LoadMoreButton";
import QueueAnim from 'rc-queue-anim';
class ContentLeft extends Component {
    state = {
        page: 2,
        pagesize: 5,
        show: true
    }
    componentDidMount() {
        this.props.dispatch({
            type: "lifeArticle/getListHttp",
            payload: {
                page: 1,
                pagesize: 5
            }
        })
    }
    LoadMore() {
        this.props.dispatch({
            type: "lifeArticle/loadMoreListHttp",
            payload: {
                page: this.state.page,
                pagesize: this.state.pagesize
            }
        })
        this.setState({
            page: this.state.page + 1
        })
    }
    render() {
        const {
            lifeArticleList
        } = this.props;
        return (
            <div className = {style.ContentWrapper}>
                 <span className = {style.articleTitle}>我的生活随笔</span>
                 <Timeline mode="alternate">
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
                 <LoadMoreButton onClick = {this.LoadMore.bind(this)}/>
				  </Timeline>
			</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        lifeArticleList: state.lifeArticle.lifeArticleList
    }
}
export default connect(mapStateToProps)(ContentLeft);