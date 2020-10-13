import React from 'react';
import Header from "./Header"
import Sidebar from "./Sidebar"
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Chat from "./Chat"

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
          <Chat/>
         
        </Route>
        <Route path="/">
         
        </Route>
          
      </Switch>   
     {/* react-router -> chat screen*/}
     </div>
     </Router>     
    </div>
  );
}

export default App;
