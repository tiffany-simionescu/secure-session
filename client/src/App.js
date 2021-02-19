import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Loading from './Loading';
import axios from 'axios';

function App() {
  const [auth, setAuth] = useState(null); 

  useEffect(() => {
    axios.get('/auth/current-session').then(({data}) => {
      setAuth(data);
    })
  }, [])

  if (auth === null) {
    return <Loading />
  }
  if (auth) {
    return <Profile auth={auth} />
  }
  return <Home />
}

export default App;
