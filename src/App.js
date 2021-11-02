import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Landing from './components/Landing';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Landing />
        </Route>
        <Route path='/search' exact>
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
