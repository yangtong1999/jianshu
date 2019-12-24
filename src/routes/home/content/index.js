import React, {
	Component
} from 'react';
import style from "./index.css";
import ContentLeft from "./contentLeft";
import ContentRight from "./contentRight";
import ContentMiddle from "./contentMiddle";
import ContentMidRight from "./contentMidRight";
class Content extends Component {
	render() {
		return (
			<div className = {style.ContentWrapper}>
              <div className = {style.ContentLeft}>
                  <ContentLeft />
                  <ContentMiddle/>
              </div>
              <div className = {style.ContentRight}>
                  <ContentRight />
                  <ContentMidRight />
              </div>
			</div>
		)
	}
}
export default Content;