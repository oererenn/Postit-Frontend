import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage/homePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitPostPage from './components/Posts/submitPostPage'
import LoginPage from './components/Login&Register/loginPage'
import RegisterPage from './components/Login&Register/registerPage'
import PostPage from './components/Posts/postPage'


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path = "/" exact component={HomePage}></Route>
        <Route path = "/home" component={HomePage}></Route>
        <Route path = "/submit" component={SubmitPostPage}></Route>
        <Route path = "/login" component={LoginPage}></Route>
        <Route path = "/register" component={RegisterPage}></Route>
        <Route path = "/post/:postId" component={PostPage}></Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
