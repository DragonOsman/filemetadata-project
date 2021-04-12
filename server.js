const express = require("express");
const cors = require("cors");
require("dotenv").config();
const multer = require("multer");
const bodyParser = require("body-parser");

const upload = multer();

const app = express();

app.use(cors());
app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/fileanalyse", upload.single("upfile"), (req, res, next) => {
  console.log(req.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
