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
  console.log(a ==! a ==! d);                                                 //
  console.log(48 == '48');                                                  //True