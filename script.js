let userScore = 0;
let compScore = 0;

function playGame() {
    let input = document.getElementById("userInput").value.toLowerCase().trim();
    let resultText = document.getElementById("result");

    // Input validation
    if (input !== "rock" && input !== "paper" && input !== "scissors") {
        resultText.innerText = "❌ Invalid input! Enter rock, paper or scissors.";
        return;
    }

    let choices = ["rock", "paper", "scissors"];
    let compChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (input === compChoice) {
        result = "🤝 Draw!";
    } else if (
        (input === "rock" && compChoice === "scissors") ||
        (input === "paper" && compChoice === "rock") ||
        (input === "scissors" && compChoice === "paper")
    ) {
        result = "✅ You Win!";
        userScore++;
    } else {
        result = "❌ You Lose!";
        compScore++;
    }

    resultText.innerText = `You: ${input} | Computer: ${compChoice} → ${result}`;

    // animation
    resultText.classList.remove("result-animate");
    void resultText.offsetWidth;
    resultText.classList.add("result-animate");

    // update score
    document.getElementById("score").innerText =
        `You: ${userScore} | Computer: ${compScore}`;
}