var express = require("express");
var router = express.Router();

const request = require("request");

const bdd = require("../models/bdd");
const projectModel = require("../models/projects");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET projects with API */
router.get("/projects", function(req, res, next) {
  request("https://capsule-exams.herokuapp.com/api/capsule/projects", function(
    error,
    response,
    body
  ) {
    body = JSON.parse(body);
    res.json({ result: true, projects: body });
    console.log("MON BODY------------->", body);
  });
});

/* POST projects - To save a movie */
router.post("/myprojects", function(req, res, next) {
  const newProject = new projectModel({
    name: req.body.name,
    desc: req.body.desc,
    pic_url: req.body.pic_url,
    days_spent: req.body.days_spent,
    stack_front: [req.body.stack_front],
    stack_back: [req.body.stack_back]
  });
  newProject.save(function(error, project) {
    console.log("MA BDD------------->", project);
    res.json({ result: true, project });
  });
});

module.exports = router;
