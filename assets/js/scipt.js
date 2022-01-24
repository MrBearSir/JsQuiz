var questionCounter;
var i;
var score;
var timer;
var timerCount;

// Start Quiz

function startQuiz() {
    score =0;
    questionCounter = 0;
    i = 0;
    timer = 60;
    timerCount = setInterval(function(){
        document.getElementById("timer").textContent = "Time Left: " + timer;
        timer -= 1;
    }, 1000);
    questionsLoop();
}



// Array with questions and answers.
var questions = [
    {question: "Why so JavaScript and Java have similar name?", answer: ["JavaScript is a stripped-down version of Java", "JavaScript's syntax is loosely based on Java's", "They both originated on the island of Java", "None of the above"], correct: "JavaScript's syntax is loosely based on Java's"}, 
    {question: "When a user views a page containing a JavaScript program, which macine is actualy executes the script?", answer: ["The User's machine running a Web browser", "The Web server", "A central machine deep within Netscape's corporate offices", "None of the above"], correct: "The User's machine running a Web browser"}, 
    {question: "______ JavaScript is also called client-side JavaScript", answer: ["Microsoft", "Navigator", "LiveWire", "Native"], correct: "Navigator"}, 
    {question: "_______JavaScript is also called server-side JavaScript", answer: ["Microsoft", "Navigator", "LiveWire", "Native"], correct: "LiveWire"}, 
    {question: "What are variables used for in JavaScript Programs?", answer: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "NOne of the above"], correct: "Storing numbers, dates, or other values"}, 
    {question: "______JavaScript statements embedded in an HTML page can respond to user events such as mouse-click, form input and page navigation", answer: ["Client-side", "Server-side", "Local", "Native"], correct: "Client-side"}, 
    {question: "What should apear at the very end of your JavaScript: The <script LANGUAGE='JavaScript'>tag?", answer: ["The </script>", "The <script>", "The END statement", "None of the above"], correct: "The </script>"}, 
    {question: "Which of the following can't be done with client-side JavaScript?", answer: ["Validating a form", "Sending a form's content by email", "Storing the form's content to a database file on the server", "None of the above"], correct: "Storing the form's content to a database file on the server"}, 
    {question: "Which of the following are capabilities of the function in JavaScrip?", answer: ["Return a value", "Accept parameters and Return value", "Accept parameters", "None of the above"], correct: "Accept parameters"}, 
    {question: "Which of the following is not a valid JavaScript variable name?", answer: ["2names", "_first_and_last_names", "FirstAndLast", "None of the above"], correct: "2names"}];

// Function to run thru questions

function questionsLoop() {
    if (questionCounter >= 0 && questionCounter < questions.length){
        askQuestion();
    }
    
    else {
        endQuiz();
    }

}


// Function to ask question
function askQuestion() {
    document.getElementById("questions").textContent = questions[i].question;
    document.getElementById("btn1").textContent = questions[i].answer[0];
    document.getElementById("btn2").textContent = questions[i].answer[1];
    document.getElementById("btn3").textContent = questions[i].answer[2];
    document.getElementById("btn4").textContent = questions[i].answer[3];
        document.getElementById("btn1").onclick = function() {
            if (questions[i].answer[0] === questions[i].correct) {
                counters();
                score += 5;
            }
            else {
                counters();
                timer = timer - 5;
            }
        }
        document.getElementById("btn2").onclick = function() {
            if (questions[i].answer[1] === questions[i].correct) {
                counters();
                score += 5;
            }
            else {
                counters();
                timer = timer - 5;
            }
        }
        document.getElementById("btn3").onclick = function() {
            if (questions[i].answer[2] === questions[i].correct) {
                counters();
                score += 5;
            }
            else {
                counters();
                timer = timer - 5;
            }
        }
        document.getElementById("btn4").onclick = function() {
            if (questions[i].answer[3] === questions[i].correct) {
                counters();
                score += 5;
            }
            else {
                counters();
                timer = timer - 5;
            }
        }
        
}

// End Function

function endQuiz() {
    score +=timer*3;
    var playerName = window.prompt("Type in your name");
    var scoreArray = JSON.parse(localStorage.getItem("playerScore"));
    if (scoreArray == null) {
        scoreArray = [];
    }
    scoreArray.push({name: playerName, score: score})
    localStorage.setItem("playerScore", JSON.stringify(scoreArray));
    clearInterval(timerCount);
};

// Function to add counter and question index
function counters() {
    questionCounter = questionCounter + 1;
    i = i + 1;
    questionsLoop();
}

// Function to register choise
    



// // // listiner for start quiz
document.getElementById("start").addEventListener("click", startQuiz);

// Score function
function scoreBoard() {
    var score = JSON.parse(localStorage.getItem("playerScore"));
    score.sort((a, b) => (a.score > b.score) ?1:-1);
    var result = "";
    for (var i = score.length - 1; i >= 0; i--) {
        result += score[i].name + ":" + score[i].score + "\n";
    };
    alert(result);
}

document.getElementById("highscore").addEventListener("click", scoreBoard);