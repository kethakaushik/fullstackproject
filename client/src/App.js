import React from 'react';
import { Container } from '@material-ui/core';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Route , Redirect} from 'react-router-dom';
import { Switch } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {

  const user = JSON.parse(localStorage.getItem('profile'));
  
  return (
  <GoogleOAuthProvider clientId='27380276673-ecdok5t6u2gdeo560cp0jm9tuomj3a76.apps.googleusercontent.com'>
  <BrowserRouter>
  
    <Container maxWidth="xl">
      <Navbar />
      <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/auth" />)} />
      </Switch>
    </Container>
  </BrowserRouter>
  </GoogleOAuthProvider>
  )
};

export default App;