module.exports = (sequelize, DataTypes) => {
  return sequelize.define("employee", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hire_date: DataTypes.DATE,
    salary: DataTypes.INTEGER,
    job_title: DataTypes.STRING,
  });
};
