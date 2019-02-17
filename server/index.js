const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Projects = require("./projects");
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();

//MongoDBdata base
const dbRoute = "mongodb://localhost:27017/portafolio";

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);
let db  = mongoose.connection;
db.once("open", () => console.log("connected to the database"));

//check if connnection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.get("/api/getData", (req, res) => {
  Projects.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
