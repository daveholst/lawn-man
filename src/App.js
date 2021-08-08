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

  return (
    <ApolloProvider ApolloProvider client={apolloClient}>
      <CssBaseline>
        <Router>
          <Route
            exact
            path="/"
            component={isAuthenticated ? Dashboard : LandingPage}
          />
          <Route exact path="/dashboard" component={Dashboard} />
        </Router>
      </CssBaseline>
    </ApolloProvider>
  );
};

export default App;
