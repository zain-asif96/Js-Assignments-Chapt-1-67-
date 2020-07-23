// Chapter 1 = Task No 1 //

// alert("Welcome to our site");

// Chapter 1 = Task No 2 //

// var password = prompt("Enter your 6 digit password!");

// if (password == null || password == "" || password.length < 6) {
//     alert("Error! Please enter a valid password!");
// } else {
//     alert("Login Successful");
// }

// Chapter 1 = Task No 3 //

// alert("Welcome to JS Land \nHappy coding!");

// Chapter 1 = Task No 4 //

// alert("Welcome to JS Land");
// alert("Happy Coding!");

// Chapter 1 = Task No 5 //

// window.alert("Hello... I can run JS through my web browser's console");

// Chapter 2 = Task No 1 //

// var username = "Zain";
// console.log(username);

// Chapter 2 = Task No 2 //

// var myName = "Raza";
// var fullName = "Zain " + myName;
// console.log(fullName);

// Chapter 2 = Task No 3 //

// var message = "Hello World!";
// console.log(message);
// alert(message);

// Chapter 2 = Task No 4 //

// var fullName = prompt("Enter your full name:");
// var age = prompt("Enter your age:");
// var jobposition = prompt("Enter your job position:");

// alert(fullName);
// alert(age);
// alert(jobposition);

// Chapter 2 = Task No 5 //

// var food = "Pizza";
// alert("PIZZA \nPIZZ \nPIZ \nPI \nP");

// for (var i = 0; i < food.length; i++) {
//     alert(food.charAt(i));
// }

// Chapter 2 = Task No 6 //

// var email = 'zainraza@hotmail.com';
// alert("My emil address is " + email);

// Chapter 2 = Task No 7 //

// var book = "A smarter \nway to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// Chapter 2 = Task No 8 //

// var content = "Yah! I can write HTML content in JavaScript.";
// document.write(content);

// Chapter 2 = Task No 9 //

// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);
// document.write(design);

// Chapter 3 = Task No 1 //

// var age = 23;
// alert("I am " + age + " years old");

// Chapter 3 = Task No 2 //

// var age = 14;
// alert("You have visited this site " + age + " times");

// Chapter 3 = Task No 3 //

// var birthYear = 1996;
// document.write("My birth year is " + birthYear + "<br>" + "Datatype of my declared variable is numbers");

// Chapter 3 = Task No 4 //

// var visitorname = "John Doe";
// var productname = "T-shirt";
// var quantity = 14;

// document.write("<b>" + visitorname + "</b>" + " ordered " + "<b>" + quantity + "</b>" + "<b>" + " " + productname + "</b>" + "(s) " + " on XYZ clothing store");

// Chapter 4 = Task No 1 //

// var name, email, username;
// console.log(name, email, username);

// Chapter 4 = Task No 2 //

// Legal Variable Names //
// var userName;
// var username;
// var _userName;
// var $username;
// var user_name;

// Ill-legal Variable Names //
// var UserName;
// var 1username;
// var user-name;
// var Username;
// var const ;

// Chapter 4 = Task No 3 (a)//

// var head = "Rules for naming JS variables";
// document.write("<b>" + head + "</b>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// Chapter 4 = Task No 3 (b),(c),(d)//

// var _number = "numbers";
// var letter = "letter";
// var dollar = "$";
// var underscore = "_";
// var sensitiveCase = "sensitive";
// var keyword = "keywords";

// document.write("Variable names can only contain " + _number + ", " + dollar + ", " + "and " + underscore + "." + " For example " + "<b>" + "$my_1stVariable" + "</b>");
// document.write("<br>");
// document.write("Variables must begin with a " + letter + ", " + dollar + ", " + "and " + underscore + "." + " For example " + "<b>" + "$name " + "</b>" + "<b>" + "_name " + "</b>" + "<b>" + "name" + "</b>");
// document.write("<br>");
// document.write("Variable names are case " + "<b>" + sensitiveCase + "</b>");
// document.write("<br>");
// document.write("Variable names should not be JS " + "<b>" + keyword + "</b>");

// Chapter 5 = Task No 1 //
// var sum1 = 3;
// var sum2 = 5;
// var sumtotal = sum1 + sum2;

// document.write("Sum of " + sum1 + " and " + sum2 + " is " + sumtotal)

// Chapter 5 = Task No 2 //
// var sum1 = 5;
// var sum2 = 3;
// var sumtotal = sum1 - sum2;

// document.write("Sum of " + sum1 + " and " + sum2 + " is " + sumtotal)
// document.write("<br>");

// var sum1 = 5;
// var sum2 = 3;
// var sumtotal = sum1 * sum2;

// document.write("Sum of " + sum1 + " and " + sum2 + " is " + sumtotal)
// document.write("<br>");

// var sum1 = 5;
// var sum2 = 3;
// var sumtotal = sum1 / sum2;

// document.write("Sum of " + sum1 + " and " + sum2 + " is " + sumtotal)
// document.write("<br>");

// var sum1 = 5;
// var sum2 = 3;
// var sumtotal = sum1 % sum2;

// document.write("Sum of " + sum1 + " and " + sum2 + " is " + sumtotal)

// Chapter 5 = Task No 3 //

// var $value;
// document.write("Value after variable declaration is: " + "<b>" + $value + "</b>");
// document.write("<br>");

// var $value = 5;
// document.write("Initial value: " + "<b>" + $value + "</b>");
// document.write("<br>");

// var $value = 5 + 1;
// document.write("Value after increment is: " + "<b>" + $value + "</b>");
// document.write("<br>");

// var sum = $value + 7;
// document.write("Value after addition is: " + "<b>" + sum + "</b>");
// document.write("<br>");

// var sum1 = sum - 1;
// document.write("Value after decrement is: " + "<b>" + sum1 + "</b>");
// document.write("<br>");

// var sum2 = sum1 % 3;
// document.write("The remainder is: " + "<b>" + sum2 + "</b>");
// document.write("<br>");

// Chapter 5 = Task No 4 //

// var ticketPrice = 600;
// var noOfTickets = 5;

// document.write("Total cost to buy " + noOfTickets + " tickets " + " is " + ticketPrice * noOfTickets + "PKR");

// Chapter 5 = Task No 5 //

// document.write("<b>" + "Multiplication Table Of 4" + "</b>");
// document.write("<br>");
// document.write("<br>");
// for (var i = 1; i <= 12; i++) {
//     document.write(4 + " * " + i + " = " + 4 * i + "<br>");
// }

// Chapter 5 = Task No 6 //

// var tempInCelsius = 25;
// var conversionInFahrenheit = tempInCelsius * 9 / 5 + 32;
// document.write("<b>" + "Celsius Temperature Conversion In Fahrenheit:" + "</b>");
// document.write("<br>");
// document.write("<br>");
// document.write(tempInCelsius + "°C " + "is " + conversionInFahrenheit + "°F");
// document.write("<br>");
// document.write("<br>");

// var tempInFahrenheit = 50;
// var conversionInCelsius = (tempInFahrenheit - 32) * 5 / 9;
// document.write("<b>" + "Fahrenheit Temperature Conversion In Celsius:" + "</b>");
// document.write("<br>");
// document.write("<br>");
// document.write(tempInFahrenheit + "°F " + "is " + conversionInCelsius + "°C");

// Chapter 5 = Task No 7 //

// var mobilePrice = 20000;
// var mobileQuantity = 4;
// var mobileTotalCost = mobilePrice * mobileQuantity;

// var watchQuantity = 6;
// var watchPrice = 2000;
// var watchTotalCost = watchPrice * watchQuantity;

// var shippingCharges = 200;

// var totalCost = mobileTotalCost + watchTotalCost + shippingCharges;

