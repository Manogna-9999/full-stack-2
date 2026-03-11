let num = 10;

if (num >= 0) {            // First condition
    if (num % 2 == 0) {    // Nested if
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
} else {
    console.log("Please enter a positive number");
}