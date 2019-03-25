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
*/
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
//Commit Mix it up answered