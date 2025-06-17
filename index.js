// // 1 Refrencess
// let displayContainer=document.getElementById("display-container");
// let quizContainer=document.getElementById("container")
// let startScreen=document.getElementById("start-screen");
// let startButton=document.getElementById("start-button");
// let countOfQuestions=document.getElementById("number-of-questions");
// let timer=document.querySelector(".time-left");
// let nextBtn=document.getElementById("next-btn");
// let scoreContainer=document.getElementById("score-container");
// let restartBtn=document.getElementById("restart-button");
// let container=document.getElementById(".container");
// let userScore=document.getElementById("user-score");
// let questionCount;
// let scoreCount=0;
// let count=11;
// let countDown;
// // 2
// const quizArray=[
//    { id:"0", question:" which is the most widely spoken language in the world?",option:["spanish","Mandarid","English", "German"],correct:"Mandarid"},
//     { id:"1" , question:" which the only continent in the world without desert?",option:["North America","Asia","Africa","Europe"],correct:"Europe"},
//     { id:"2", question:" who invented computer?", option:["Charles Babbage","Henry luce","Henry Babbage","Charles luce"], correct:"Charles Babbage"}
// ]
// console.log(quizArray.length);
// // 3 quiz creation
// function quizCreator(){
//     quizArray.sort(  ()=> Math.random()- 0.5);
//     for (const i of quizArray) {
//         i.option.sort( ()=>Math.random()- 0.5);
//         // quiz card creator
//         let div=document.createElement("div");
//         div.classList.add("container-mid","hide");
        
//         // question number
//         countOfQuestions.innerHTML=  1 + " of " + quizArray.length + " Question";
//         // question
//       let question_DIV=document.createElement("p");
//       question_DIV.classList.add("question");
//       question_DIV.innerHTML=i.question;
      
//       div.appendChild(question_DIV);
//     //   options
//       div.innerHTML +=`
//       <button class="option-div" onclick=checker(this)>${i.option[0]} </button>
//       <button class="option-div" onclick=checker(this)>${i.option[1]} </button>
//       <button class="option-div" onclick=checker(this)>${i.option[2]} </button>
//        <button class="option-div" onclick=checker(this)>${i.option[3]} </button>
//       `
//       quizContainer.appendChild(div);
//     }
  
// }
// // 4 display quiz
// // اعرض البطاقة التي فيها رقم السؤال الحالي وأخفي باقي البطاقات
// let quizDisplay=(questionCount)=>{
//     let quizCard=document.querySelectorAll(".container-mid");
//     quizCard.forEach((card)=>{
//         card.classList.add("hide");
    

//     });
//     quizCard[questionCount].classList.remove("hide");
// }






// //  initial setup
// function initial(){
//     quizContainer.innerHTML="";
//     count=11;
//     scoreCount=0;
//     questionCount=0;
//     clearInterval(countDown);
//     timerDisplay();
//     quizCreator();
//     quizDisplay(questionCount);

// }
// // when the user click on start button
// startButton.addEventListener("click",()=>{
//     startScreen.classList.add("hide")
//     displayContainer.classList.remove("hide");
//     initial();
// })
// // 5 hide quiz and display start screen
// window.onload=()=>{
//     startScreen.classList.remove("hide")
//     displayContainer.classList.add("hide");

// }
// // 6 Timer
//  const timerDisplay=()=>{
//     let countDown=setInterval(()=>{
//         count--;
//         timer.innerHTML=` ${count} s`
//         if (count==0) {
//             clearInterval(countDown);
//             displayNext();
            
//         }
//     },1000)
//  }
// // 7 checker
// function checker(userOption){
//     // get the user Answering
//     let userSolution = userOption.innerText;
//     // get the current card which content the current question
//     let question=document.querySelectorAll(".container-mid")[questionCount];
  
//     // get all options
//     let options=document.querySelectorAll(".option-div");
   
//     if (userSolution === quizArray[questionCount].correct) {
//         userOption.classList.add("correct");
//         scoreCount++;
      
//     }
//         else{
//             userOption.classList.add("incorrect");
//            options.forEach((element)=>{
//             if (element.innerText==quizArray[questionCount].correct) {
//                 element.classList.add("correct")
                
//             }
//            })
//         }
        
   


// //8 stop timer
// clearInterval(countDown);
// // disabled all options
// options.forEach((element)=>{
//     element.disabled= true;
// })
// }
    
// // 9 Restart Quiz
// restartBtn.addEventListener("click",()=>{
//     displayContainer.classList.remove("hide");
//     scoreContainer.classList.add("hide")
// })

// //  10 next question
// nextBtn.addEventListener("click",(displayNext)=>{
//     questionCount++;
//     if (questionCount===quizArray.length) {
//         displayContainer.classList.add("hide");
//         scoreContainer.classList.remove("hide");
//         userScore.innerHTML="Your Score is " + scoreCount+  " out of" +  questionCount;
        
