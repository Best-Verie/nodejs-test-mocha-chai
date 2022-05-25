let express = require("express");
let app = express();
let bodyParser = require("body-parser");
const cors = require("cors");
let port = 8080;
// let config = require("config"); //we load the db location from the JSON files

const connectToDb = require("./config/dbConfig");
connectToDb();

//db connection

//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));
app.use(cors());

app.get("/", (req, res) => res.json({ message: "Welcome to our Testing!" }));

app.use("/api/v1/token", require("./src/routes/token"));

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
