const express = require("express");
const router = express.Router();
const employeeController = require("../controllers").employee;

router.post("/add", employeeController.addEmployee);
router.get("/", employeeController.getEmployees);
router.put("/update", employeeController.updateEmployee);
router.delete("/delete", employeeController.deleteEmployee);

module.exports = router;
