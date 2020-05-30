const fs = require("fs");
const path = require("path");
module.exports.getQuestions = (req, res, next) => {
  const filePath = path.join(__dirname, "..", "db", "questions.json");

  fs.readFile(filePath,"utf-8", (err, data) => {
    if (err) {
      const err = new Error("Error in Reading Questions");
      return next(err);
    }
    data= JSON.parse(data);
    res.json(data);
  });
};
module.exports.solveAnswers = (req, res, next) => {
  const data = req.body;
  const filePath = path.join(__dirname, "..", "db", "answers.json");
  fs.readFile(filePath,"utf-8", (err, answer) => {
    if (err) {
      const err = new Error("Error in Fetching Answer");
      return next(err);
    }
    let ans = JSON.parse(answer);

    let rightAns = 0;
    let wrongAns = 0;
    let keys = Object.keys(ans);
    let totalQue = keys.length;
    let notAnswered = totalQue;
    
    for (let i = 0; i < totalQue; i++) {
        if(data[keys[i]] && data[keys[i]] == ans[keys[i]]){
            // it means right answer 
            rightAns++;
            notAnswered--;
        }else if(data[keys[i]] && data[keys[i]] != ans[keys[i]]){
            wrongAns++;
            notAnswered--;
        }
        if(i == totalQue-1){
            res.json({
                rightAns,
                wrongAns,
                notAnswered
            })
        }
    }
  });
};
