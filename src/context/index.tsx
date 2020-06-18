import React from 'react';
import { Routes } from '../routes';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloInstance } from '../config/apollo';
import { AppProvider } from './App';
import { PeopleProvider } from './People';

export const Providers: React.FC = () => (
  <ApolloProvider client={ApolloInstance()}>
    <AppProvider>
      <PeopleProvider>
        <Routes />
      </PeopleProvider>
    </AppProvider>
  </ApolloProvider>
);
