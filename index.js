// Code your solution in this file!
// function getGrade() {
  // Prompt user for input
  let marks = prompt("Enter student marks (0-100):");
  
  // Convert input to a number
  marks = Number(marks);

  // Validate input
  if (isNaN(marks) || marks < 0 || marks > 100) {
    return "Invalid input. Please enter a number between 0 and 100.";
  }

  // Determine grade
  if (marks > 79) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

// Call the function and log the result
console.log(getGrade());