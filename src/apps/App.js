import React, {Component} from 'react';
import MainApp from './Mainapp'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./App.css"
firebase.initializeApp({
  apiKey: "AIzaSyCcWg6c3hWs7kbw640ThU9PCOdxUx5E9dQ",
  authDomain: "hostel-sjain.firebaseapp.com",
})

class App extends Component{
  state={isSignedIn:false}

  uiConfig ={
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount=()=>{
    
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn : !!user })})
      firebase.auth().signOut();
  }
  

  render(){
  return(
    <>
    {this.state.isSignedIn ? (
    <>
    <MainApp userName={firebase.auth().currentUser.displayName}/>
    
    </>
    ) :
      <>
      <div className="header">
      <h3>Hostel Allocation</h3>
      <p>Please sign in:</p>
      </div>
      <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
      </>
    } 
    </>
  );
  }

}
export default App;