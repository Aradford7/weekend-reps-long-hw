console.log('Test 1..2...3....')

//A]Q + A
//How do we assign a value to a variable?
        //To assign a variable use var(global affect out of scope), let (affects in the scope),
        //const stays const in the scope it is assigned cannot be changed.

        //How do we change the value of a variable?
        // by declare it var something; let something; const something;

//How do we assign an existing variable to a new variable?
        //by define it like var something = {}; or let something = {}; const something = {}

//Remind me, what are declare, assign, and define?
        //declaration //var carName// variable has no value
        //assigning a value to car like number color ect
        //defining a variable needs an assignment operators like =

//What is pseudocoding and why should you do it?
        //helps plan out code and able to to give a outline of the problem most important!

//What percentage of time should be spent thinking about how you're 
//going to solve a problem vs actually typing in code to solve it?
        //programming is 75-90% planning and 10-25% of actual typing!

//B] Strings
//1) Create a variable called firstVariable
    var firstVariable 
//2) Assign it the value of the string "Hello World"
    var firstVariable = "Hello World";
//3)Change the value of this variable to some number
    var firstVariable = 10;
//4) Store the value of the firstVariable in a newVariable called
//secondVariable
    var secondVariable = firstVariable;
//5) Change the value of secondVariable to any string
    var secondVariable = "Goodbye World";
//6) What is the value of the firstVariable?
    console.log(firstVariable); //Answer is 10. like it step 3

//2] Create a variable called yourName and set it equal to your
//name as a string. Then write an expression that takes the string
//"Hello my name is " and the variable your name and a new string to return them
    var yourName = "Slim Shady";
    //var saying = "Hello, my name is";
    
    var saying = "Hello, my name is"+ ' ' + yourName;
    console.log(saying);

//3]Booleans
//Using the provided variable definitions, replace the blanks so that all log 
//statements print true in the console. Answers should be all be valid JS syntax 
//and not weird things that don't make sense but happen to print true to the console.
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);                                                       //True
  console.log(c > d);                                                       //True
  console.log('Name' == 'Name');                                            //True
  console.log(true ==! false);                                              //True
  console.log(false == false == false == false == false ==! false ==! true);//True
  console.log(false == false)                                               //True
  console.log(e == 'Kevin');                                                //True
  console.log(a < b < c);                                                   //True
  console.log(a ==! a ==! d);                                               //True
  console.log(48 == '48');                                                  //True

//The farm
//Declare a variable animal. Set it to be either "cow" or something else.
//Write code that will print out "mooooo" if the it is equal to cow.
//Change your code so that if the variable animal is anything other 
//than a cow, it will print "Hey! You're not a cow."
//Commit.
/*
// REMEMBER f(x) = x + 3   // f(3) = 3 + 3 //answer 6
//printSound(x or animal)=
    //if (animal)
var cow = "moooo"
var chicken = "bawk bawk"

function printSound (animal){
    if (animal === "cow"){
        console.log(cow + " " + "I am THE COW");
    }
    if(animal === "chicken"){
        console.log(chicken +" " +"Hey! You're not a cow.");
    }
}
printSound("chicken")  //input cow or chicken console 
*/
//Driver's Ed
//Make a variable that will hold a person's age. Be semantic.

