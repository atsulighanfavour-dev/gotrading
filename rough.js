document.getElementById("text").innerHTML =
  "which with a hand-drawn, sketchy appearance. It provides an easy-to-";

function comparing() {
  let voteable;
  let age = Number(document.getElementById("age").value);
  if (isNaN(age)) {
    voteable = "This not a number";
  } else {
    voteable =
      age < 18
        ? "You have to be 18 to be eligence to get your 'pvc' to vote"
        : "You are eligible to get your 'pvc' to vote";
  }
  document.getElementById("demo").innerHTML = voteable;
}

//Assignment
let u = 7;
let v = 8;
let z = u < 8;
console.log(z);

let w = 3;
w += 7;
console.log(w);

//let x = 7
//x -= 8
//console.log(x)

let y = 3;
y **= 5;
console.log(y);

let a = 3;
a %= 5;
console.log(a);

let b = 3;
b /= 5;
console.log(b);

//String Assignment with addition
let firstName = "Favour";
firstName += " ho";
console.log(firstName);

//logical Operator
//logical and operator
let c = false;
let d = c && 10;
console.log(d);

let C = true;
let D = C && 10;
console.log(D);

let e = 1;
let f = e && 10;
console.log(e);

//logical not operator
let E = false;
let F = E || 5;
console.log(E);

let G = true;
let H = G || 10;
console.log(H);

let g = 1;
let h = g || 10;
console.log(h);

//logical null operator
let j = null;
let i = j ?? 10;
console.log(i);

let I = false;
let J = I ?? 5;
console.log(J);

let k = true;
let l = k ?? 10;
console.log(k);

//Arithmetic minimum and maximum
let text = "2368";
let min = Math.min(...text);
let max = Math.max(...text);

let answer = "Maximum is: " + max + "<br>" + "Minimun is: " + min;

console.log(answer);

//comparison
//numbers and number vs string
let x = 2;
console.log(x == 8); //display false
console.log(x === 8); //display false
console.log(x != 8); //display true
console.log(x !== 8); //display true
console.log(x > 8); //display false
console.log(x < 8); //display true
console.log(x >= 8); //display false
console.log(x <= 8); //display true
console.log(x == "2"); //display true
console.log(x === "2"); //display false
console.log(x != "2"); //display false
console.log(x !== "2"); //display true
console.log(x == "8"); //display false

//comparing strings
//from my obsevation small string number are bigger than large string number
let L = "2";
console.log(L > "15"); //display true
console.log(L < "15"); //dispay false
//while string numbers are no match for string character
console.log(L > "favour"); //display false
console.log(L < "favour"); //display true
console.log(L === "favour"); //display false
console.log(L == "favour"); // display false

let alphabet = "a";
console.log(alphabet < "b"); //display true

//basic
let hour = new Date().getHours();
if (hour < 12) {
  console.log("Good morning");
} else if (hour < 18) {
  // new line else if condition if the first condition becomes false due to change in time
  console.log("Good afternoon");
} else {
  // new line else condition
  console.log("Good night");
}

//advance
let age1 = 12;
let script;
if (age1 >= 16) {
  script = "you can drive";
} else {
  script = "you cannot drive"; // new line else condition
}
console.log(script);

//nested if statement
let cgpa = 3.5;
let school = "Sdu";
let letter;

if (school !== "Sdu" && cgpa < 4.0) {
  // if both is false and also true it result true
  letter = "you will not get the job offer";
} else if (school == "Sdu" && cgpa >= 3.0) {
  //if both is false it is false while if both is true it is true
  letter = "you will get the job offer";
} else {
  letter = "the offer would be given to someone else";
}
console.log(letter);

// school !== "Sdu" && cgpa < 4.0 // if both is false and also true it result true
//   ? (letter = "you will not get the job offer")
//   : school == "Sdu" && cgpa >= 3.0 //if both is false it is false while if both is true it is true
//     ? (letter = "you will get the job offer")
//     : (letter = "the offer would be given to someone else");

//Ternary operator
let pages = 900;
let book = pages < 700 ? "basic" : "advance";
//True   :  False;
console.log(book);

let price = 10;
let isMember = true;
let discount = isMember ? 0.2 : 0;
let total = 10 - price * discount;

let request = "The price is " + total;
console.log(request);

let day; 
let date = new Date().getDay();
switch (date) {
  case 0:
    day = "Sunday";
    break
  case 1:
    day = "Monday";
    break
  case 2:
    day = "Tuesday";
    break
  case 3:
    day = "Wednesday";
    break
  case 4:
    day = "Thursday";
    break
  case 5:
    day = "Friday";
    break
  case 6:
    day = "Saturday";
}
console.log(day) 

let texts;
switch (new Date().getDay()) {
  case 1:
    texts = "Today is Monday";
    break;
  case 2:
    texts = "Tommorrow is Tuesday";
    break;
  default:
    texts = "I have two weeks left to go back to ozoro";
}
console.log(texts); 


let dates = (new Date().getDay()) 
 switch (dates) {
   case 0:
     text = "Church and fellowship";
     break;
   case 1:
   case 2:
   case 3:
   case 4:
   case 5:
     text = "Today is for learning";
     break;
   case 6:
     text = "Relaxation day";
     //break;
   //default:
     //text = "And so on and so forth..yeah"
}
console.log(text)