// document.write("<h1>" + "Shopping Cart" + "</h1>");
// document.write("<br>");
// document.write("<br>");
// document.write("Price of a mobile is " + "Rs." + mobilePrice);
// document.write("<br>");
// document.write("Quantity of purchased mobile is " + mobileQuantity);
// document.write("<br>");
// document.write("Price of a watch is " + "Rs." + watchPrice);
// document.write("<br>");
// document.write("Quantity of purchased watch is " + watchQuantity);
// document.write("<br>");
// document.write("Shipping charges will be " + "Rs." + shippingCharges);
// document.write("<br>");
// document.write("<br>");
// document.write("Total cost of your order is " + "Rs." + totalCost);

// Chapter 5 = Task No 8 //

// var totalMarks = 900;
// var marksObtained = 804;
// var percentage = marksObtained / totalMarks * 100;

// document.write("<h1>" + "Mark Sheet" + "</h1>");
// document.write("<br>");
// document.write("<b>" + "Total Marks: " + "</b>" + totalMarks);
// document.write("<br>");
// document.write("<b>" + "Marks Obtained: " + "</b>" + marksObtained);
// document.write("<br>");
// document.write("<b>" + "Percentage: " + "</b>" + Math.round(percentage) + "%");

// Chapter 5 = Task No 9 //

// var totalRupeesInPKR = 10 * Math.round(104.80) + 25 * 28;

// document.write("<h1>" + "Currency in PKR" + "</h1>");
// document.write("<br>");
// document.write("Total Currency in PKR: " + totalRupeesInPKR);

// Chapter 5 = Task No 10 //

// var sumOfNumber = 10 + 5 * 10 / 2;
// document.write("The answer would be " + "<b>" + sumOfNumber + "</b>");

// Chapter 5 = Task No 11 //

// var currentYear = 2020;
// var birthYear = 1996;
// var ageInCurrentYear = currentYear - birthYear;

// document.write("<h1>" + "Age Calculator" + "</h1>");
// document.write("<br>");
// document.write("Current Year: " + currentYear);
// document.write("<br>");
// document.write("Birth Year: " + birthYear);
// document.write("<br>");
// document.write("Your age is: " + ageInCurrentYear);

// Chapter 5 = Task No 12 //

// var circleRadius = 20;
// var circumference = 2 * 3.142 * circleRadius;  //Circumference of a circle = 2 π r , π = 3.142
// var areaOfCircle = 3.142 * (circleRadius * circleRadius); //Area of a circle = π r 2 , π = 3.142

// document.write("<h1>" + "Age Calculator" + "</h1>");
// document.write("<br>");
// document.write("Radius of a circle: " + circleRadius);
// document.write("<br>");
// document.write("The circumference is: " + circumference);
// document.write("<br>");
// document.write("The area is: " + areaOfCircle);

// Chapter 5 = Task No 13 //

// var favSnack = 'saltish';
// var currentAge = 24;
// var maximumAge = 40;
// var snackConsumesPerDay = 4;
// var totalConsumptionOfSnack = (maximumAge - currentAge) * snackConsumesPerDay;

// document.write("<h1>" + "The Lifetime Supply Calculator" + "</h1>");
// document.write("<br>");
// document.write("Favourite Snack: " + favSnack);
// document.write("<br>");
// document.write("Current Age: " + currentAge);
// document.write("<br>");
// document.write("Estimated Maximum Age: " + maximumAge);
// document.write("<br>");
// document.write("Amount of snacks per day: " + snackConsumesPerDay);
// document.write("<br>");
// document.write("You will need " + totalConsumptionOfSnack + " " + favSnack + " to last you until the age of " + maximumAge);

// Chapter 6 - 9 = Task No 1 //

// var a = 10;
// document.write("Result:")
// document.write("<br>");
// document.write("The value of a is: " + a);
// document.write("<br>");
// document.write(".......................................")
// document.write("<br>");
// document.write("<br>");

// a = ++a;
// document.write("The value of ++a is: " + a);
// document.write("<br>");
// document.write("The value of a is: " + a);
// document.write("<br>");
// document.write("<br>");

// a = a++;
// document.write("The value of a++ is: " + a);
// document.write("<br>");
// document.write("The value of a is: " + ++a);
// document.write("<br>");
// document.write("<br>");

// a = --a;
// document.write("The value of --a is: " + a);
// document.write("<br>");
// document.write("The value of a is: " + a);
// document.write("<br>");
// document.write("<br>");

// a = a--;
// document.write("The value of a-- is: " + a);
// document.write("<br>");
// document.write("The value of a is: " + --a);
// document.write("<br>");
// document.write("<br>");

// Chapter 6 - 9 = Task No 2 //
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--; // --a predecrement so it will be 1, --b predecrement so it will be 0, ++b preincrement so it will be 1, b-- postdecrement so it will be print value of 1 then it will decrement in next step as js is work with left to right and line by line method;
// //             1 -   0 +   1 + 1
// document.write("a is " + "<b>" + a + "</b>")
// document.write("<br>");
// document.write("b is " + "<b>" + b + "</b>")
// document.write("<br>");
// document.write("result is " + "<b>" + result + "</b>")

// Chapter 6 - 9 = Task No 3 //

// var nameInput = prompt("Enter your name:");
// alert("Hello! " + nameInput);

// Chapter 6 - 9 = Task No 5 //

// var tableNumber = prompt(
//     "Enter a number of which you want a multiplication table:"
// );
// if (tableNumber == "") {
//     for (var j = 1; j <= 12; j++) {
//         document.write(5 + " * " + j + " = " + 5 * j + "<br>");
//     }
// }
// else {
//     for (var i = 1; i <= 12; i++) {
//         document.write(tableNumber + " * " + i + " = " + tableNumber * i + "<br>");
//     }
// }

// Chapter 6 - 9 = Task No 6 //

// var $totalMarks = 300;
// var singleTotalMarks = 100;

// var firstSubject = prompt("Enter first subject:");
// var secondSubject = prompt("Enter second subject:");
// var thirdSubject = prompt("Enter third subject:");

// var firstSubMarks = prompt("Enter first subject marks:")
// var secondSubMarks = prompt("Enter second subject marks:")
// var thirdSubMarks = prompt("Enter third subject marks:")

// var subjectOnePercent = Math.round(firstSubMarks / singleTotalMarks * 100);
// var subjectTwoPercent = Math.round(secondSubMarks / singleTotalMarks * 100);
// var subjectThreePercent = Math.round(thirdSubMarks / singleTotalMarks * 100);
// var obtainedMarks = parseInt(firstSubMarks) + parseInt(secondSubMarks) + parseInt(thirdSubMarks);
// var finalPercentage = Math.round(obtainedMarks / $totalMarks * 100);

// document.write("<table cellspacing='5' border='2'>");
// document.write("<tr>");
// document.write("<th>" + "Subject" + "</th>")
// document.write("<th>" + "Total Marks" + "</th>")
// document.write("<th>" + "Obtained Marks" + "</th>")
// document.write("<th>" + "Percentage" + "</th>")
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + firstSubject + "</td>")
// document.write("<td>" + singleTotalMarks + "</td>")
// document.write("<td>" + firstSubMarks + "</td>")
// document.write("<td>" + subjectOnePercent + "%" + "</td>")
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + secondSubject + "</td>")
// document.write("<td>" + singleTotalMarks + "</td>")
// document.write("<td>" + secondSubMarks + "</td>")
// document.write("<td>" + subjectTwoPercent + "%" + "</td>")
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + thirdSubject + "</td>")
// document.write("<td>" + singleTotalMarks + "</td>")
// document.write("<td>" + thirdSubMarks + "</td>")
// document.write("<td>" + subjectThreePercent + "%" + "</td>")
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + " " + "</td>")
// document.write("<td>" + $totalMarks + "</td>")
// document.write("<td>" + obtainedMarks + "</td>")
// document.write("<td>" + finalPercentage + "%" + "</td>")
// document.write("</tr>");
// document.write("</table>");

