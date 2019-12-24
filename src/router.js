import React from 'react';
import {
    Router,
    Route,
    Switch,
    Redirect
} from 'dva/router';
import Home from './routes/home';
import LifeArticle from './routes/lifeArticle';
import AddMoreLifeArticle from './routes/lifeArticle/articleContent/addMoreLifeArticle';
import StudyNotes from './routes/studyNotes';
import AboutMe from './routes/aboutMe';
import Login from './routes/login';
import LeaveMessage from './routes/leaveMessage';
import UploadArticle from './routes/studyNotes/uploadArticle';
import {
    GlobalStyled
} from './style.js';

function RouterConfig({
    history
}) {
    return (
        <div>
	<GlobalStyled />
	<Router history={history}>
      <Switch>
      <Route path="/" exact  component={Login} />
        <Route path="/home" component={Home}  />
        <Route path="/lifeArticle" component={LifeArticle}  />
        <Route path="/addMoreLifeArticle" component={AddMoreLifeArticle} />
        <Route path="/studyNotes" component={StudyNotes}  />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/leaveMessage" component={LeaveMessage} />
        <Route path="/uploadArticle" component={UploadArticle} />
        <Redirect to = "/"/>
      </Switch>
    </Router>
    </div>
    );
}
export default RouterConfig;