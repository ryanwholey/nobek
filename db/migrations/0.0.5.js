 module.exports = {
    up: function(db, Sequelize) {
        return db.addColumn('questions', 'createdAt', {
            allowNull: false,
            defaultValue: new Date(),
            type: Sequelize.DATE
        }).then(() => {
            return db.addColumn('questions', 'updatedAt', {
                allowNull: false,
                defaultValue: new Date(),
                type: Sequelize.DATE
            }) 
        })
    },

    down: function(db, Sequelize) {
        return db.removeColumn('questions', 'createdAt') .then(() => {
            return db.removeColumn('questions', 'updatedAt') 
        });
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
