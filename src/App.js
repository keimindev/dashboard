import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route} from 'react-router-dom';
import Home from './components/Home';
import AddPerson from './components/Add';
import './App.css';

function App() {
  return (
    <>
    <Router>
    <div className="App">
     <div className="content">
      <Switch>
      <Route path ="/add" exact><AddPerson/></Route>
      {/* exact 속성은 완벽히 똑같아야지 실행이 된다 */}
      <Route path ="/board" exact><Home/></Route>
      </Switch>
     </div>
    </div>
    </Router>

    </>
  );
}

export default App;