//Write code that will print out "Here are the keys", if the age
// is 16 years or older.
//If the age is younger than 16, 
//a message should print "Sorry, you're too young."
/*
var age ;

function ageCheck(age){
    if(age >= 16){
        console.log(age + " " +"Here are the keys.");
    } else
        {
        console.log(age + " " + "Sorry, you're too young.");
    }
}
ageCheck(18) 


//f(x)= x+1
function findX(c){
    c = c + 1
    console.log(c);
}
findX(2)
*//*
//Loops
//Remember: USE let when you initialize your loops!
//This is GOOD: for( let i + 0; i < 100; i++)
//This is NO GOOD: for(i = 0; i < 100; i++)
//A. The Basic

//1) Write a loop that will print out all the numbers from 0 to 10, inclusive.
    for( let i = 0; i <= 10; i++){
        console.log(i);
    }
//2)Write a loop that will print out all the numbers from 10 up and including 400.
    for(let i= 10; i <= 400; i++) {
        console.log(i);
    }
//3)Write a loop that will print every 3rd number starting with 12 and going no higher than 4000.
    for (let i = 12; i <= 4000; i+=3) {
        console.log(i);
    }
*/
/*
//Get Even
//1) Print out the even number that are within the range of 1 - 100.
//2) Adjust your code to add a message next to even number only 
//that says:"<-- is an even number".

    for (let i = 1; i <= 100; i++){
        if (i % 2 === 0){
        console.log(i + " " +"is an even number");
            }
        if (i % 2 === 1){
            console.log(i + " "+ "is an odd number");
        }
    }

*/
//Give me Five
//1.For the numbers 0 - 100, print out "I found a number. High five!" 
//2. Add to the code from above to print out "I found a number. 
//Three is a crowd" if the number is a multiple of three.
// Three is a crowd" if the number is a multiple of three.
/*
//if the number is a multiple of five or three.
   for (let i = 0; i <=100; i++){
        if(i % 5 === 0){
            console.log(i + " "+"I found a number. High five!")
        }
        if(i % 3 ===0){
            console.log(i + " "+"Three is a crowd!")
        }
    }
*/
//Savings account
//Write code that will save the sum of all the numbers between 1 - 10 to a variable 
//called bank_account.
//Check your work! Your bank_account should have $55 in it.
/*
var bank_account
for (bank_account = 0, i = 1;
    i <= 10;
    (bank_account += i), i++);
console.log(bank_account);    //Answer 55 */
    
//You got a bonus! Your pay is now doubled each week. Write code that will save 
//the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.
/*
var bank_account
for (bank_account = 0, i = 1;
    i <= 100;
    (bank_account += i*2), i++);
console.log(bank_account);

//Answer 10,100
*/
//Multiples of 3 and 5
//If we list all the natural numbers below 10 that are multiples of 3 or 5, 
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000. 
/*
for (
    var sum = 0, i = 1;
    i <= 1000;
    !(i % 3 && i % 5) && (sum += i), i++
);
console.log(sum); */
//Answer 233168  
//Commit Multiples of 3 and 5 Answered

//Arrays & Control flow
//A. Talk about it:
//What are the things in an array called?
        //elements
//Do Arrays guarantee those things will be in order?
        //Yes unless a function is called upon like split, sort, join, reverse, or 
        //a function that affects the index order
//What real-life thing could you model with an array?
        //list for grocery or anything mostly, they are just the elements you want in 
        //an array
//Commit Array and Control Flow Answered


//B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes.
//var quotes = ["Hi", "How Are You", "Good Bye"];

//C. Accessing elements
//Given the following array const randomThings = [1, 10, "Hello", true]
//How do you access the 1st element in the array?
        //console.log(randomThings[0]);     //arrays index begin at 0
//Change the value of "Hello" to "World".
 /*const randomThings = [1, 10, "Hello", true];
    randomThings[2] = "World";
    console.log(randomThings[2]); */

    /*
//Change values
//Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//What would you write to access the 3rd element of the array?
    const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
        console.log(ourClass[4]);
//Change the value of "Github" to "Octocat"
    ourClass[4] = "Octocat";
    console.log(ourClass[4]);
//Add a new element, "Cloud City" to the array.
    ourClass.push("Cloud City");
    console.log(ourClass[5]);
*//*
//Mix It Up
//Given the following array: const myArray = [5, 10, 500, 20]
//Add the string "Egon" to the end of the array. 
//Add another string of your choice to the end of the array.
    const myArray = [5, 10, 500, 20]
        myArray.push("Egon","Retsuko");
        console.log(myArray[4]);
        console.log(myArray[5]);
//Remove the 5 from the beginning of the array.
        myArray.splice(0,1);  //first is position, second how many take out, third what ur gona add
        console.log(myArray);
//Add the string "Bob Marley" to the beginning of the array.
        myArray.splice(0,0,'Bob Marley');
        console.log(myArray);
//Remove the string of your choise from the end of the array.
        myArray.pop();
        console.log(myArray);
//Reverse this array using Array.prototype.reverse(). Did you mutate the array? 
//What does mutate mean? Did the .reverse() method return anything?
        newArr = myArray;
        myArray.reverse(myArray);
        console.log(newArr);
*/

