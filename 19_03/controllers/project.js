const ProjectDb = require("../models").Project;

const controller = {
  getProjects: async (req, res) => {
    ProjectDb.findAll()
      .then((projects) => {
        res.status(200).send(projects);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Server error" });
      });
  },

  addProject: async (req, res) => {
    ProjectDb.create({
      project_name: req.body.project_name,
      start_date: req.body.start_date,
      planned_end_date: req.body.planned_end_date,
      description: req.body.description,
      project_code: req.body.project_code,
    })
      .then(() => {
        res.status(201).send({ message: "Project added" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Server error" });
      });
  },

  updateProject: async (req, res) => {
    ProjectDb.findByPk(req.body.id)
      .then((project) => {
        if (project) {
          project
            .update({
              project_name: req.body.project_name,
              start_date: req.body.start_date,
              planned_end_date: req.body.planned_end_date,
              description: req.body.description,
              project_code: req.body.project_code,
            })
            .then(() => res.status(200).send({ message: "Project updated" }))
            .catch((err) => {
              console.log(err);
              res.status(500).send({ message: "Server error" });
            });
        } else {
          res.status(404).send({ message: "Project not found" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Server error" });
      });
  },

  deleteProject: async (req, res) => {
    ProjectDb.destroy({
      where: { id: req.body.id },
    })
      .then(() => {
        res.status(200).send({ message: "Project deleted" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Server error" });
      });
  },
};

module.exports = controller;
