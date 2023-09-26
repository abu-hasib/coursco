import { ApolloServer } from "@apollo/server";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { API } from "./datasource/api";

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "The Old Principles of the Old",
    author: () => {
      return {
        name: "Professor Glasis",
        photo:
          "https://res.cloudinary.com/testuser/image/upload/v1695710574/rfhghqpmzbyyvaa2d3bt.png",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/testuser/image/upload/v1695710123/ip8ehztks37ghsb74hrp.png",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  const { url } = await startStandaloneServer(server, {
    context:async () => {
      const {cache} = server
      return {
        dataSources: {
          API: new API({ cache }),
        },
      }
    }
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
