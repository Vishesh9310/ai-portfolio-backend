const fs = require("fs");
const path = require("path");

exports.getTopProjects = (req, res) => {
  const data = fs.readFileSync(
    path.join(process.cwd(), "data/topprojects.json"),
    "utf-8"
  );
  res.json(JSON.parse(data));
};

exports.getDataProjects = (req, res) => {
  const data = fs.readFileSync(
    path.join(process.cwd(), "data/dataprojects.json"),
    "utf-8"
  );
  res.json(JSON.parse(data));
};

exports.getAverageProjects = (req, res) => {
  const data = fs.readFileSync(
    path.join(process.cwd(), "data/averageprojects.json"),
    "utf-8"
  );
  res.json(JSON.parse(data));
};

exports.getFeaturedProjects = (req, res) => {
  const data = fs.readFileSync(
    path.join(process.cwd(), "data/featuredproject.json"),
    "utf-8"
  );
  res.json(JSON.parse(data));
};