const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const multer = require("multer");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use("/public", path.join("express.static(process.cwd())", "/public"));

app.get("/", (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/fileanalyse");

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
