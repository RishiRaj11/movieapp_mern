import express from "express";
import cors from "cors";
import { connection } from "./dbconnection.js";
import router from "./View/route.js";
import { bulkInsert } from "./default.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);
const PORT = 5000;
const db_url =
  "mongodb+srv://rraj58361:12345@cluster0.5qwwjc1.mongodb.net/?retryWrites=true&w=majority";
await connection(db_url);
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

//await bulkInsert();
