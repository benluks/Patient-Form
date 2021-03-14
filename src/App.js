import './App.css';
import Aufklaerung from './Aufklaerung';
import QuestionForm from './components/QuestionForm';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/Patient-Form'>
            <Aufklaerung />
          </Route>
          <Route exact path='/fragebogen'>
            <QuestionForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
