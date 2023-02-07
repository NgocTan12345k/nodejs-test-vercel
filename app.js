const path = require("path");
const express = require("express");
const roorDir = require("./util/path");
const bodyparser = require("body-parser");
const app = express();
app.set("view engine", "pug");
const adminRoute = require("./Routes/admin");
const shopRoute = require("./Routes/shop");
const adminData = require("./Routes/admin");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(3000);
