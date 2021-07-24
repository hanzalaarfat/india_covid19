const express = require("express");
const bodyParser = require("body-parser");
const manageRoute = require("./Routes/router");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", manageRoute);

app.listen(4000);
console.log("server started at 4000");
