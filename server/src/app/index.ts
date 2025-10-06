//basic setup for running a GraphQL server using Express and Apollo Server

import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';

export async function initServer(){
    const app = express();  //new Express app which will handle incoming HTTP requests.
    const graphqlServer = new ApolloServer({
        typeDefs: `
            type Query{
                sayHello: String
            }
        `,
        resolvers: {
            Query: {
                sayHello: () => "Hello from Graphql server",
            },
        },
    });

    await graphqlServer.start();  //starting apollo server

    app.use("/graphql", express.json(), expressMiddleware(graphqlServer));
    //This connects Apollo Server to the Express app under the /graphql route.

    return app;
}