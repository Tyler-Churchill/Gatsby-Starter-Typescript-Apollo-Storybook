import React, { ReactNode } from "react"
import fetch from "isomorphic-fetch"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client"

export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GATSBY_API_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }: { element: ReactNode }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
