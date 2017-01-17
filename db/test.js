var User = require('./models/User');
var Question = require('./models/Question');
var db = require('./db');

User.create({
    username: 'ryan'
});

Question.create({
    question: 'Who is am you',
    answer: 'it is I!',
    value: 100,
    category: 'moose'
});
