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


function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  
  if (speed <= speedLimit) {
    console.log("Ok");
    return;
  }
  
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  
  if (points >= 12) {
    console.log("License suspended");
  } else {
    console.log("Points: " + points);
  }
}

// Example usage:
const speed = parseInt(prompt("Enter the car's speed:"));
checkSpeed(speed);


function calculateNetSalary(basicSalary, benefits) {
  // Calculate gross pay
  const grossPay = basicSalary + benefits;

  // Calculate PAYE (Tax)
  function calculatePAYE(taxablePay) {
    if (taxablePay <= 24000) return taxablePay * 0.1;
    if (taxablePay <= 32333) return 2400 + (taxablePay - 24000) * 0.25;
    if (taxablePay <= 500000) return 4483.25 + (taxablePay - 32333) * 0.3;
    if (taxablePay <= 800000) return 144783.25 + (taxablePay - 500000) * 0.325;
    return 242283.25 + (taxablePay - 800000) * 0.35;
  }

  // Calculate NHIF Deductions
  function calculateNHIF(grossPay) {
    if (grossPay <= 5999) return 150;
    if (grossPay <= 7999) return 300;
    if (grossPay <= 11999) return 400;
    if (grossPay <= 14999) return 500;
    if (grossPay <= 19999) return 600;
    if (grossPay <= 24999) return 750;
    if (grossPay <= 29999) return 850;
    if (grossPay <= 34999) return 900;
    if (grossPay <= 39999) return 950;
    if (grossPay <= 44999) return 1000;
    if (grossPay <= 49999) return 1100;
    if (grossPay <= 59999) return 1200;
    if (grossPay <= 69999) return 1300;
    if (grossPay <= 79999) return 1400;
    if (grossPay <= 89999) return 1500;
    if (grossPay <= 99999) return 1600;
    return 1700;
  }

  // Calculate NSSF Deductions
  function calculateNSSF(pensionablePay) {
    const tier1Limit = 7000;
    const tier2Limit = 36000;
    const contributionRate = 0.06;

    let tier1Contribution = Math.min(pensionablePay, tier1Limit) * contributionRate;
    let tier2Contribution = Math.max(0, Math.min(pensionablePay - tier1Limit, tier2Limit - tier1Limit)) * contributionRate;

    return tier1Contribution + tier2Contribution;
  }

  // Calculate Housing Levy
  const housingLevy = grossPay * 0.015;

  // Calculate deductions
  const paye = calculatePAYE(grossPay);
  const nhif = calculateNHIF(grossPay);
  const nssf = calculateNSSF(grossPay);
  const totalDeductions = paye + nhif + nssf + housingLevy;

  // Calculate net salary
  const netSalary = grossPay - totalDeductions;

  return {
    grossPay,
    paye,
    nhif,
    nssf,
    housingLevy,
    totalDeductions,
    netSalary
  };
}

// Example usage
const basicSalary = 50000;
const benefits = 10000;
const result = calculateNetSalary(basicSalary, benefits);

console.log("Gross Pay:", result.grossPay);
console.log("PAYE (Tax):", result.paye);
console.log("NHIF Deduction:", result.nhif);
console.log("NSSF Deduction:", result.nssf);
console.log("Housing Levy:", result.housingLevy);
console.log("Total Deductions:", result.totalDeductions);
console.log("Net Salary:", result.netSalary);