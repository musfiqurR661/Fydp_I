// let hoverStart = {};

// function startHover(id) {
//   hoverStart[id] = new Date().getTime();
// }

// function endHover(id) {
//   const end = new Date().getTime();
//   const duration = end - hoverStart[id];
//   console.log(`[Hover] ${id} hovered for ${duration}ms`);
// }

// function handleClick(id, isCorrect) {
//   document.getElementById("result").textContent = isCorrect ? "✅ Correct!" : "❌ Wrong!";
//   if (!isCorrect) {
//     let message = "";
//     if (id === 'a') {
//       message = "Did you confuse syntax? Try reviewing Python for-loops.";
//     } else if (id === 'c') {
//       message = "Seems like made-up syntax confused you. Review Python keywords.";
//     }
//     document.getElementById("aiFeedback").textContent = `🤖 AI Suggests: ${message}`;
//   } else {
//     document.getElementById("aiFeedback").textContent = "";
//   }

//   console.log(`[Click] ${id} clicked → ${isCorrect ? "Correct" : "Wrong"}`);
// }



// Variable to track start time when user views the question
let questionStartTime = Date.now();

// Object to store hover start times
let hoverStart = {};

// Start timer when mouse hovers over an option
function startHover(id) {
  hoverStart[id] = new Date().getTime(); // Record time when hovering starts
}

// End hover and calculate duration
function endHover(id) {
  const hoverEndTime = new Date().getTime();
  const hoverDuration = hoverEndTime - hoverStart[id];
  console.log(`[Hover] ${id} hovered for ${hoverDuration}ms`);
  // You can save hoverDuration data here to analyze later
}

// Function to handle click event
function handleClick(id, isCorrect) {
  // Calculate total time spent on the question
  const totalTimeSpent = Date.now() - questionStartTime;
  
  // Check if answer is correct
  if (isCorrect) {
    // If the time spent is more than 10 seconds, suggest reviewing the question
    if (totalTimeSpent > 10000) { // If spent more than 10 seconds
      document.getElementById("aiFeedback").textContent = 
        "✅ Correct! But you took some time. Want to practice this again?";
    } else {
      document.getElementById("aiFeedback").textContent = "✅ Correct!";
    }
  } else {
    // If the answer is wrong, suggest to review the topic
    document.getElementById("aiFeedback").textContent = 
      "❌ Wrong answer. Let's review this topic.";
  }

  // Optional: Log the total time spent for each question and decision
  console.log(`Total time spent on this question: ${totalTimeSpent}ms`);
}
