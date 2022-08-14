import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
import App from './App';

const clientUri = () => {
  return (!process.env.NODE_ENV  || process.env.NODE_ENV === "development")
    ? process.env.REACT_APP_DEVELOPMENT_URI
    : process.env.REACT_APP_PRODUCTION_URI
}

const client = new ApolloClient({
  uri: clientUri(),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
