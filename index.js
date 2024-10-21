var num1 = 3; 
var num2 = 5;
var sum = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${sum}<br>`);

var subtraction = num1 - num2;
document.write(`Subtraction: ${subtraction}<br>`);
var multiplication = num1 * num2;
document.write(`Multiplication: ${multiplication} <br>`);
var division = num1 / num2;
document.write(`Division: ${division} <br>`);
var modulus = num1 % num2;
document.write(`Modulus: ${modulus} <br><br>`);

var myVar;
document.write(`Value after variable declaration is: ${myVar} <br>`);
myVar = 5;
document.write(`Initial value: ${myVar} <br>`);
myVar++;
document.write(`Value after increment is: ${myVar} <br>`);
myVar += 7;
document.write(`Value after addition of 7 is: ${myVar} <br>`);
myVar--;
document.write(`Value after decrement is: ${myVar} <br>`);
var remainder = myVar % 3;
document.write(`The remainder is: ${remainder}<br><br>`);

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write(`The cost of buying 5 tickets is ${totalCost}PKR<br><br>`);

var number = +prompt("Write down the number that you want to print the table");
for (var i = 1; i <= 10; i++) {
  document.write(`${number}  x  ${i} = ${number * i} <br> `);
}
document.write("<br>");
// Celsius to Fahrenheit
var celsius = 30;
var fahrenheit = (celsius * 9/5) + 32;
document.write(`${celsius}°C is ${fahrenheit}°F <br>`);
// Fahrenheit to Celsius
var celsius = (fahrenheit - 32) * 5/9;
document.write(`${fahrenheit}°F is ${celsius}°C<br>`);

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
document.write("<h1>Shoping Cart</h1>")
document.write(`Total cost of your order is ${totalCost}PKR<br>`);

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h1>MARKS SHEET</h1>")
document.write(`Marks Total: ${totalMarks} <br>`);
document.write(`Marks Obtained: ${marksObtained} <br>`);
document.write(`Percentage: ${percentage}%<br>`);

var dollars = 10;
var riyals = 25;
var totalInPKR = (dollars * 277.73) + (riyals * 73.92);
document.write("<h1>Currency PKR </h1>");
document.write(`Total currency in PKR: ${totalInPKR}<br><br>`);

var number = 10;
var result = ((number + 5) * 10) / 2;
document.write(`The result is: ${result}<br><br>`);

var currentYear = +prompt("Enter the Current Year");
var birthYear = +prompt("enter the Birth Of Year");
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write(`They are either ${age2} or ${age1} years old.<br><br>`);

var currentYear = +prompt("Enter the Current Year");
var birthYear = +prompt("enter the Birth Of Year");
var age = currentYear - birthYear;
document.write("<h1>Age Calculator</h1>");
document.write(`Current: ${currentYear}<br>`);
document.write(`Birth Year: ${birthYear}<br>`);
document.write(`Age: ${age}<br><br>`);

var radius = 7;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write(`Radius ${radius}<br>`);
document.write(`The circumference is ${circumference} <br>`);
document.write(`The area is ${area}<br><br>`);

var snack = "chocolate";
var currentAge = 20;
var maxAge = 63;
var amountPerDay = 2;
var totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;
document.write(`You will need ${totalSnacks} ${snack}  to last you until the ripe old age of ${maxAge}`);