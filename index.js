import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = ;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.listen(port, () => {
  console.log(`Portfolio app running at http://localhost:${port}`);
});
