import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

// import apolloClient
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Auth from './utils/authUtils';
import CreateProperty from './components/CreateProperty';
import SignUpDialog from './components/SignUpDialog';
import LoginDialog from './components/LoginDialog';
import NavBar from './components/NavBar';
// build graphQl endpoint
const httpLink = createHttpLink({
  // uri: '/graphql',
  uri: 'https://lawn-man-server.holst.club/graphql',
  // uri: 'https://lawn-man-server.web:5000/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create apollo client
const apolloClient = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (Auth.loggedIn()) setAuthenticated(true);
  }, [isAuthenticated]);
  // modal handlers
  // declare a new state variable for modal open
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  // function to handle signup modal open
  const handleSignUpOpen = () => {
    setSignUpOpen(true);
  };
  const handleSignUpClose = () => {
    setSignUpOpen(false);
  };
  // function to handle login modal open
  const handleLoginOpen = () => {
    setLoginOpen(true);
  };
  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  return (
    <ApolloProvider ApolloProvider client={apolloClient}>
      <CssBaseline>
        <NavBar loginOnClick={handleLoginOpen} />

        <Router>
          <Route
            exact
            path="/"
            render={() =>
              isAuthenticated ? (
                <Dashboard />
              ) : (
                <LandingPage
                  handleLoginOpen={handleLoginOpen}
                  handleSignUpOpen={handleSignUpOpen}
                />
              )
            }
          />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/create-property" component={CreateProperty} />
        </Router>
        {/* try adding in modals here. */}
        <SignUpDialog open={signUpOpen} handleClose={handleSignUpClose} />
        <LoginDialog open={loginOpen} handleClose={handleLoginClose} />
      </CssBaseline>
    </ApolloProvider>
  );
};

export default App;
