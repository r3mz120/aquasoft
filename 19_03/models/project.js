module.exports = (sequelize, DataTypes) => {
  return sequelize.define("project", {
    project_name: DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
    planned_end_date: DataTypes.DATEONLY,
    description: DataTypes.STRING,
    project_code: DataTypes.STRING,
  });
};
