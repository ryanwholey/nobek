/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questions', {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'question'
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'answer'
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'category'
    },
    value: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0",
      field: 'value'
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    }
  }, {
    tableName: 'questions'
  });
};
