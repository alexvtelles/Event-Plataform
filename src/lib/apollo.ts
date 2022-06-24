import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6ajd10t1t01xm4ok23s1e/master',
  cache: new InMemoryCache()
})