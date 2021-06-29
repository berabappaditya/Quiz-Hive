import "./App.scss";
import Landing from "./components/Landing";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import QuizPage from "./components/quizview/QuizPage";
import { PrivateRoute } from "./components/utils/PrivateRoute";
import UserResult from "./components/UserResult";
import ScoreBoard from "./components/ScoreBoard";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <PrivateRoute path="/quiz" component={QuizPage} />

          <Route path="/UserResult">
            <UserResult />
          </Route>

          <Route path="/lboard">
            <ScoreBoard />
          </Route>
          <Route path="/qh-admin">
            <AdminPanel />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
