const path = require("path");
const express = require("express");
const router = express.Router();
const roorDir = require("../util/path");

const products = [];

// admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", { pageTitle: "add-product" });
});

// admin/product => POST

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
