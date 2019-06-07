import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import React, { ReactNode } from "react"
import { ApolloProvider } from "react-apollo"

export const client = new ApolloClient({
  uri: process.env.GATSBY_API_URL,
  fetch,
})

export const wrapRootElement = ({ element }: { element: ReactNode }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
