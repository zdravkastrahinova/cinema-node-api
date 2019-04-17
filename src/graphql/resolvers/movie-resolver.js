import Movie from '../../models/Movie';

const MovieResolver = {
    Query: {
        movie: (root, args) => {
            return new Promise((resolve, reject) => {
                Movie.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        movies: () => {
            return new Promise((resolve, reject) => {
                Movie.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
    Mutation: {
        addMovie: (root, {title, description, releaseDate, imagePath}) => {
            const movie = new Movie({title, description, releaseDate, imagePath});

            return new Promise((resolve, reject) => {
                movie.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editMovie: (root, {_id, title, description, releaseDate, imagePath}) => {
            return new Promise((resolve, reject) => {
                Movie.findOneAndUpdate({_id}, {$set: {title, description, releaseDate, imagePath}})
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        deleteMovie: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Movie.findOneAndRemove({_id}).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};

export default MovieResolver;