// Chapter 9 - 11 = Task No 1 //

// var cityInput = prompt("Enter your city:");

// if (cityInput == "karachi" || cityInput == "Karachi") {
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome to " + cityInput);
// }

// Chapter 9 - 11 = Task No 2 //
// var genderInput = prompt("Enter your gender:");

// if (genderInput == "male" || genderInput == "Male") {
//     alert("Good Morning Sir");
// } else if (genderInput == "female" || genderInput == "Female") {
//     alert("Good Morning Ma’am");
// } else {
//     alert("Please enter correct gender!");
// }

// Chapter 9 - 11 = Task No 3 //
// var trafficSignalInput = prompt("Enter signal color light:");

// if (trafficSignalInput == "red" || trafficSignalInput == "Red") {
//     alert("Must Stop");
// } else if (trafficSignalInput == "yellow" || trafficSignalInput == "Yellow") {
//     alert("Ready to move");
// } else if ((trafficSignalInput == "green" || trafficSignalInput == "Green")) {
//     alert("Move now");
// } else {
//     alert("Follow traffic rules");
// }

// Chapter 9 - 11 = Task No 4 //
// var fuelInCar = prompt("Enter remaining fuel in car:");

// if (fuelInCar < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("You have enough fuel to travel");
// }

// Chapter 9 - 11 = Task No 5 (a) //
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");  // alert is showing
// }

// Chapter 9 - 11 = Task No 5 (b) //
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");  // alert is'nt showing
// }

// Chapter 9 - 11 = Task No 5 (c) //
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");   // alert is showing
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");  // alert is showing
// }

// Chapter 9 - 11 = Task No 5 (d) //
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");   // alert is showing
// }

// Chapter 9 - 11 = Task No 5 (e) //
// if (true) {
//     alert("True");  // alert is showing
// }

// if (false) {
//     alert("False");  // alert is'nt showing
// }

// Chapter 9 - 11 = Task No 5 (f) //
// if ("car" < "cat") {
//     alert("car is smaller than cat");  // alert is showing
// }

// Chapter 9 - 11 = Task No 6 //

// var $totalMarks = 300;
// var englishMarks = prompt("Enter your english marks out of 100:");
// var mathMarks = prompt("Enter your math maks out of 100:");
// var physicsMarks = prompt("Enter your physics marks out of 100:");
// var obtainedMarks = parseInt(englishMarks) + parseInt(mathMarks) + parseInt(physicsMarks);
// var finalPercentage = Math.round(obtainedMarks / $totalMarks * 100);
// console.log(finalPercentage);

// document.write("<h1>" + "Mark Sheet" + "</h1>");
// document.write("<br>");
// document.write("Total Marks: " + $totalMarks);
// document.write("<br>");
// document.write("Marks Obtained: " + obtainedMarks);
// document.write("<br>");
// document.write("Percentage: " + finalPercentage + "%")
// document.write("<br>");

// if (finalPercentage >= 80) {
//     document.write("Grade: A-one")
//     document.write("<br>")
//     document.write("Remarks: Excellent")
// } else if (finalPercentage >= 70) {
//     document.write("Grade: A")
//     document.write("<br>")
//     document.write("Remarks: Good")
// } else if (finalPercentage >= 60) {
//     document.write("Grade: B")
//     document.write("<br>")
//     document.write("Remarks: You need to improve")
// } else if (finalPercentage < 60) {
//     document.write("Grade: Fail")
//     document.write("<br>")
//     document.write("Remarks: Sorry")
// }

// Chapter 9 - 11 = Task No 7 //

// var secretNumber = 3;
// var guessSecretNum = prompt("Hey! Guess the secret number:(range 1 to 10)");

// if (guessSecretNum == secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guessSecretNum > secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry! Incorrect answer");
// }

// Chapter 9 - 11 = Task No 8 //

// var numberInput = prompt("Enter a number to check if it is divisible by 3 or not");

// if (numberInput % 3 == 0) {
//     alert("The given number is divisible by 3");
// } else {
//     alert("The given number is not divisible by 3");
// }

// Chapter 9 - 11 = Task No 9 //
// var $numberInput = prompt("Enter a number to check if it is odd or even");

// if ($numberInput % 2 === 0) {
//     alert("The given number is even");
// } else if ($numberInput % 2 !== 0) {
//     alert("The given number is odd");
// }

// Chapter 9 - 11 = Task No 10 //
// var temperature = prompt("Enter temperature:");

// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("It's Freezing outside.");
// }

// Chapter 9 - 11 = Task No 11 //

// var firstNumber = prompt("Enter first number:")
// var secondNumber = prompt("Enter second number:")
// var operator = prompt("Enter operator");

// if (operator === "+") {
//     alert(firstNumber + secondNumber)
// } else if (operator === "-") {
//     alert(firstNumber - secondNumber)
// } else if (operator === "*") {
//     alert(firstNumber * secondNumber)
// } else if (operator === "/") {
//     alert(firstNumber / secondNumber)
// } else if (operator === "%") {
//     alert(firstNumber % secondNumber)
// } else {
//     alert("your equation is incorrect");
// }

// Chapter 12 - 13 = Task No 1 //

// var userInput = prompt("Enter any number or string below: ");

// if (userInput.charCodeAt(0) <= 90 && userInput.charCodeAt(0) >= 65) {
//     alert("Upper Case");
// } else if (userInput.charCodeAt() <= 122 && userInput.charCodeAt() >= 97) {
//     alert("Lower Case");
// } else {
//     alert("Number");
// }

// Chapter 12 - 13 = Task No 2 //

// var integerOne = window.prompt("Input the First integer");
// var integerTwo = window.prompt("Input the second integer");

// if (parseInt(integerOne) > parseInt(integerTwo,)) {
//     alert("The larger between " + integerOne + " and " + integerTwo + " is " + integerOne + ".");
// } else if (parseInt(integerTwo) > parseInt(integerOne)) {
//     alert("The larger between " + integerOne + " and " + integerTwo + " is " + integerTwo + ".");
// } else {
//     alert(integerOne + " and " + integerTwo + " are equal.");
// }

// Chapter 12 - 13 = Task No 3 //
// var userInput = prompt("Enter any number or string below: ");

// if (userInput > 0) {
//     alert("Positive Integer");
// } else if (userInput < 0) {
//     alert("Negative Integer");
// } else {
//     alert("Zero");
// }

// Chapter 12 - 13 = Task No 4 //

// var testVowel = 'Hello'
// var matched = testVowel.match(/[aeiou]/gi)
// if (matched) {
//     alert(true);
// }
// else {
//     alert(false);
// }

// Chapter 12 - 13 = Task No 5 //

// var passwordVal = "123456";
// var userInput = prompt("Enter your password:");

// if (userInput === "") {
//     alert("Please enter your password");
// } else if (userInput == passwordVal) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }

// Chapter 12 - 13 = Task No 6 //
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }
// alert(greeting);

// Chapter 12 - 13 = Task No 7 //
// var userInput = prompt("Enter time in 24 hrs format like this(1900 = 7pm) :");
// if (userInput >= 0000 && userInput < 1200) {
//     alert("Good Morning")
// } else if (userInput >= 1200 && userInput < 1700) {
//     alert("Good Afternoon")
// } else if (userInput >= 1700 && userInput < 2100) {
//     alert("Good Evening")
// } else if (userInput >= 2100 && userInput < 2359) {
//     alert("Good Evening")
// } else {
//     alert("Wrong Time");
// }

// Chapter 14 - 16 = Task No 1 //

// var emptyArray = [];
// console.log(emptyArray);

// Chapter 14 - 16 = Task No 3 //

// var nameArray = ["Abid", "Ahsan", "Kumail", "Abuzar", "Mehdi"];
// console.log(nameArray);