//Biggie Smalls
//Create a variable that contains an integer.
//Write an if ... else statement that:
//console.log()s "little number" if the number is entered is less than 100
//console.log()s big number if the number is greater than or equal to 100.
//Commit.
/*
var integer = 10;
if (integer <= 100){
    console.log('Little Number');
}
    
else{
    console.log('Big Number');
}
*/ 

//Monkey in the Middle
//Write an if ... else if ... else statement:
//console.log() little number if the number entered is less than 5.
//If the number entered is more than 10, log big number.
//Otherwise, log "monkey". 
//Commit Monkey in the Middle Answered
/*
var integer = 8;
if (integer <= 5);{
    console.log('Little Number');
}
if (integer > 10){
    console.log('Big Number');
}   
else{
    console.log('Monkey');
}
*/
/*
//What's in Your Closet?
//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
//log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" 
//to the console.
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
    
    console.log("Kristyn is rocking that"+" "+kristynsCloset[3] +" "+"today!");
//Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
    kristynsCloset.splice(6,0, "raybans");
    console.log(kristynsCloset);
//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead 
//of yellow.
    kristynsCloset.splice(5,1, "stained knit hat");
    console.log(kristynsCloset);
//Put together an outfit for Thom! Using bracket notation, access the first element
// in Thom's shirts array.
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  let outfit = [];
  outfit.push(thomsCloset[0][0])
  console.log(outfit)
  console.log(thomsCloset)
//In the same way, access one item from Thom's pants array.
  outfit.push(thomsCloset[1][0])
  console.log(outfit)
  console.log(thomsCloset)
//Access one item from Thom's accessories array.
  outfit.push(thomsCloset[2][2])
  console.log(outfit)
  console.log(thomsCloset)
//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce 
//in a grey button-up, jeans and wool scarf!"
  console.log("Thom is looking fierce in a"+" "+outfit[0]+" "+outfit[1]+" "+ outfit[2]);
//Get more specific about what kind of PJs Thom's wearing this winter. 
//Modify the name of his PJ pants to Footie Pajamas.
    thomsCloset[1][2]= "Footie Pajamas";
    console.log(thomsCloset[1][2])
//Commit Whats in Your closet answered
*/
//Functions
//printGreeting
//Do you think you could write a function called printGreeting with a parameter 
//name that returns a greeting with the argument interpolated into the greeting?
/*
var print;
  function printGreeting(print){
      console.log("Hi, I am" + " " + print);
  }
console.log(printGreeting("Slimer"));

//printCool
//Write a function printCool that accepts one parameter, name as an argument. 
//The function should print the name and a message saying that that person is cool.
var print;
  function printCool(print){
      console.log(print + " is cool");
  }
printCool("Captain Reynolds");
*/
/*
//calculateCube
//Write a function calculateCube that takes a single number and prints the volume of 
//a cube made from that number.

  function calculateCube(num){
      console.log(Math.pow(num,3))
  }
console.log(calculateCube(5)); //125
*/


//isVowel
//Write a function isVowel that takes a character (i.e. a string of length 1) and returns 
//true if it is a vowel, false otherwise. The vowel could be upper or lower case.
/*
  function isVowel(abc){
      let str=(abc);
      console.log(str)
      if(str==='A'||str==='E'||str==='I'||str==="O"||str==='U'){
          console.log(abc +" "+ 'is a vowel')
      }
      else{
          console.log(abc +" " +'is NOT a vowel')
      }
  }
isVowel('b');
*/

