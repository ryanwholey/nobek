/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sequelizeMeta', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: 'name'
    }
  }, {
    tableName: 'SequelizeMeta'
  });
};