// Chapter 14 - 16 = Task No 4 //

// var numberArray = [20, 40, 60, 80, 100];
// console.log(numberArray);

// Chapter 14 - 16 = Task No 5 //

// var booleanArr = [true, false];
// console.log(booleanArr);

// Chapter 14 - 16 = Task No 6 //

// var mixedArray = ["Zain", 24, 1996, "Developer"];
// console.log(mixedArray);

// Chapter 14 - 16 = Task No 7 //
// var eduQualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

// document.write("<h1>" + "Qualifications:" + "</h1>")
// document.write("<br>");
// for (var i = 0; i < eduQualification.length; i++) {
//     document.write("<b>" + i + ") " + eduQualification[i] + "</b>" + "<br>");
// }

// Chapter 14 - 16 = Task No 8 //

// var totalMarks = 500;
// var studNames = ["Zain", "Rizwan", "Miqdad"];
// var studMarks = [370, 240, 320];

// document.write("<h1>" + "Result:" + "</h1>")
// document.write("<br>");
// document.write("Score of " + studNames[0] + " is " + studMarks[0] + ". Percentage : " + (studMarks[0] / totalMarks) * 100 + "%" + "<br>");
// document.write("Score of " + studNames[1] + " is " + studMarks[1] + ". Percentage : " + (studMarks[1] / totalMarks) * 100 + "%" + "<br>");
// document.write("Score of " + studNames[2] + " is " + studMarks[2] + ". Percentage : " + (studMarks[2] / totalMarks) * 100 + "%");

// Chapter 14 - 16 = Task No 9 //
// var colorArray = ["Red", "Green", "Blue"];

// document.write("<h1>" + "Colors:" + "</h1>")
// document.write("<br>");
// for (var i = 0; i < colorArray.length; i++) {
//     document.write(colorArray[i] + "<br>");
// }

// Chapter 14 - 16 = Task No 9(a) //
// var colorArray = ["red", "green", "blue"];
// var addColorInBeg = prompt("Name the color you want in the beginning of the list:");
// colorArray.unshift(addColorInBeg);
// document.write("<h1>" + "Colors:" + "</h1>")
// document.write("<br>");
// for (var i = 0; i < colorArray.length; i++) {
//     document.write(colorArray[i] + "<br>");
// }

// Chapter 14 - 16 = Task No 9(b) //
// var colorArray = ["red", "green", "blue"];
// var addColorInEnd = prompt("Name the color you want in the End of the list:");
// colorArray.push(addColorInEnd);
// document.write("<h1>" + "Colors:" + "</h1>")
// document.write("<br>");
// for (var i = 0; i < colorArray.length; i++) {
//     document.write(colorArray[i] + "<br>");
// }

// Chapter 14 - 16 = Task No 9(c) //
// var colorArray = ["red", "green", "blue"];
// colorArray.unshift("pink");
// colorArray.unshift("purple");
// document.write("<h1>" + "Colors:" + "</h1>")
// document.write("<br>");
// for (var i = 0; i < colorArray.length; i++) {
//     document.write(colorArray[i] + "<br>");
// }

// Chapter 14 - 16 = Task No 9(d) //
// var colorArray = ["red", "green", "blue", "pink", "purple"];
// colorArray.shift();
// document.write("<h1>" + "Colors:" + "</h1>")
// document.write("<br>");
// for (var i = 0; i < colorArray.length; i++) {
//     document.write(colorArray[i] + "<br>");
// }

// Chapter 14 - 16 = Task No 9(e) //
// var colorArray = ["red", "green", "blue", "pink", "purple"];
// colorArray.pop();
// document.write("<h1>" + "Colors:" + "</h1>")
// document.write("<br>");
// for (var i = 0; i < colorArray.length; i++) {
//     document.write(colorArray[i] + "<br>");
// }

// Chapter 14 - 16 = Task No 9(f) //
// var colorArray = ["red", "green", "blue", "pink", "purple"];
// var userInput = prompt("Enter color you want to add:")
// var indexNum = prompt("Enter index number you want color to add:")
// colorArray.splice(indexNum, 0, userInput);
// document.write("<h1>" + "Colors:" + "</h1>")
// document.write("<br>");
// for (var i = 0; i < colorArray.length; i++) {
//     document.write(colorArray[i] + "<br>");
// }

// Chapter 14 - 16 = Task No 9(g) //
// var colorArray = ["red", "green", "blue", "pink", "purple"];
// var indexNum = prompt("Enter index number you want to start the deletition of color:")
// var userInput = prompt("Enter number how many colors you want to delete:")
// colorArray.splice(indexNum, userInput);
// document.write("<h1>" + "Colors:" + "</h1>")
// document.write("<br>");
// for (var i = 0; i < colorArray.length; i++) {
//     document.write(colorArray[i] + "<br>");
// }

// Chapter 14 - 16 = Task No 10 //

// var studScores = [320, 230, 480, 120];
// document.write("<b>" + "Scores Of Students: " + "</b>" + studScores);
// document.write("<br>");
// studScores.sort();
// document.write("<b>" + "Ordered Scores Of Students: " + "</b>" + studScores);

// Chapter 14 - 16 = Task No 11 //

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// var selectedCities = cities.slice(2, 5);
// document.write("<h1>" + "Cities List:" + "</h1>")
// document.write(cities);
// document.write("<br>");
// document.write("<h1>" + "Selected Cities List:" + "</h1>")
// document.write(selectedCities)

// Chapter 14 - 16 = Task No 12 //

// var arr = ["This", "is", "my", "cat"];
// document.write("<h1>" + "Array" + "</h1>");
// document.write(arr);
// document.write("<br>");

// var result = arr.toString();
// result = arr.join(" ");
// document.write("<h1>" + "String" + "</h1>");
// document.write(result);

// Chapter 14 - 16 = Task No 13 //

// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<h1>" + "Devices" + "</h1>");
// document.write(devices);
// document.write("<br>");
// document.write("<br>");

// var result = devices.shift();
// document.write("<b>" + "Out" + "</b>");
// document.write("<br>");
// document.write(result);
// document.write("<br>");

// var result = devices.shift();
// document.write("<b>" + "Out" + "</b>");
// document.write("<br>");
// document.write(result);
// document.write("<br>");

// var result = devices.shift();
// document.write("<b>" + "Out" + "</b>");
// document.write("<br>");
// document.write(result);
// document.write("<br>");

// var result = devices.shift();
// document.write("<b>" + "Out" + "</b>");
// document.write("<br>");
// document.write(result);

// Chapter 14 - 16 = Task No 14 //

// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<h1>" + "Devices" + "</h1>");
// document.write(devices);
// document.write("<br>");
// document.write("<br>");

// var result = devices.pop();
// document.write("<b>" + "Out" + "</b>");
// document.write("<br>");
// document.write(result);
// document.write("<br>");

// var result = devices.pop();
// document.write("<b>" + "Out" + "</b>");
// document.write("<br>");
// document.write(result);
// document.write("<br>");

// var result = devices.pop();
// document.write("<b>" + "Out" + "</b>");
// document.write("<br>");
// document.write(result);
// document.write("<br>");

// var result = devices.pop();
// document.write("<b>" + "Out" + "</b>");
// document.write("<br>");
// document.write(result);

// Chapter 14 - 16 = Task No 15 //

// var phoneManufac = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<h1>" + "Phone Manufacturers" + "</h1>");
// document.write("<br>");
// document.write("<select>")
// for (let i = 0; i < phoneManufac.length; i++) {
//     document.write("<option>" + phoneManufac[i] + "</option>")
// }
// document.write("</select>")

// Chapter 17 - 20 = Task No 1 //

// var arr = [[]];
// console.log(arr);

// Chapter 17 - 20 = Task No 2 //

// var arr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ];
// console.log(arr);

