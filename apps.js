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

app.get("/panti", query.panti);
app.get("/panti_owner", query.panti_owner);
app.get("/panti/:id", query.kategori_panti);
app.post("/users", query.users);
app.post("/login_user", query.login_user);
//get dengan parameter
//app.get("/users/:id", query.xx);
//app.post("/users", query.xx);

app.listen(process.env.PORT || 3000, function() {
  console.log(`App running on port ${port}`);
});
