import express from "express";
import { Dbconnection } from "./src/core/connection/connection.js";
import router from "./src/routes/routes.js";
const db = new Dbconnection();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
db.databaseConnect();
const port = process.env.PORT;

app.listen(port, () => {
  console.log("server is running at ", port);
});
