
function calculateGrade(marks) {
    let grade;

    if (marks >= 90 && marks <= 100) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    return grade;
}

let marks = 85;
let result = calculateGrade(marks);

console.log("Marks: " + marks);
console.log("Grade: " + result);