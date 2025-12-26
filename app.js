//-------------------------------------------------------------------Chapter # 01 "Alerts"---------------------------------------
//QNO # 01
alert("Assalam O Aliakum!!!")
//QNO # 02
alert("Error! Please enter a valid password")
//QNO # 03
alert("Welcome to JS Land\nHappy Coding!")
//QNO # 04
alert("Welcome to JS land")
alert("Happy Coding!")
//QNO # 05
alert("Heloo...I can run JS through my web browser's console")
//=====================================================================Chapter # 01 End=============================================
//-------------------------------------------------------------------Chapter # 02 "Variables & Strings"--------------------------------
//QNO # 01
var userName
//QNO # 02
var myName = "Aflah Arif"
//QNO # 03
var message = "Hello World!"
alert(message)
//QNO # 04
var name = "Jhone Doe"
alert(name)
var age = "15 years old"
alert(age)
var course = "Certified Mobile Application Developement"
alert(course)
//QNO # 05
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)
//QNO # 06
var email = "abc@gmail.com";
alert("My email address is " + email)
//QNO # 07
var book = "A smarter way to learn Java Script"
alert(book)
//QNO # 08
var msg = "Yah! I can write HTML content through JavaScript<br>";
document.write(msg)
//QNO # 09
var show = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(show)
//=====================================================================Chapter # 02 End=============================================
//-------------------------------------------------------------------Chapter # 03 "Variables For Numbers"--------------------------------
//QNO # 01
var age = "I am 15 years old"
alert(age)
//QNO # 02
var visits = 14
alert("You have visited this site " + visits + " times")
//QNO # 03
var birthYear = 1990
document.write("\nMy birth year is" + birthYear + "<br>Data Type of my declared variable is number<br>")
//QNO # 04
var visitorName = "John Doe"
var productTitle = "T-shirt"
var quantity = 5
document.write(visitorName + " " +  "ordered" + " " + quantity + " " + productTitle + " " + "On XYZ Clothing Store")
//=====================================================================Chapter # 03 End=============================================
//-------------------------------------------------------------------Chapter # 04 "Legal and Illegal"--------------------------------
//QNO # 01
var myname , yourName , age
//QNO # 02
//illegal variables
// var 1user
// var my-name
// var var
// var first name
// var @price;   
//Legal Variables
var myName
var _age
var $price
var user1
var first_name
//QNO # 03
document.write("<h1>Rules for naming JS variables</h1>")
document.write("Variable names can only contain letters, numbers, $ and _. ")
document.write("For example $my_1stVariable<br>")
document.write("Variable names must begin with a letter, $ or _. ")
document.write("For example $name, _name or name<br>")
document.write("Variable names are case sensitive<br>")
document.write("Variable names should not be JS keywords")
//=====================================================================Chapter # 04 End=============================================
//-------------------------------------------------------------------Chapter # 05 "Legal and Illegal"--------------------------------
//QNO # 01
var num1 = 3
var num2 = 5
var sum = num1 + num2
document.write("<br>Sum of 3 and 5 is" + " " + sum)
//QNO # 02
var num1 = 5
var num2 = 3
var subtraction = num1 - num2
document.write("<br>Subtraction of 5 and 3 is" + " " + subtraction)
var num1 = 5
var num2 = 3
var multiplication = num1 * num2
document.write("<br>Multiplication of 5 and 3 is" + " " + multiplication)
var num1 = 5
var num2 = 3
var modulus = num1 % num2
document.write("<br>Modulo of 5 and 3 is" + " " + modulus)
//QNO # 03
// a. Declare a variable
var num
// b. Show value after declaration
document.write("Value after variable declaration is: " + num + "<br>")
// c. Initialize the variable
num = 5
// d. Show initial value
document.write("Initial value: " + num + "<br>")
// e. Increment the variable
num++
// f. Show value after increment
document.write("Value after increment is: " + num + "<br>")
// g. Add 7 to the variable
num = num + 7
// h. Show value after addition
document.write("Value after addition is: " + num + "<br>")
// i. Decrement the variable
num--
// j. Show value after decrement
document.write("Value after decrement is: " + num + "<br>")
// k. Find remainder after dividing by 3
var remainder = num % 3
// l. Output the remainder
document.write("The remainder is: " + remainder)
//QNO # 04
var ticketPrice = 600
document.write("<br>Total cost to buy 5 tickets to movie is" + " " +  600*5 + "PKR")
//QNO # 05
document.write("<br>Table of 4")
document.write("<br> 4 x 1 = 4")
document.write("<br> 4 x 2 = 8")
document.write("<br> 4 x 3 = 12")
document.write("<br> 4 x 4 = 16")
document.write("<br> 4 x 5 = 20")
document.write("<br> 4 x 6 = 24")
document.write("<br> 4 x 7 = 28")
document.write("<br> 4 x 8 = 32")
document.write("<br> 4 x 9 = 36")
document.write("<br> 4 x 10 = 40")
//QNO # 06
var celsiusTemp = 25
var fahrenheitFromC = (celsiusTemp * 9 / 5) + 32
document.write("<br>" + celsiusTemp + "°C" + " " +  "is" + " " + fahrenheitFromC + "°F")
var fahrenheitTemp = 70
var celsiusFromF = (fahrenheitTemp - 32) * 5 / 9;
document.write("<br>" + fahrenheitTemp + "°F" + " " +  "is" + " " + celsiusFromF + "°C")
//QNO # 07
var priceItem1 = 650
var priceItem2 = 100
var quantityItem1 = 3
var quantityItem2 = 7
var shippingCharges = 100
var totalItem1Cost = priceItem1 * quantityItem1
var totalItem2Cost = priceItem2 * quantityItem2
var subtotal = totalItem1Cost + totalItem2Cost
var totalCost = subtotal + shippingCharges
document.write("<br>Total cost of your order is" + " " + totalCost)
//QNO # 08
var totalMarks = 980
var obtainedMarks = 804
var percentage = (obtainedMarks / totalMarks) * 100
document.write("<br>Percentage : " + " " + percentage + "%")
//QNO # 09
var usdAmount = 10
var saudiRiyal = 25
var exchangeRateUSD = 280
var exchangeRateSAR = 75
var pkrFromUSD = usdAmount * exchangeRateUSD
var pkrFromSAR = saudiRiyal * exchangeRateSAR
var totalPKR = pkrFromUSD + pkrFromSAR
document.write("<h2>Currency in PKR</h2>");
document.write("Total Currency in PKR is" + " " + totalPKR)
//QNO # 10
var number = 10
var result = ((number + 5) * 10) / 2
document.write("<br>Evaluation of a expression is:" + " " + result)
//QNO # 11
var currentYear = 2025
var birthYear = 1992
var age = currentYear - birthYear
document.write("<h2>Age Calculator</h2>");
document.write("Current Year: " + " " + currentYear)
document.write("<br>Birth Year: " + " " + birthYear)
document.write("<br>Your Age is: " + " " + age)
//QNO # 12
var PI = 3.142
var radius = 20
var circumference = 2 * PI * radius
var area = PI * radius * radius
document.write("<h2>The Geometrizer</h2>")
document.write("Radius of a circle is:" + " " + radius)
document.write("<br>The circumference is: " + " " + circumference)
document.write("<br>The area is: " + " " + area)
//QNO # 13
var favoriteSnack = "Chips"
var currentAge = 25
var maxAge = 80
var amountPerDay = 2
var yearsRemaining = maxAge - currentAge
var daysRemaining = yearsRemaining * 365 
var lifetimeSupply = daysRemaining * amountPerDay
document.write("<h2>The Lifetime Supply Calculator</h2>")
document.write("Favourite snack is: " + " " + favoriteSnack)
document.write("<br>Current age is: " + " " + currentAge)
document.write("<br>Estimated Maximum age is: " + "" + maxAge)
document.write("<br>Amount of Snacks per day:" + " " + amountPerDay)
document.write("<br>You will be need" + " " + lifetimeSupply + " " + "Chips to last until the rip old age of" + " " + currentAge )

