import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (parent, __, { dataSources }) => {
      return dataSources.API.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.API.getAuthor(authorId);
    },
  },
};