//getTwoLengths
//Write a function getTwoLengths that accepts two parameters (strings). 
//The function should return an array of numbers where each number is the length of the 
//corresponding string.
/*
    function getTwoLengths(str1, str2){
        let parameters = [];
        parameters.push(str1.length);
        parameters.push(str2.length);
        console.log(parameters)
    }
getTwoLengths("Hank","Hippopopalous");
*/
/*
//getMultipleLengths
//Write a function getMultipleLengths that accepts a single parameter as an argument:
// an array of strings. The function should return an array of numbers where each number 
//is the length of the corresponding string.
    function getMultipleLengths(array){
        newArray = [];
        for(i=0; i < array.length; i++){
            newArray.push(array[i].length)
        }
        console.log(newArray)
    }

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


//maxOfThree
//Define a function maxOfThree that takes three numbers as arguments and returns 
//the largest of them. If all numbers are the same, it doesn't matter which one is returned. 
//If the two largest numbers are the same, one of them should be returned.
    function maxOfThree(num1, num2, num3){
        if(num1 >= num2 && num1 >= num3){
            console.log(num1+ " "+"is the largest")
        }
        else{
            if(num2 >= num3){
                console.log(num2+" "+"is the largest");
            }
            else{
                console.log(num3+ " "+ "is the largest");
            }
        }
    }
console.log(maxOfThree(6, 9, 1));
*/
/*
//printLongestWord
//Write a function printLongestWord that accepts a single argument, an array of strings. 
//The method should return the longest word in the array. In case of a tie, the method should 
//return the word that appears first in the array.
//words.length
    function printLongestWord(word){
        let n=word[0];
        let first=[];
        for(let i=0; i < word.length; i++){
            if(n.length !==word[i].length){
                n=word[i];
            }
            else{
                first=word[i]
            }
            if (n.length===first.length){
                console.log(n)
            }
            else{
                console.log(first)
            }
        }
    }

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
*/


//transmogrify
//Write a Javascript function called transmogrify. This function should accept three arguments, 
//which you can assume will be numbers. Your function should return the "transmogrified" result.
//The transmogrified result of three numbers is the product of the first two numbers, 
//raised to the power of the third number.
//For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
  /*
function transmogrify(num1, num2, pow){
        console.log(Math.pow((num1 * num2),pow));
    }
    console.log(transmogrify(5, 3, 2));  //Answer 225 */

//reverseWordOrder v2
// Without using .split(), .reverse(), or .join(), write a function reverseWordOrder 
//that accepts a single argument, a string. The function should return a string with the 
//order of the words reversed. Don't worry about punctuation.
 //"hello world"[6] "w"
//That and basic loops and variables and arrays are all you need to solve this without 
//the Array methods.
/*
function reverseWordOrder(str){
    var newString 
    for(var i = str.length - 1; i >=0; i--){
        newString += str[i];
    }
    console.log(newString);
}
    reverseWordOrder("Ishmael me Call");
    // "Call me Ishmael"
    
    reverseWordOrder("I use Lâncome on my comb");
    // "comb my on Lâncome use I"
    
//Commit.*/
/*
//Get down and dirty with Math.random()

        function randomNum(){
            console.log(Math.random(10) * 10); //Write a function that will return a random integer between 1                            
        }                                     //and 10. Test it.
        randomNum()

  //Write a function that will return a random integer between 10 and 100. Test it.
        function getRandomInteger(min,max){
            min = Math.ceil(min);
            max = Math.floor(max);
            console.log(Math.floor(Math.random()*(max-min))+min);
        }
        getRandomInteger(10,100);
//Write a function that will return a random number between 532 and 13267. Test it.
        getRandomInteger(532,13267);
//Write a function that will return a random number between 1 and 10. Test it.
        getRandomInteger(1,10);
//Add a few more quotes to the quotes array from question III-B-1 above. Write a 
//function that will take an array as a parameter, and return a random element from that 
//array. Call your function a few times, passing in the quotes array. Give it a nice semantic 
//name like getRandomElement.
const quotes = ['Hi',"Hola","Nihao","Annyeong","Konnichiwa","Bonjour"];
        function getRandomElement(){
            i=Math.floor(Math.random()*5)
            console.log(i)
            console.log(quotes[i])
        }
        getRandomElement()
//Commit.*/

