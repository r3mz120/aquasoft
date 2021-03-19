const express = require("express");
const router = express.Router();
const otherRouter = require("./other");
const projectRouter = require("./project");
const employeeRouter = require("./employee");
router.use("/", otherRouter);
router.use("/projects", projectRouter);
router.use("/employees", employeeRouter);
module.exports = router;
