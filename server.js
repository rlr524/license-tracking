require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cors());

app.listen(process.env.PORT || 3000, () => {
    let port = process.env.PORT || 3000;
    console.log("Server started on port " + port);
});