//Objects
//Make a user object
//Create an object called user.
//Write in to the object the key-value pairs for name, email, age, and purchased. 
//Set the value of purchased to an empty array []. Set the other values to whatever you 
//would like.

const user = {
    name: "Jae",
    email: "jaejjv3@gmail.com",
    age: 26,
    purchased:[]
}
console.log(user)
//Commit.

//Update the user
//Our user has changed his or her email address. Without changing the original user object, 
//update the email value to a new email address.
//Our user has had a birthday! Without changing the original user object, increment
// the age value using the postfix operator. Hint: age++
    user.email= "jaejaejae@gmail.com"
    user.age++
    console.log(user);
//Commit.

//Adding keys and values
//You have decided to add your user's location to the data that you want to collect.
//Without changing the original user object, add a new key location to the object,
// and give it a value or some-or-other location (a string).
    user.location = "Los Angeles"
    console.log(user);
//Commit.

//Shopaholic!
//Our user has purchased an item! They have purchased some "carbohydrates".
// Using .push(), add the string "carbohydrates" to the purchased array.
    user.purchased.push("carbohydrates");
//Our user has purchased an item! They have purchased some "peace of mind". 
//Using .push(), add the string "peace of mind" to the purchased array.
    user.purchased.push("peace of mind");
//Our user has purchased an item! They have purchased some "Merino jodhpurs". 
//Using .push(), add the string "Merino jodhpurs" to the purchased array.
    user.purchased.push("Merino jodhpurs");
//Console.log just the "Merino jodhpurs" from the purchased array.
    console.log(user);
    console.log(user.purchased[2]);
//Commit


//Object-within-object
//Remember that you can add an object to an existing object in the same way that you can add 
//any new property/value pair.
//If we want to give our user a friend with a name and age, we could write:
//When we console.log user, we would see the friend object added to our user object.
user.friend = {
    name: "Jaejoong Kim",
    age:33,
    location:"Chungdu",
    purchased:[],
}
//Write a friend object into your user object and give the friend a name, age, location, and
// purchased array (empty for now)//Console.log just the friend's name//Console.log just the friend's location
console.log(user.friend.name);
console.log(user.friend.location);

//CHANGE the friend's age to 55
user.friend.age =55;
//The friend has purchased "The One Ring". Use .push() to add "The One Ring" to 
//the friend's purchased array.
user.friend.purchased.push("The One Ring");
//The friend has purchased "A latte". Use .push() to add "A latte" to the friend's
// purchased array.
user.friend.purchased.push("Latte");
//Console.log just "A latte" from the friend's purchased array.
console.log(user.friend);
//Commit.

//Loops
//Write a for loop that iterates over the User's purchased array (NOT the friend's purchased 
//array), and prints each element to the console.

console.log(user)
console.log(user.purchased.length)
    for(let i=0; i < user.purchased.length; i++){
        console.log(user.purchased[i])
    }
//Write a for loop that iterates over the Friend's purchased array, and prints each element 
//to the console.
console.log(user.friend)
console.log(user.friend.purchased.length)
    for(let i=0; i < user.friend.purchased.length; i++){
        console.log(user.friend.purchased[i])
    }

//Commit.

// Functions can operate on objects
//Write a single function updateUser that takes no parameters. When the function is run,
// it should:it should increment the user's age by 1,make the user's name uppercase
//The function does not need a return statement, it will merely modify the user object.
function updateUser(){
    user.name=user.name.toUpperCase(user.name);
    user.age+1
}
updateUser()
console.log(user.name)
console.log(user.age)
//Write a function oldAndLoud that performs the exact same tasks as updateUser, 
//but instead of hard-coding it to only work on our user object, make it take a parameter person,
// and have it modify the object that is passed in as an argument when the function is called. 
//Call your oldAndLoud function with user as the argument.
function oldAndLoud(person){
    person.name=person.name.toUpperCase(person.name)
    person.age++
}
oldAndLoud(user.friend)
console.log(user.friend.name)
console.log(user.friend.age)
//Commit.