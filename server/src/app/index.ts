//basic setup for running a GraphQL server using Express and Apollo Server

import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import { User } from "./user"


export async function initServer(){
    const app = express();  //new Express app which will handle incoming HTTP requests.
    const graphqlServer = new ApolloServer({
        typeDefs: `
            ${User.types}

            type Query{
                 ${User.queries}
            }
        `,
        resolvers: {
            Query: {
                ...User.resolvers.queries
            },
        },
    });

    await graphqlServer.start();  //starting apollo server

    app.use("/graphql", express.json(), expressMiddleware(graphqlServer));
    //This connects Apollo Server to the Express app under the /graphql route.

    return app;
}