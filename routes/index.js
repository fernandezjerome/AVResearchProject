var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/", function (req, res) {
    res.render("audio");
});

router.get("/", function (req, res) {
    res.render("video");
});

module.exports = router;
