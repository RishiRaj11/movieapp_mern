import mongoose from "mongoose";

const movie_Schema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  year: {
    type: String,
    trim: true,
  },
  genres: [{ type: String, trim: true }],
  ratings: [{ type: Number }],
  poster: {
    type: String,
    trim: true,
  },
  contentRating: {
    type: String,
    trim: true,
  },
  duration: {
    type: String,
    trim: true,
  },
  releaseDate: {
    type: String,
    trim: true,
  },
  averageRating: {
    type: Number,
  },
  originalTitle: {
    type: String,
    trim: true,
  },
  storyline: {
    type: String,
    trim: true,
  },
  actors: [
    {
      type: String,
      trim: true,
    },
  ],
  imdbRating: {
    type: Number,
  },
  posterurl: {
    type: String,
    trim: true,
  },
});

const movie = mongoose.model("movies", movie_Schema);
export default movie;
