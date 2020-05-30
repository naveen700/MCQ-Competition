const express = require('express');
const router = express.Router();

const quiz = require('../controller/Quiz');


router.get('/questions',quiz.getQuestions )

router.post('/answers',quiz.solveAnswers);

module.exports = router;