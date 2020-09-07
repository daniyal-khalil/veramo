import { ApolloServer } from 'apollo-server'
import program from 'commander'
import { createSchema, supportedMethods } from 'daf-graphql'
import { agent } from './setup'

program
  .command('graphql')
  .description('GraphQL server')
  .option('-p, --port <port>', 'Port')
  .option('-i, --interval <seconds>', 'Poll for new messages with interval of <seconds>')
  .action(async (cmd) => {
    const { typeDefs, resolvers } = createSchema({
      enabledMethods: Object.keys(supportedMethods),
    })

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: async () => ({ agent: await agent }),
      introspection: true,
    })

    const info = await server.listen({ port: cmd.port })
    console.log(`🚀  Server ready at ${info.url}`)
  })
