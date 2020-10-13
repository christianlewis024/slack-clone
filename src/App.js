import React, {useState} from 'react';
import Header from "./Header"
import Sidebar from "./Sidebar"
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Chat from "./Chat"
import Login from "./Login"

import './App.css';

function App() {
  const [user, setUser] = useState(null)
  return (    
    <div className="app">
      <Router>
        {!user ? (
          <h1>Login Page</h1>
        ) : (
          <>
        
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
     </>
     )}
     </Router>     
    </div>
  );
}

export default App;
