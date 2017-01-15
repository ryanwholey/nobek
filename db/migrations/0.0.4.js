 module.exports = {
    up: function(db, Sequelize) {
        return db.addColumn('users', 'group', {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'general'
        });
    },

    down: function(db, Sequelize) {
        return db.removeColumn('users', 'group');
    }
}

/*
    createTable(tableName, attributes, options)
    dropTable(tableName, options)
    dropAllTables(options)
    renameTable(before, after, options)
    showAllTables(options)
    describeTable(tableName, options)
    addColumn(tableNameOrOptions, attributeName, dataTypeOrOptions, options)
    removeColumn(tableNameOrOptions, attributeName, options)
    renameColumn(before,after,options)
    addIndex(tableName, attributes, options)
    removeIndex(tableName, indexNameOrAttributes, options)
*/
