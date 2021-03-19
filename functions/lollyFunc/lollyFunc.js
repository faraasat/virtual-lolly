const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb"),
  q = faunadb.query
const dotenv = require("dotenv")
dotenv.config()

const typeDefs = gql`
  type Query {
    getLolly(id: String!): Lolly
  }
  type Mutation {
    sendLolly(
      id: ID!
      top: String!
      mid: String!
      bottom: String!
      recipient: String!
      from: String!
      msg: String!
    ): Lolly!
  }
  type Lolly {
    id: ID!
    refId: String!
    top: String!
    mid: String!
    bottom: String!
    recipient: String!
    from: String!
    msg: String!
  }
`

const resolvers = {
  Query: {
    getLolly: async (_, { id }) => {
      try {
        var adminClient = new faunadb.Client({
          secret: process.env.FAUNADB_SECRET_KEY,
        })
        const result = JSON.stringify(
          await adminClient.query(
            q.Map(
              q.Paginate(q.Match(q.Index("lollyId"), id)),
              q.Lambda("lollyApp", q.Get(q.Var("lollyApp")))
            )
          )
        )

        console.log(result)
        const parsedRes = JSON.parse(result)
        console.log(parsedRes)
        
        if (parsedRes.data.length === 0) {
          return null
        } else {
          return {
            refId: parsedRes.data[0].ref["@ref"].id,
            id: parsedRes.data[0].data.id,
            top: parsedRes.data[0].data.top,
            mid: parsedRes.data[0].data.mid,
            bottom: parsedRes.data[0].data.bottom,
            recipient: parsedRes.data[0].data.recipient,
            from: parsedRes.data[0].data.from,
            msg: parsedRes.data[0].data.msg,
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  Mutation: {
    sendLolly: async (_, { id, top, mid, bottom, recipient, from, msg }) => {
      try {
        var adminClient = new faunadb.Client({
          secret: process.env.FAUNADB_SECRET_KEY,
        })
        const result = JSON.stringify(
          await adminClient.query(
            q.Create(q.Collection("lollyApp"), {
              data: {
                id: id,
                top: top,
                mid: mid,
                bottom: bottom,
                recipient: recipient,
                from: from,
                msg: msg,
              },
            })
          )
        )

        const parsedRes = JSON.parse(result)
        console.log(parsedRes)

        return {
          refId: parsedRes.ref["@ref"].id,
          id: parsedRes.data.id,
          top: parsedRes.data.top,
          mid: parsedRes.data.mid,
          bottom: parsedRes.data.bottom,
          recipient: parsedRes.data.recipient,
          from: parsedRes.data.from,
          msg: parsedRes.data.msg,
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
