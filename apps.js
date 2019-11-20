const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const query = require("./queries");

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-control-Allow-Headers",
    "Origin, X-Requested-With",
    next()
  );
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/users", query.users);
//get dengan parameter
//app.get("/users/:id", query.xx);
//app.post("/users", query.xx);

app.listen(process.env.PORT || 3000, function() {
  console.log(`App running on port ${port}`);
});
