import React from 'react';
import Header from "./Header"
import Sidebar from "./Sidebar"
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom"

import './App.css';

function App() {
  return (    
    <div className="app">
      <Router>
     <Header/>
     <div className="app__body">
      <Sidebar/>
      <Switch>
        <Route path="/room/:roomId">
          <h1> You're in my room</h1>
        </Route>
        <Route path="/">
          <h1>Welcome</h1>
        </Route>
          
      </Switch>   
     {/* react-router -> chat screen*/}
     </div>
     </Router>     
    </div>
  );
}

export default App;
