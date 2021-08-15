import React, {useState, useEffect } from 'react';
import { 
  HashRouter as Router, 
  Switch,
  Route} from 'react-router-dom';
import Home from './components/Home';
import AddPerson from './components/Add';
import Auth from './components/Auth';
import './App.css';
import { authService } from './firebase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn]  = useState(false);

  useEffect (() => {
    authService.onAuthStateChanged( (user) => {
      if(user){
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
      setInit(true);
    })
  }, [])

  return (
    <>
    <Router>
    <div className="App">
     <div className="content">
      <Switch>
        {init ?  (     
          <>   
          { isLoggedIn ? (
          <>
            <Route path ="/add" exact><AddPerson/></Route>
            <Route path ="/" exact><Home/></Route>
          </>
        ): (
          <>
           <Route path ="/" exact><Auth/></Route>
          </>
        )}
        </>
        ):(
          <>
          <p className="loading">Loading...</p>
          </>
        ) }


          
      </Switch>
     </div>
    </div>
    </Router>
    </>
  );
}

export default App;
