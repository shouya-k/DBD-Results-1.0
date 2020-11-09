const graphql = require('graphql')
const Result = require('../models/result')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = graphql

const ResultType = new GraphQLObjectType({
  name: 'Result',
  fields: () => ({
    id: { type: GraphQLID },
    killerName: { type: GraphQLString },
    killerImage: { type: GraphQLString },
    score: { type: GraphQLString },
    parkImage01: { type: GraphQLString },
    parkImage02: { type: GraphQLString },
    parkImage03: { type: GraphQLString },
    parkImage04: { type: GraphQLString },
    escape: { type: GraphQLString },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    result: {
      type: ResultType,
      args: { id: { type: GraphQLID } },
      resolve(parents, args) {
        return Result.findById(args.id)
      },
    },
  },
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addResult: {
      type: ResultType,
      args: {
        killerName: { type: GraphQLString },
        killerImage: { type: GraphQLString },
        score: { type: GraphQLString },
        parkImage01: { type: GraphQLString },
        parkImage02: { type: GraphQLString },
        parkImage03: { type: GraphQLString },
        parkImage04: { type: GraphQLString },
        escape: { type: GraphQLString },
      },
      resolve(parent, args) {
        const result = new Result({
          killerName: args.killerName,
          killerImage: args.killerImage,
          score: args.score,
          parkImage01: args.parkImage01,
          parkImage02: args.parkImage02,
          parkImage03: args.parkImage03,
          parkImage04: args.parkImage04,
          escape: args.escape,
        })

        return result.save()
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})
