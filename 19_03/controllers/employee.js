const EmployeeDb = require("../models").Employee;

const controller = {
  getEmployees: async (req, res) => {
    EmployeeDb.findAll()
      .then((employees) => {
        res.status(200).send(employees);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Server error");
      });
  },

  addEmployee: async (req, res) => {
    EmployeeDb.create({
      name: req.body.name,
      email: req.body.email,
      hire_date: req.body.hire_date,
      salary: req.body.salary,
      job_title: req.body.job_title,
      projectId: req.body.project_id,
    })
      .then(() => {
        res.status(201).send("Employee added");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Server error");
      });
  },

  updateEmployee: async (req, res) => {
    EmployeeDb.findByPk(req.body.id)
      .then((employee) => {
        if (employee) {
          employee
            .update({
              name: req.body.name,
              email: req.body.email,
              hire_date: req.body.hire_date,
              salary: req.body.salary,
              job_title: req.body.job_title,
              projectId: req.body.project_id,
            })
            .then(() => res.status(200).send("Employee updated"))
            .catch((err) => {
              console.log(err);
              res.status(500).send("Server error");
            });
        } else {
          res.status(404).send("Employee not found");
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Server error");
      });
  },

  deleteEmployee: async (req, res) => {
    EmployeeDb.destroy({
      where: { id: req.body.id },
    })
      .then(() => {
        res.status(200).send("Employee deleted");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Server error");
      });
  },
};

module.exports = controller;
