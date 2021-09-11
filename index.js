var readlineSync = require("readline-sync");

const chalk = require('chalk');

var userName = readlineSync.question("May I know your name? ");

console.log(chalk.blue("Welcome!! "+ userName+ " TO DO YOU KNOW NAGA! "));

var score = 0;

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("you are right!! ");
    score = score + 2;
  } else {
    console.log("you are wrong!");
  }

  console.log("Your score is: "+score);
  console.log("---------------------");
}

var questions = [{
  question: "What is my surname?  ",
  answer: "hegde",
},
{
  question: "where do I live?  ",
  answer: "mysore"
},
{
  question: "Am I older than 22? ",
  answer: "no"
},
{
  question: "Do I like Harry Potter? ",
  answer:"yes"
},
{
  question: "Do I like chats? ",
  answer: "yes"
},]


for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log(chalk.red("Hurray!! your score is: ",+score));

var highscores =[
  {
    name:"Nagashree",
    score:10,
  },
  {
    name:"Malini",
    score:10,
  }
];
console.log("Check out the high score, if you should be there ping me, I'll update")
for(var i=0;i<highscores.length;i++){
  var currentScore =highscores[i];
  console.log("Name: "+currentScore.name);
  console.log("Score: "+currentScore.score);
}