// Chapter 17 - 20 = Task No 3 //

// for (var i = 0; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// Chapter 17 - 20 = Task No 4 //
// var typenumber = prompt("Enter a number you want a table of:");
// var tableupto = prompt("Enter a number you want a table upto:");
// for (var i = 1; i <= tableupto; i++) {
//     document.write(typenumber + " * " + i + " = " + typenumber * i + "<br>");
// }

// Chapter 17 - 20 = Task No 5 //

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// var i;
// for (i of fruits) {
//     document.write(i + "<br>")
// }
// document.write("<br>");
// document.write("Element at index 0 is apple");
// document.write("<br>");
// document.write("Element at index 1 is bannana");
// document.write("<br>");
// document.write("Element at index 2 is mango");
// document.write("<br>");
// document.write("Element at index 3 is orange");
// document.write("<br>");
// document.write("Element at index 4 is strawberry");

// Chapter 17 - 20 = Task No 6 (a) //
// document.write("<h3>" + "Counting" + "</h3>");
// for (var i = 0; i <= 15; i++) {
//     document.write(i + "<br>");
// }

// Chapter 17 - 20 = Task No 6 (b) //
// document.write("<h3>" + "Reverse Counting" + "</h3>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// Chapter 17 - 20 = Task No 6 (c) //
// document.write("<h3>" + "Even Numbers" + "</h3>");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + ", ");
//     }
// }

// Chapter 17 - 20 = Task No 6 (d) //
// document.write("<h3>" + "Odd Numbers" + "</h3>");
// for (var i = 1; i <= 19; i++) {
//     if (i % 2 !== 0) {
//         document.write(i + ", ");
//     }
// }

// Chapter 17 - 20 = Task No 6 (e) //
// document.write("<h3>" + "Series" + "</h3>");
// for (var i = 2; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + "k" + ", ");
//     }
// }

// Chapter 17 - 20 = Task No 7 //
// let array = ["cake", "applepie", "cookie", "chips", "patties"];
// var searchItems = prompt("Welcome! What do you want to order?");

// if (array.indexOf(searchItems) !== -1) {
//     alert(searchItems + " is available!")
// } else {
//     alert("Sorry " + searchItems + " is not available!");
// }

// Chapter 17 - 20 = Task No 8 //

// var series = [24, 53, 78, 91, 12];

// document.write("<b>" + "Array Items: " + series + "</b>");
// document.write("<br>");
// document.write("<br>");
// document.write("The largest number is: " + Math.max(...series));

// Chapter 17 - 20 = Task No 9 //

// var series = [24, 53, 78, 91, 12];

// document.write("<b>" + "Array Items: " + series + "</b>");
// document.write("<br>");
// document.write("<br>");
// document.write("The smallest number is: " + Math.min(...series));

// Chapter 17 - 20 = Task No 10 //
// var multipleOffive = "";
// var i;
// for (i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         multipleOffive += i + ", ";
//     }
// }
// document.write(multipleOffive)

// Chapter 21 -25 Task No 1 //

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName + " , Have a good day!");

// Chapter 21 -25 Task No 2 //

// var mobilePhoneModel = prompt("Enter your favourite mobile phone model:");
// var lengthOfModel = mobilePhoneModel.length;

// document.write("My favourite phone is: " + mobilePhoneModel);
// document.write("<br />");
// document.write("Length of string: " + lengthOfModel);

// Chapter 21 -25 Task No 3 //

// var nationality = "Pakistani";
// var findIndexOfN = nationality.match(/n/gi).length;

// document.write("String: " + nationality);
// document.write("<br />");
// document.write("Index of 'n': " + findIndexOfN);

// Chapter 21 -25 Task No 4 //

// var helloWorld = "Hello World";
// var findLastIndex = helloWorld.lastIndexOf("l");

// document.write("String: " + helloWorld);
// document.write("<br />");
// document.write("Index of 'l': " + findLastIndex);

// Chapter 21 -25 Task No 5 //

// var nationality = "Pakistani";
// var findIndex = nationality.charAt(3);

// document.write("String: " + nationality);
// document.write("<br />");
// document.write("Character at index 3 : " + findIndex);

// Chapter 21 -25 Task No 6 //

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(lastName);
// alert("Welcome " + fullName + " , Have a good day!");

// Chapter 21 -25 Task No 7 //

// var city = "Hyderabad";
// var replaceCity = city.replace("Hyder", "Islam");

// document.write("City: " + city);
// document.write("<br />");
// document.write("After Replacement: " + replaceCity);

// Chapter 21 -25 Task No 8 //

// var message =
//   "Ali and Sami are best friends. They play cricket and football together";
// var replaceWord = message.replace(/and/gi, "&");

// document.write("Before Replacement of 'And': " + message);
// document.write("<br />");
// document.write("Before Replacement of 'And': " + replaceWord);

// Chapter 21 -25 Task No 9 //

// var numberAsString = "472";
// var convertStringInNum = Number(numberAsString);

// document.write("Value: " + numberAsString);
// document.write("<br />");
// document.write("Type: String");
// document.write("<br />");
// document.write("Value: " + numberAsString);
// document.write("<br />");
// document.write("Type: Number");

// Chapter 21 -25 Task No 10 //

// var userInput = prompt("Enter any word you wantf it to be in capital letters:");
// var capitalLetters = userInput.toUpperCase();

// document.write("User Input: " + userInput);
// document.write("<br />");
// document.write("Upper Case: " + capitalLetters);

// Chapter 21 -25 Task No 11 //

// var userInput = prompt("Enter any word you wantf it to be in capital letters:");
// var lowerCaseUserInput = userInput.toLowerCase();
// var splitUserInput = userInput.split(" ");

// for (let i = 0; i < splitUserInput.length; i++) {
//   splitUserInput[i] =
//     splitUserInput[i].charAt(0).toUpperCase() + splitUserInput[i].slice(1);
// }

// var joinUserInput = splitUserInput.join(" ");

// // console.log(joinUserInput);

// document.write("User Input: " + userInput);
// document.write("<br />");
// document.write("Title Case: " + joinUserInput);

// Chapter 21 -25 Task No 12 //

// var decimalNum = 35.36;
// var convertInString = decimalNum.toString();
// var removeDecimal = convertInString.replace(".", "");

// document.write("Number: " + decimalNum);
// document.write("<br />");
// document.write("Result: " + removeDecimal);

// Chapter 21 -25 Task No 13 //

// var userInput = prompt("Enter a username: ");

// if (/^[a-zA-Z0-9- ]*$/.test(userInput) == false) {
//   alert("Please enter a valid username.");
// } else {
//   alert("Congrtulations! your username is valid.");
// }

// Chapter 21 -25 Task No 14 //

// var bakery = ["cake", "applepie", "cookie", "chips", "patties"];
// var searchItems = prompt("Welcome! What do you want to order?");
// var finalList = searchItems.toLowerCase();

// if (bakery.indexOf(finalList) !== -1) {
//   alert(
//     finalList +
//       " is available at index " +
//       bakery.indexOf(finalList) +
//       " in our bakery"
//   );
// } else {
//   alert("Sorry " + finalList + " is not available!");
// }

// Chapter 21 -25 Task No 15 //

// var userInput = prompt("Enter a password: ");
// var zeroIndex = userInput.charCodeAt(0);

// if (zeroIndex >= 48 && zeroIndex <= 57) {
//   alert("Please shouldnot start with a number");
// } else if (userInput.length !== 6) {
//   alert("Password must be atleast 6 characters long ");
// } else {
//   alert("Login Successful");
// }

// Chapter 21 -25 Task No 16 //

// var university = "University of Karachi";
// var convertStringInArray = university.split("");

// for (var i = 0; i < convertStringInArray.length; i++) {
//   document.write(convertStringInArray[i] + "<br />");
// }

