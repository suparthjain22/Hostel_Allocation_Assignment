import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../Pages/home';


function MainApp(props){
  let name=props.userName;
  return(
    <>
    
    <Router>
      <Switch>
        <Route path='/' render={() => <Home userName={name}  />} exact />
      </Switch>
      
    </Router>
    </>
  );

}
export default MainApp;