import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render(__dirname + "/views/home.ejs");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


