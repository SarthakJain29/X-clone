//basic setup for running a GraphQL server using Express and Apollo Server

import express from "express";
import { ApolloServer } from "@apollo/server";
import bodyParser from "body-parser";
import cors from "cors";
import { expressMiddleware } from "@as-integrations/express5";
import { User } from "./user";
import { GraphqlContext } from "../interfaces";
import JWTService from "../services/jwt";

export async function initServer() {
  const app = express(); //new Express app which will handle incoming HTTP requests.
  app.use(bodyParser.json());
  app.use(cors());

  const graphqlServer = new ApolloServer<GraphqlContext>({
    typeDefs: `
            ${User.types}

            type Query{
                 ${User.queries}
            }
        `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
    },
  });

  await graphqlServer.start(); //starting apollo server

  app.use(
    "/graphql",
    express.json(),
    expressMiddleware(graphqlServer, {
      context: async ({ req }) => {
        const authHeader = req.headers.authorization?.split('Bearer ')[1];
        const user = authHeader
            ? JWTService.decodeToken(authHeader)
            : null;

        return { user };
        }
    }));
  //This connects Apollo Server to the Express app under the /graphql route.

  return app;
}
