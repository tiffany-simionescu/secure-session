import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Loading from './Loading';


function App() {
  const [auth, setAuth] = useState(null); 

  // if (auth === false) {
  if (auth === null) {
    return <Loading />
  }
  if (auth) {
    return <Profile />
  }
  return <Home />
}

export default App;
