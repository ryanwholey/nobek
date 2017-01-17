module.exports = (function() {
    'use strict';

    const Question = require('../../db/models/Question');
    const db = require('../../db/db');

    const randomQuestionSQL = `
        SELECT question, answer, value, category, id FROM questions AS r1
        JOIN (SELECT CEIL(RAND() *
        (SELECT MAX(id) FROM questions)) AS _random_id)
        AS r2 WHERE r1.id >= r2._random_id
        ORDER BY r1.id ASC
        LIMIT 1 
    `;

    const getRandomQuestion = () => db.query(randomQuestionSQL);

    return {
        getRandomQuestion 
    };
})();
