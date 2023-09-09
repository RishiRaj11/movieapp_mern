import { data } from "./data.js";
import Movies from "./Model/movie_Schema.js";
export const bulkInsert = async () => {
  try {
    await Movies.insertMany(data);
    console.log("Bulk movies inserted");
  } catch (e) {
    console.log("while bulk inserting Error", e);
  }
};
