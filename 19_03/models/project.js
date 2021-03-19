module.exports = (sequelize, DataTypes) => {
  return sequelize.define("project", {
    project_name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    planned_end_date: DataTypes.DATE,
    description: DataTypes.STRING,
    project_code: DataTypes.STRING,
  });
};
