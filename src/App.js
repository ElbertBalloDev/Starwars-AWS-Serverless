import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  // const [isAuthenticating, setIsAuthenticating] = useState(true);
  const history = useHistory();

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push("/");
  }

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    // setIsAuthenticating(false);
  }

  const handleMyBounties = () => {
    console.log("my bounties has been clicked")
    history.push("/my-bounties");
  }


  return (
    <div className="App">
      <NavBar  authentication={isAuthenticated} handleLogout={handleLogout} myBounties={handleMyBounties}/>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