// Chapter 21 -25 Task No 17 //

// var userInput = prompt("Enter any word: ");
// var lastCharInString = userInput.substr(-1);

// document.write("User Input: " + userInput);
// document.write("Last character of input: " + lastCharInString);
// document.write("<br />");

// Chapter 21 -25 Task No 18 //

// var sentence = "The quick brown fox jumps over the lazy dog.";
// var lowerCaseSent = sentence.toLowerCase();
// var occurenceOfpartWord = lowerCaseSent.match(/the/g).length;

// document.write("Text: " + sentence);
// document.write("<br />");
// document.write(
//   "There are " + occurenceOfpartWord + " occurences of the word 'the'."
// );

// Chapter 26 -30 Task No 1 //

// var userInput = prompt("Enter positive integer: (e.g 4.5621)");
// document.write("Number: " + userInput);
// document.write("<br />");

// var roundUserInput = Math.round(userInput);
// document.write("Roundoff value: " + roundUserInput);
// document.write("<br />");

// var floorUserInput = Math.floor(userInput);
// document.write("Floor value: " + floorUserInput);
// document.write("<br />");

// var ceilUserInput = Math.ceil(userInput);
// document.write("Ceil value: " + ceilUserInput);
// document.write("<br />");

// Chapter 26 -30 Task No 2 //

// var userInput = prompt("Enter negative integer: (e.g -4.5621)");
// document.write("Number: " + userInput);
// document.write("<br />");

// var roundUserInput = Math.round(userInput);
// document.write("Roundoff value: " + roundUserInput);
// document.write("<br />");

// var floorUserInput = Math.floor(userInput);
// document.write("Floor value: " + floorUserInput);
// document.write("<br />");

// var ceilUserInput = Math.ceil(userInput);
// document.write("Ceil value: " + ceilUserInput);
// document.write("<br />");

// Chapter 26 -30 Task No 3 //

// var numberOne = -81;
// var numberTwo = Math.abs(numberOne);
// var numberThree = 42;
// var numberFour = Math.abs(numberThree);

// document.write("The absolute value of " + numberOne + " is " + numberTwo);
// document.write("<br />");
// document.write("The absolute value of " + numberThree + " is " + numberFour);

// Chapter 26 -30 Task No 4 //

// var diceNumber = Math.floor(Math.random() * 10);
// document.write("Random dice number: " + diceNumber);

// Chapter 26 -30 Task No 5 //

// var flipCoin = Math.round(Math.random() * 2);
// document.write(flipCoin);
// document.write("<br />");
// if (flipCoin >= 2) {
//   document.write("Random coin value: Heads");
// } else {
//   document.write("Random coin value: Tails");
// }

// Chapter 26 -30 Task No 6 //

// var randomNumber = Math.round(Math.random() * 100);
// document.write("Random number between 1 and 100 is: " + randomNumber);

// Chapter 26 -30 Task No 7 //

// var userInput = prompt("Enter your weight in kg: ");
// var weight = parseInt(userInput);
// document.write("The weight of user is " + weight + " kilograms");

// Chapter 26 -30 Task No 8 //

// var randomNumber = Math.floor(Math.random() * 10 + 1);
// var userInput = prompt("Enter a number between 1 and 10: ");

// if (userInput == randomNumber) {
//   alert("Congratulations! You've guess the right number.");
// } else {
//   alert("Try Again!");
// }

// Chapter 31 -34 Task No 1 //

// var currentDateTime = new Date();
// document.write("<h2>" + currentDateTime + "</h2>");

// Chapter 31 -34 Task No 2 //

// var currentDateTime = new Date();
// var monthList = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var currentMonth = monthList[currentDateTime.getMonth()];
// document.write("<h2>" + "Current Month: " + currentMonth + "</h2>");

// Chapter 31 -34 Task No 3 //

// var currentDateTime = new Date();
// var weekDays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// var currentDay = weekDays[currentDateTime.getDay()];
// document.write("<h2>" + "Today is " + currentDay.substr(0, 3) + "</h2>");

// Chapter 31 -34 Task No 4 //

// var currentDateTime = new Date();
// var weekDays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// var currentDay = weekDays[currentDateTime.getDay()];

// if (currentDay == "Sunday" || currentDay == "Saturday") {
//   alert("It's Funday");
// } else {
//   alert("It's Working Day");
// }

// Chapter 31 -34 Task No 5 //

// var currentDateTime = new Date();
// var weekDays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// var currentDay = weekDays[currentDateTime.getDay()];
// if (currentDay <= 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

// Chapter 31 -34 Task No 6 //

// var currentDateTime = new Date();
// var currentTime = currentDateTime.getTime();
// var currentMinute = currentTime / (1000 * 60);

// document.write("Current Date is: " + currentDateTime);
// document.write("<br />");
// document.write("Elapsed miliseconds since January 1, 1970: " + currentTime);
// document.write("<br />");
// document.write("Elapsed minutes since January 1, 1970: " + currentMinute);

// Chapter 31 -34 Task No 7 //

// var currentDateTime = new Date();
// var currentHour = currentDateTime.getHours();

// if (currentHour > 12) {
//   alert("It's PM");
// } else {
//   alert("It's AM");
// }

// Chapter 31 -34 Task No 8//

// var laterDate = new Date(new Date().getFullYear(), 11, 31);
// document.write("Later Date: " + laterDate);

// Chapter 31 -34 Task No 9//

// var currentDateTime = new Date();
// var ramadanDate = new Date();
// ramadanDate.setDate(-37);

// var timeDifference = Math.abs(currentDateTime - ramadanDate);

// var dayDiff = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// document.write(dayDiff + " days have been passed since 1st Ramadan 2020");

// Chapter 31 -34 Task No 10 //

// var currentDate = new Date();
// document.write("On reference date " + currentDate);
// document.write(", ");
// currentDate.getFullYear(2020);
// var currentYearFirstDate = new Date();
// currentYearFirstDate.setDate(-151);
// var getSeconds =
//   (currentDate.getTime() - currentYearFirstDate.getTime()) / 1000;
// document.write(getSeconds + " had passed since the beginning of 2020");

// Chapter 31 -34 Task No 11 //

// var currentDate = new Date();
// document.write("Current Date: " + currentDate);
// document.write("<br />");
// currentDate.setMinutes(currentDate.getMinutes() - 60);
// document.write("One hour ago, it was " + currentDate);

// Chapter 31 -34 Task No 12//

// var now = new Date();
// document.write("Current Date: " + now);
// document.write("<br />");
// now.setFullYear(1920);
// document.write("100 years back, it was " + now);

// Chapter 31 -34 Task No 13//

// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var userAge = prompt("Enter your age:");
// var birthYear = currentYear - userAge;
// document.write("<h1>")// document.write("Your age is " + userAge);
// document.write("<br />");
// document.write("<br />");
// document.write("Your birth year is " + birthYear);
// document.write("</h1>")

// Chapter 31 -34 Task No 14//
// var currentDateTime = new Date();
// var customerName = prompt("Enter your customerName:");
// var monthList = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var currentMonth = monthList[currentDateTime.getMonth()];

// var numOfUnits = prompt("Enter Number of units you used in current month");
// var chargesPerUnit = 15;
// var netPayableAmount = numOfUnits * chargesPerUnit;
// var latePaymentCharges = 400;
// var grossPayableAmount = netPayableAmount + latePaymentCharges;

