import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const myClient = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={myClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);