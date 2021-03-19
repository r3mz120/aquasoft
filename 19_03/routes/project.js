const express = require("express");
const router = express.Router();
const projectController = require("../controllers").project;

router.post("/add", projectController.addProject);
router.get("/", projectController.getProjects);
router.put("/update", projectController.updateProject);
router.delete("/delete", projectController.deleteProject);

module.exports = router;
