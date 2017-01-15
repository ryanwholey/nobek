module.exports = {
    up: function(db, Sequelize) {
        return db.addColumn(
            'questions',
            'id',
            {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER
            } 
        )
    },
    down: function(db, Sequelize) {
        return db.removeColumn('id', 'questions'); 
    }
}
