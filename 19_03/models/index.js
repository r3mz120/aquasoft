const db = require("../config").db;
const Sequelize = require("sequelize");

const ProjectModel = require("./project");
const EmployeeModel = require("./employee");

const Project = ProjectModel(db, Sequelize);
const Employee = EmployeeModel(db, Sequelize);

Project.hasMany(Employee);
Employee.belongsTo(Project, { foreingKey: "Project_id" });

module.exports = {
  Project,
  Employee,
  connection: db,
};
