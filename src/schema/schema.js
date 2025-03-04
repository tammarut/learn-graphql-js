const { gql  } = require('apollo-server-express');

const typeDefs = gql`
 type Query {
      name: String!
      age: Int!
      isSingle: Boolean
      numbers: [Int!]!
      location: Location
      users: [User!]!
  }

  type Location {
    state: String!
    city: String!
  }

  type User {
    id: String!
    name: String!
    age: Int!
    location: Location
  }

  type Mutation {
    addUser(name: String!, age: Int!): [User!]!
    updateUser(id: ID!, name: String, age: Int): User!
    deleteUser(id: ID!): User!
  }

  type Subscription{
    update: User!
  }
`

module.exports = typeDefs;