console.log(x == 8)//false
console.log(x != 8)//true
console.log(x > 8)//false
//string alphabelt are lesser than number
console.log(x < 8)//true

//The Boolean
const year = new Date().getYear();
let difference;

if (year < 2003) {
 difference = 23;
} else {
 difference = 24;
}
console.log(difference)

let numbers = "";
let r = 1;

while (r < 10) {
  numbers += r;
  r++;
}
console.log(numbers);

//The Boolean function
console.log(Boolean(20 > 30));//false

//Everything With a "Value" is True
console.log(
"100 is " + Boolean(100) + "<br>" +
"3.14 is " + Boolean(3.14) + "<br>" +
"-15 is " + Boolean(-15) + "<br>" +
'"Hello" is ' + Boolean("Hello") + "<br>" +
"'false' is " + Boolean('false') + "<br>" +
"(1 + 7 + 3.14) is " + Boolean(1 + 7 + 3.14)
)

//Everything Without a "value" is false
//undefined, false, null, NaN, empty string, zero, minusZero are "no value"
let s = 0;
console.log(s);

let R = Boolean(false);

// Create a Boolean Object
let S = new Boolean(false);
console.log(R === S);

//The && (AND) Operator
let m = 6;
let n = 3;
console.log(
(m < 10 && n > 1) + "<br>" +
(m < 10 && n < 1))
//The || (OR) Operator
console.log(m > 10 || n > 10)//true
//The ! (Not) Operator
console.log(m == 8)//false
console.log(n != 8)//true

//The Nllish Coeascing Operator (??)
let month = "March";
let days = "";
let result = month ?? days;
console.log(result);

const country = ["Nigeria", "Ghana", "Usa", "South-Africa", "Russia"]
let text2 = "";
for (let i = 0; i < country.length; i++) {
   text2 += country[i] + "<br>";
}
console.log(text2);

//Loop Scope
let Immunization = "";
for (let i = 0; i < 5; i++) {
  Immunization += "Year " + i + "<br>";
}
console.log(Immunization)

//Loop Scope
let o = 10;
for (o = 0; o < 15; o++) {

}
  console.log(o);

//Loop Scope
let O = 10;
for (let O = 0; O < 15; O++){

}
console.log(O)

var boy = 2
for (var boy = 0; boy < 10; boy++) {

}
console.log(boy)

let Characteristic = "";

let P = 0;
while (P < 15) {
  Characteristic += "Type " + P + "<br>";
  P++;
}
console.log(Characteristic) 

//reverse array
const list = [1, 2, 3, 4]
let next = ""
for (let q = list.length - 1; q >= 0; q--) {
  console.log(list[q])
} 

const list1 = [1, 2, 3, 4]
for (let q = 0; q < list1.length; q++) {
} console.log(list)

//arrange array in decending form and track second largest
const fac = [10, 5, 20, 8]
fac.sort ((a, b) => b - a)
console.log(fac[1])

let V = "";
for (i = 0; i < 5; i = i + 2) {
  V += i + "";
}
console.log(V);

let demo = "";
let W = 0;

do {
  demo += "<br>The number is " + W;
  W++;
} while (W < 6);
console.log(demo);

let stop = false
let text3 = ""
loop1: for (let j = 1; j < 5 && !stop; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) {
      stop = true;
      break;
    }
    text3 += i + "<br>";
  }
}
console.log(text3);
console.log(stop);


// function checkAge(age) {
//   if (age < 18) {
//     return: "too young";
//   }
//   else {
//     return: "allowed";
//   }
// }

function checkAge(age) {
  if (age < 18) {
    return "Too young";
  } else {
    return "Allowed";
  }
} 
console.log(checkAge(9));

function myFunction(p1,  p2) {
  return p1 * p2;
}
let result2 = myFunction(12, 15)
console.log(result2)

//Template Strings allow interpolation of expressions in strings:
let price1 = 10;
let VAT = 0.25;
let total1 = `Total: ${(price * (1 + VAT)).toFixed(2)}`;//
console.log(total1)//result 12.50

let header = "Template strings";
let tags = ["template strings", "javascript", "es6"];

let html = `
<h2>${header}</h2>
<ul>
 ${tags.map((tag) => `<li>${tag}</li>`).join("")} 
</ul>
`;
document.getElementById("html").innerHTML = html;

const male = "Oke";
let Letter = male[2]; 
console.log(Letter)

let text4 = "";
function convert() {
  text4 = document.getElementById("by").innerHTML;
  
 // document.getElementById("by").innerHTML = text4.toUpperCase();
  document.getElementById("by").innerHTML = text4.toLowerCase();
  
}

let text5 = "     Hello World!     ";
let text6 = text5.trim();
console.log(text5.length)//display 22
console.log(text6.length)//display 12



 let text7 = "";
function replace() {
  text7 = document.getElementById("buy").innerHTML;
  
  document.getElementById("buy").innerHTML = text7.replace(/Microsoft/i, "W3schools");  
} 

let text8 = "The rain in SPAIN stays mainly in the plain";
const myArr = text8.match(/ain/g);
console.log(myArr.length) 
console.log(myArr)










