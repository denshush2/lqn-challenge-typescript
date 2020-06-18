import ApolloClient from 'apollo-boost';
import { GRAPHQL_URL } from './variables';

let client: ApolloClient<any> | null = null;

export const ApolloInstance = (): ApolloClient<any> => {
  if (!client) {
    client = new ApolloClient({
      uri: GRAPHQL_URL,
    });
  }
  return client;
};
