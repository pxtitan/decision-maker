const button = document.getElementById("submit-id");
const input = document.getElementById("input-id");
const answer = document.querySelector(".answer-class");

const truths = [
  "You are using this app to avoid actual work.",
  "The answer is not on the screen; it is in your silence.",
  "Stop seeking a sign and start being the fire.",
  "You already know what to do. You are just afraid to do it alone.",
  "Ambition is a beautiful lie. Only this moment is real.",
  "Your laziness is just a lack of love for the task.",
  "Freedom is the ability to say 'no' to your own distractions.",
  "A 'Yes' or 'No' will not save you from yourself.",
  "Drop the question. The questioner is the problem.",
  "Don't be a spectator of your own life. Act.",
];

button.addEventListener("click", () => {
  console.log(input.value);
  if (input.value === "") {
    answer.textContent = "Please enter a question.";
  } else {
    answer.textContent = `${truths[Math.floor(Math.random() * truths.length)]}`;
  }
});
