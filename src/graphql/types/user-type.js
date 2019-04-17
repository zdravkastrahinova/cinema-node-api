export default `

    type User {
        _id: String!,
        name: String!,
        email: String!,
        age: Int!
    }

    type Query {
        user(_id: String!): User
        users: [User]
    }

    type Mutation {
        addUser(name: String!, email: String!, age: Int!): User
        editUser(_id: String!, name: String!, email: String!, age: Int!): User
        deleteUser(_id: String!): User
    }

`;