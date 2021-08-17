var ReadLineSync=require('readline-sync')
var count=0;
var input=ReadLineSync.question("enter your name :")
console.log("Welcome to the Harry Potter Quiz :",input)
const questions=[
  {question:"What was Dumbeldore's Full Name",
  answer:"Albus Wulfric Brian Dumbeldore"},
  {question:"What was Nevill's frog name",
  answer:"Trevor"},
  {question:"What was the name of the house elf in Hp2",
  answer:"Dobby"},
  {question:"What was the name of Harry's Owl",
  answer:"Hedwig"},
  {question:"Who killed Cedric ",
  answer:"Lord Voldemort"},
  ]
  let highScore=[{
    Name:"Anurag",
    Score:"1"
  }] 
  const play=(q,a)=>
  {
    var usera=ReadLineSync.question(q +" :")
    if(usera.toLowerCase()==a.toLowerCase()){
      console.log("Right On correct answer")
      count=count+1;
    }
    else{
      console.log("wrong answer")
      count=count-1;
    }
    
  }
for(var i=0;i<questions.length;i++){
  currq=questions[i].question
  curra=questions[i].answer
  play(currq,curra)
}
console.log("Your Score is : "+ count)
for(var k=0;k<highScore.length;k++){
 if(highScore[k].Score<count){
   console.log("Congrats You are a true Potterhead")
   highScore.push({
     Name:input,
     Score:count
   })
 }
}
console.log("HighScorers")
for(var l=0;l<highScore.length;l++){
  console.log(highScore[l].Name +" | " +highScore[l].Score)
  console.log("----------------------")
}