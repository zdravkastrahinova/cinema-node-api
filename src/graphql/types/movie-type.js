export default `

    type Movie {
        _id: String!,
        title: String!,
        description: String,
        releaseDate: String!,
        imagePath: String
    }

    type Query {
        movie(_id: String!): Movie
        movies: [Movie]
    }

    type Mutation {
        addMovie(title: String!, description: String, releaseDate: String!, imagePath: String): Movie
        editMovie(_id: String!, title: String!, description: String, releaseDate: String!, imagePath: String): Movie
        deleteMovie(_id: String!): Movie
    }

`;