// document.write("<h1>" + "K-Electric Bill" + "</h1>");
// document.write("Customer Name: " + "<b>" + customerName + "</b>");
// document.write("<br />");
// document.write("Month: " + "<b>" + currentMonth + "</b>");
// document.write("<br />");
// document.write("No of units: " + "<b>" + numOfUnits + "</b>");
// document.write("<br />");
// document.write("Charges per unit: " + "<b>" + chargesPerUnit + "</b>");
// document.write("<br />");
// document.write("<br />");
// document.write(
//   "Net Amount Payable(within due date): " + "<b>" + netPayableAmount + "</b>"
// );
// document.write("<br />");
// document.write(
//   "Late payment surcharge: " + "<b>" + latePaymentCharges + "</b>"
// );
// document.write("<br />");
// document.write(
//   "Gross Amount Payable(after due date): " + "<b>" + grossPayableAmount + "</b>"
// );

// Chapter 35 -38 Task No 1//
// function dateToday() {
// document.write(new Date());
// }
// dateToday();
// document.write(dateToday());

// Chapter 35 -38 Task No 2 //
// function fullName() {
// var firstname = prompt("Enter First Name:")
// var lastname = prompt("Enter Last Name:")
// alert("Hello! " + firstname + " " + lastname)
// }
// fullName();

// Chapter 35 -38 Task No 3 //
// function addNum() {
// var numberOne = prompt("Enter First Number:")
// var numberTwo = prompt("Enter Second Number:")
// var convertIntoNum = parseInt(numberOne);
// var convertIntoNumCopy = parseInt(numberTwo);
// var numSum = convertIntoNum + convertIntoNumCopy
// document.write("The sum of " + numberOne + " + " + numberTwo + " is = " + numSum)
// }
// addNum();

// Chapter 35 -38 Task No 4 //
// function calcNum() {
// var numberOne = prompt("Enter First Number:")
// var numberTwo = prompt("Enter Second Number:")
// var operatorSign = prompt("Enter Arithmetic Operator:")
// if (operatorSign == "+") {
// document.write("The result is: " + Number(numberOne) + Number(numberTwo));
// }
// else if (operatorSign == "/") {
// document.write("The result is: " + Number(numberOne) / Number(numberTwo));
// }
// else if (operatorSign == "*") {
// document.write("The result is: " + Number(numberOne) * Number(numberTwo));
// }
// else if (operatorSign == "-") {
// document.write("The result is: " + Number(numberOne) - Number(numberTwo));
// }
// else if (operatorSign == "%") {
// document.write("The result is: " + Number(numberOne) % Number(numberTwo));
// }
// else if (operatorSign == null) {
// document.write("Error")
// }
// else if (numberOne == null) {
// document.write("Error")
// }
// else if (numberTwo == null) {
// document.write("Error")
// }
// }
// calcNum();

// Chapter 35 -38 Task No 5 //
// function squareArg(num) {
// var squareFrm = num * num;
// document.write("The square of " + num + " will be " + squareFrm)
// }
// squareArg(3);

// Chapter 35 -38 Task No 6 //
// function factorialOfNum(num) {
// if (num < 0) {
// return -1;
// }
// else if (num == 0) {
// return 1;
// }
// else if (num > 0) {
// return num * factorialOfNum(num - 1);
// }
// }
// console.log(factorialOfNum(6));

// Chapter 35 -38 Task No 7 //
// function counting() {
// var startNum = prompt("Enter number from where to start counting from:");
// var endNum = prompt("Enter number to where end counting:");
// for (var i = Number(startNum); i <= Number(endNum); i++) {
// document.write(i + "<br />")
// }
// }
// counting();

// Chapter 35 -38 Task No 8 //
// function calculateHypotenuse() {
// var base = prompt("Enter base of right angled triangle:")
// var perpendicular = prompt("Enter perpendicular of right angled triangle:")
// var hypotenuse = Math.pow(base, 2) + Math.pow(perpendicular, 2);
// document.write("The hypotenuse of a right angle triangle is : " + hypotenuse);
// document.write("<br />")
// function calculateSquare() {
// var squareHypot = Math.sqrt(hypotenuse);
// document.write("The sqaure of hypotenuse of a right angle triangle is : " + squareHypot);
// }
// calculateSquare();
// }
// calculateHypotenuse();

// Chapter 35 -38 Task No 9 //
// function rectangleArea(width, height) {
// var area = width * height;
// document.write("The area of rectangle is: " + area);
// }
// rectangleArea(5, 4);

// Chapter 35 -38 Task No 10 //
// function palindromeWord(str) {
// var checkStr = "";
// for (var i = str.length - 1; i >= 0; i--) {
// checkStr += str[i];
// }
// if (checkStr === str) {
// document.write(str + " :" + " This is a palindrome word." + "<br />")
// } else {
// document.write(str + " :" + " This is not a palindrome word." + "<br />")
// }
// }
// palindromeWord("refer");// palindromeWord("syringe");

// Chapter 35 -38 Task No 11 //
// function upperCaseFirstLetter(str) {
// var splitStr = str.toLowerCase().split(' ');
// for (var i = 0; i < splitStr.length; i++) {
// splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
// }
// var joinStr = splitStr.join(' ');
// document.write("Expected Output: " + joinStr + "<br />");
// }
// upperCaseFirstLetter("the cat is under the table");
// upperCaseFirstLetter("the quick brown fox");

// Chapter 35 -38 Task No 12 //
// function longestWordInString(str) {
// document.write("String: " + str)
// document.write("<br />");
// var splitString = str.split(" ");
// var longestWord = 0;
// var word = null;
// for (var i = 0; i < splitString.length; i++) {
// if (longestWord < splitString[i].length) {
// longestWord = splitString[i].length;
// word = splitString[i];
// }
// }
// document.write("Longest Word In String: " + word)
// return word;
// }
// longestWordInString('Web Development Tutorial');

// Chapter 35 -38 Task No 13 //
// function letterCount(str, alphabet) {
// var letter = 0;
// for (var i = 0; i < str.length; i++) {
// if (str.charAt(i) == alphabet) {
// letter += 1;
// }
// }
// document.write("alphabet " + "<b>" + alphabet + "</b>" + " is occured " + letter + " times in " + str + "<br />");
// return letter;
// }
// console.log(letterCount('Javascript', 'a'));
// console.log(letterCount('JSResourceS.com', 'o'));

// Chapter 35 -38 Task No 14 //
// function calcCircumference(radius) {
// var pieValue = 3.14;
// var circumference = 2 * pieValue * radius;
// document.write("The circumference of a circle is: " + Math.round(circumference));
// }
// calcCircumference(4);

// function calcArea(radius) {
// var pieValue = 3.14;
// var areaOfCircle = pieValue * (Math.pow(radius, 2));
// document.write("The area of a circle is: " + Math.round(areaOfCircle));
// }
// calcArea(4);

/*Chapter 39-42 Task 1 */

// function power(a, b) {
//     if (b == 0) {
//         return 1
//     }
//     else {
//         return a * power(a, b - 1);
//     }
// };

// console.log(power(4, 3))

/*Chapter 39-42 Task 2 */

// var userInput = prompt("Enter year find whether it is leap year or not: ");

// function isLeapYearOrNot() {
//     if (userInput == "") {
//         alert("Please enter a valid year")
//     }
//     else if (userInput % 400 == 0) {
//         alert(userInput + " is leap year");
//     }
//     else if (userInput % 100 == 0) {
//         alert(userInput + " is not a leap year");
//     }
//     else if (userInput % 4 == 0) {
//         alert(userInput + " is a leap year");
//     }
// }

// isLeapYearOrNot();

/*Chapter 39-42 Task 3 */

// var sides;
// var area;
// var sideA = prompt("Enter side A of triangle:");
// var sideB = prompt("Enter side B of triangle:");
// var sideC = prompt("Enter side C of triangle:");

// function triangleSides() {
//     sides = (sideA + sideB + sideC) / 2;
//     document.write("Sides of a triangle is: " + sides + "<br />");
// }

// triangleSides();

// function areaOfTriangle() {
//     area = Math.sqrt(sides * ((sides - sideA) * (sides - sideB) * (sides - sideC)));
//     document.write("Area of a triangle is: " + area);
// }

