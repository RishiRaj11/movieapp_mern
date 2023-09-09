import express from "express";
import { getAllMovies } from "../controller/movies_controller.js";
const router = express.Router();

router.get("/movies", getAllMovies);

export default router;
