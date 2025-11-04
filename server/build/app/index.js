"use strict";
//basic setup for running a GraphQL server using Express and Apollo Server
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = initServer;
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express5_1 = require("@as-integrations/express5");
const user_1 = require("./user");
const jwt_1 = __importDefault(require("../services/jwt"));
function initServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)(); //new Express app which will handle incoming HTTP requests.
        app.use(body_parser_1.default.json());
        app.use((0, cors_1.default)());
        const graphqlServer = new server_1.ApolloServer({
            typeDefs: `
            ${user_1.User.types}

            type Query{
                 ${user_1.User.queries}
            }
        `,
            resolvers: {
                Query: Object.assign({}, user_1.User.resolvers.queries),
            },
        });
        yield graphqlServer.start(); //starting apollo server
        app.use("/graphql", express_1.default.json(), (0, express5_1.expressMiddleware)(graphqlServer, {
            context: (_a) => __awaiter(this, [_a], void 0, function* ({ req }) {
                var _b;
                const authHeader = (_b = req.headers.authorization) === null || _b === void 0 ? void 0 : _b.split('Bearer ')[1];
                const user = authHeader
                    ? jwt_1.default.decodeToken(authHeader)
                    : null;
                return { user };
            })
        }));
        //This connects Apollo Server to the Express app under the /graphql route.
        return app;
    });
}
