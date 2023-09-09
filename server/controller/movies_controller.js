import Movies from "../Model/movie_Schema.js";
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movies.find({});
    if (movies.length > 0) {
      return res.status(200).json(movies);
    }
    return res.status(200).json({ message: "movies not found!" });
  } catch (e) {
    return res.status(500).json({ message: "Error!" });
  }
};
