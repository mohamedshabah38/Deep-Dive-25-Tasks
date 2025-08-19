const studentName = "Mohamed Yasser";
let studentAge = 20; 
var enrollmentStatus = true; 
let grades = [90, 80, 70]; 
let totalGrades = grades[0] + grades[1] + grades[2]; 
let averageGrades = totalGrades / grades.length;
let isPassed = averageGrades >= 60; 
if (averageGrades >= 90) {
    console.log("Excellent");
} else if (averageGrades >= 75) {
    console.log("Very Good");
} else if (averageGrades >= 60) {
    console.log("Good");
} else {
    console.log("Failed");
}
let subjectNumber ;
switch (parseInt(subjectNumber)) {
    case 1:
        console.log(`Math: ${grades[0]}`);
        break;
    case 2:
        console.log(`Science: ${grades[1]}`);
        break;
    case 3:
        console.log(`English: ${grades[2]}`);
        break;
    default:
        console.log("Invalid subject number.");
}
for (let i = 0; i < grades.length; i++) {
    console.log(`Grade ${i + 1}: ${grades[i]}`);
}
function calculateTotal(gradesArray) {
    let total = 0;
    for (let grade of gradesArray) {
        total += grade;
    }
    return total;
}
const calculateAverage = (gradesArray) => {
    return calculateTotal(gradesArray) / gradesArray.length;
};
let num = 10;
while (num < 10) {
    console.log("done");
}
let num2 = 10;
do {
    console.log("done");
} while (num2 < 10);
let numbers = [1, 2, 3, 4, 5, 6];
let sumForLoop = 0;
for (let i = 0; i < numbers.length; i++) {
    sumForLoop += numbers[i];
}
let sumWhileLoop = 0;
let j = 0;
while (j < numbers.length) {
    sumWhileLoop += numbers[j];
    j++;
}
console.log(`Sum using for loop: ${sumForLoop}`);
console.log(`Sum using while loop: ${sumWhileLoop}`);
