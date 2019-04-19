import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    releaseDate: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: false
    }
});

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;