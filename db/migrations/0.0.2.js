module.exports = {
    up: function(db, Sequelize) {
        return db.createTable('questions', {
            question: {
                allowNull: false,
                type: Sequelize.STRING 
            },
            answer: {
                allowNull: false,
                type: Sequelize.STRING 
            },
            category: {
                allowNull: false,
                type: Sequelize.STRING 
            },
            value: {
                allowNull: false,
                defaultValue: 0,
                type: Sequelize.INTEGER 
            }
        })
    },
    down: function(db, Sequelize) {
        return db.dropTable('questions');
    }
}