//     }else{
//         countOfQuestions.innerHTML=  1 + " of " + quizArray.length + " Question";

//     }
// })
// //11  display quiz
// quizDisplay(questionCount);
// count=11;
// clearInterval(countDown);
// timerDisplay()
  

//  1 Refrencess
let startScreen=document.getElementById("start-screen");
let startButton=document.getElementById("start-button");
let displayContainer=document.getElementById("display-container");
let numberOfQuestions=document.getElementById("number-of-questions");
let timeLeft=document.getElementById("time-left");
let container=document.getElementById("container");
let nextButton=document.getElementById("next-btn");
let scoreContainer=document.getElementById("score-container");
let userScore=document.getElementById("user-score");
let restartButton=document.getElementById("restart-button");
let questionCount=0;
let count=11;
let scoreCount=0;
let countDown;


//2 create questions and optitons
const quizArray=[
    { id:"0", question:" which is the most widely spoken language in the world?",options:["spanish","Mandarid","English", "German"],correct:"Mandarid"},
     { id:"1" , question:" which the only continent in the world without desert?",options:["North America","Asia","Africa","Europe"],correct:"Europe"},
     { id:"2", question:" who invented computer?", options:["Charles Babbage","Henry luce","Henry Babbage","Charles luce"], correct:"Charles Babbage"}
 ]
 function quizCreator(){
    // get questions randomly
    quizArray.sort(()=>Math.random() - 0.5);
    // get options randomly
    for (const i of quizArray) {
        i.options.sort(()=>Math.random() - 0.5)
        let div=document.createElement("div");
        div.classList.add("container-mid");
        numberOfQuestions.innerHTML= 1 +" of "+ quizArray.length +" Question";
        // create question
        let question=document.createElement("p");
        question.classList.add("question")
        question.innerHTML=i.question;
        div.appendChild(question);
        div.innerHTML+=`
       <button class="option-div" onclick=checker(this)>${i.options[0]} </button>
       <button class="option-div" onclick=checker(this)>${i.options[1]} </button>
       <button class="option-div" onclick=checker(this)>${i.options[2]} </button>
      <button class="option-div" onclick=checker(this)>${i.options[3]} </button>
     `
        container.appendChild(div)
      
    }

   


 }
//  4 hide quiz and display start screen
window.onload=()=>{
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide")

}
//5 initial setup
function initial(){
    container.innerHTML="";
    questionCount=0;
    scoreCount=0;
    count=11;
    clearInterval(countDown);
    timerDisplay()
    quizCreator();
    quizDisplay(questionCount);
  displayOptions(false);
}
//  6 start button
startButton.addEventListener("click",()=>{
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
})
// 3
 let quizDisplay=(questionCount)=>{
    let quizCard=document.querySelectorAll(".container-mid");
   quizCard.forEach((card)=>{
    card.classList.add("hide")

   })
   
      quizCard[questionCount].classList.remove("hide")
 }
//    7 create timer
let timerDisplay=()=>{
  countDown=setInterval(()=>{
    count--;
    timeLeft.innerHTML=`${count} s`
    if (count==0) {
        clearInterval(countDown)
        displayNext();
        
    }

   },1000)
}
//    checker function to check id option is correct or not
function checker(userOption){
    let userSolution=userOption.innerText;
    let question=document.getElementsByClassName(".container-mid")[questionCount];
    // console.log(question)
    let options=document.querySelectorAll(".option-div");
    if (userSolution=== quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
        
    }else{
        userOption.classList.add("incorrect");
        options.forEach((element)=>{
            if (element.innerText===quizArray[questionCount].correct) {
                element.classList.add("correct");
                
      

                
            }

        })
        
                     
    }
        // display timer
        clearInterval(countDown);
        // disabled options
        displayOptions()
   
}
let displayOptions=()=>{
    let options=document.querySelectorAll(".option-div");
    options.forEach((element)=>{
        if (element.disabled=false) {
            element.disabled =true
            
        }else{
            element.disabled=false

        }
      
    })
}

// 9 Restart Quiz
restartButton.addEventListener("click",()=>{
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
    initial()
})

// next question
nextButton.addEventListener("click",((displayNext )=>{
    questionCount++;
    if (questionCount==quizArray.length) {
        scoreContainer.classList.remove("hide")
        displayContainer.classList.add("hide");
        userScore.innerHTML=`Your score is ${scoreCount} of ${questionCount}`
        
        
    }else{
        numberOfQuestions.innerHTML=`${questionCount} " of " ${quizArray.length} Question`
      quizDisplay(questionCount);
      count=11;
      clearInterval(countDown)
      timerDisplay()
    displayOptions(false)
             
    }

}))
     
       
      
    
   