// areaOfTriangle();

// console.log(removeVowel("The cat is under the table"));

/*Chapter 39-42 Task 4 */

// var average;
// var percentage;

// function mainFunc() {
//     var mathMarks = prompt("Enter your Math marks:");
//     var engMarks = prompt("Enter your English marks:");
//     var urduMarks = prompt("Enter your Urdu marks:");
//     var marksOne = parseInt(mathMarks);
//     var marksTwo = parseInt(engMarks);
//     var marksThree = parseInt(urduMarks);
//     var marksSum = marksOne + marksTwo + marksThree;
//     var totalMarks = 300;

//     function AverageMarks() {
//         average = Math.round((marksSum) / 3);
//         return average;
//     }
//     function Percentage() {
//         percentage = Math.round((marksSum / totalMarks) * 100);
//         return percentage;
//     }

//     AverageMarks();
//     Percentage();

//     document.write("The average marks is: " + average + "<br />");
//     document.write("The percentage is: " + percentage + "%");
// }

// mainFunc();

/*Chapter 39-42 Task 5 */

// function indexOf(string, character) {
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === character) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(indexOf("welcome to js", "c"))

/*Chapter 39-42 Task 6 */

// function removeVowel(str) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];

//     return str.split('').filter(function (e) {
//         return vowels.indexOf(e.toLowerCase()) == -1;
//     }).join('');
// }

/*Chapter 39-42 Task 7 */

// function vowelOccurrence(string) {
//     let count = 0;
//     let hasVowel = false;

//     for (var letter of string.toLowerCase()) {
//         switch (letter) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':

//                 {
//                     if (hasVowel) {
//                         count++;
//                         hasVowel = false;
//                     } else {
//                         hasVowel = true;
//                     }
//                     break;
//                 }
//             default:
//                 hasVowel = false
//         }
//     }
//     return count;
// }

// console.log(vowelOccurrence("Pleases read this application and give me gratuity"));

/*Chapter 39-42 Task 8 */

// var userInput = prompt("Enter distance between Karachi and Lahore: (in km)");

// function KmInMeter() {
//     var meter = userInput * 1000;
//     var meterFixedValue = Math.round(meter);
//     document.write("The distance b/w Karachi and Lahore in meter is: " + meterFixedValue + "m");
//     document.write("<br />");
// }

// function KmInFeet() {
//     var feet = userInput * 3281;
//     var feetFixedValue = Math.round(feet);
//     document.write("The distance b/w Karachi and Lahore in feet is: " + feetFixedValue + "ft");
//     document.write("<br />");
// }

// function KmInInches() {
//     var inches = userInput * 39370;
//     var inchesFixedValue = Math.round(inches);
//     document.write("The distance b/w Karachi and Lahore in inches is: " + inchesFixedValue + "inch");
//     document.write("<br />");
// }

// function KmInCm() {
//     var centimeter = userInput * 100000;
//     var centimeterFixedValue = Math.round(centimeter);
//     document.write("The distance b/w Karachi and Lahore in centimeter is: " + centimeterFixedValue + "cm");
//     document.write("<br />");
// }

// KmInMeter();
// KmInFeet();
// KmInInches();
// KmInCm();

/*Chapter 39-42 Task 9 */

// var hours = prompt("Enter your overtime hours:");
// var overtime;
// var overtimePay;
// var overtimeRate;
// var breakTime;

// while (hours > 40) {
//     breakTime = prompt("Enter the fractional part of overtime you didnot work:(in hours)");
//     overtime = hours - 40 - breakTime;
//     overtimeRate = 12.00;
//     overtimePay = overtimeRate * overtime;

//     alert("Your overtime pay is: Rs" + overtimePay);
//     break;
// }

// if (hours < 40) {
//     alert("Sorry! no overtime. You have not worked hard enough.");
// }

/*Chapter 39-42 Task 10 */

// var userInput = prompt("Enter amount to withdraw:");

// function amountWithDraw() {
//     var hundred = parseInt(userInput / 100);
//     var fifty = parseInt((userInput % 100) / 50);
//     var ten = parseInt(((userInput % 100) % 50) / 10);

//     document.writeln('You will have ' + hundred + ' hundred notes ' + fifty + ' fifty notes, ' + ten + ' ten notes');
// }

// amountWithDraw();

/*Chapter 43-48 Task 1 */

// function alertOnClick() {
//     alert("Welcome to JS land!");
// }

/*Chapter 43-48 Task 2 */

// function alertBox() {
//     alert("Thanks for purchasing the mobile.")
// }

/*Chapter 43-48 Task 4 */

// function ImageChangeOnMouseOver() {
//     document.getElementById('imageOne').src = 'images/5.jpg';
// }

// function ImageChangeOnMouseOut() {
//     document.getElementById('imageOne').src = 'images/1.jpg';
// }

/*Chapter 43-48 Task 5 */

// var click = 0;
// function increase() {
//     click++;
//     document.getElementById("click").innerHTML = click;
// };

// function decrease() {
//     if (click == 0) {
//         false
//     } else {
//         click--;
//     }
//     document.getElementById("click").innerHTML = click;
// };

/*Chapter 49-52 Task 1 */

// function displayData() {
//     var fullName = document.getElementById("formexample").elements[0].value;
//     var emailAdd = document.getElementById("formexample").elements[1].value;
//     var phoneNum = document.getElementById("formexample").elements[2].value;
//     document.write("<b>" + "Name: " + "</b>" + fullName + "<br />");
//     document.write("<b>" + "Email Address: " + "</b>" + emailAdd + "<br />");
//     document.write("<b>" + "Phone: " + "</b>" + phoneNum + "<br />");
// }
// displayData()

/*Chapter 49-52 Task 2 */

// function readMore() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("readMoreBtn");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }
// readMore();

/*Chapter 53-57 Task 1 */

// function imagePopup(e) {
//     console.log(e.src);
//     var modalImage = document.getElementById("modal-img");
//     modalImage.src = e.src;
// }

/* Chapter 53-57 Task 2 */

// function increaseFontSizeBy10px() {
//     text = document.getElementById('text');
//     style = window.getComputedStyle(text, null).getPropertyValue('font-size');
//     currentSize = parseFloat(style);
//     text.style.fontSize = (currentSize + 10) + 'px';
// }

// function decreaseFontSizeBy10px() {
//     text = document.getElementById('text');
//     style = window.getComputedStyle(text, null).getPropertyValue('font-size');
//     currentSize = parseFloat(style);
//     text.style.fontSize = (currentSize - 10) + 'px';
// }

// var j = document.getElementById("main-content").children;

// console.log(j);

/* Chapter 58-67 Task 1*/

// var k = document.getElementsByClassName("render");
// k.innerHTML;

// console.log(k);

// var l = document.getElementById("first-name").value = "John";
// var m = document.getElementById("last-name").value = "Doe";
// var n = document.getElementById("email").value = "123@abc.com";

// var o = document.getElementById("main-content");
// console.log(o);

/* Chapter 58-67 Task 2*/

// var a = document.getElementById("form-content").nodeType;
// console.log(a);

// var b = document.getElementById("lastName").nodeType;
// var c = document.getElementById("lastName").childNodes[0];
// console.log(c);

// var newText = document.createTextNode("Water");
// var updateText = document.getElementById("lastName").childNodes[0];
// updateText.replaceChild(newText, updateText.childNodes[0]);
// console.log(updateText);

// var d = document.getElementById("main-content").lastChild;
// var e = document.getElementById("main-content").firstChild;

// console.log(d);
// console.log(e);

// var f = document.getElementById("lastName").nextSibling;
// var g = document.getElementById("lastName").previousSibling;

// console.log(f);
// console.log(g);

// var h = document.getElementById("email").parentNode;
// var i = document.getElementById("email").nodeType;

// console.log(h);
// console.log(i);
