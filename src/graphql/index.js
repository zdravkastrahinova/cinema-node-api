import {makeExecutableSchema} from "graphql-tools";
import {mergeResolvers, mergeTypes} from "merge-graphql-schemas";

import Movie from "./types/movie-type"
import User from "./types/user-type";
import MovieResolver from "./resolvers/movie-resolver";
import UserResolver from "./resolvers/user-resolver";

const typeDefs = mergeTypes([Movie, User]);
const resolvers = mergeResolvers([MovieResolver, UserResolver]);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;