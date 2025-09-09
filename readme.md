             Ans to the ques no -1

JavaScript provides three ways to declare variables : var , let and const , but they differences in scope, hoisting behaviour, and re-assignment rules.

var : Declares varibles with function or global scope and allow re-declaration and updates with same block.

let : Declares variables with block scope allowing updates but not re-declaration within the same block . 

const: Declares block scoped varibles that cannot be reassigned after their initial assignment.


               Ans to the ques no -2

map() : map() executes the same code on every element in an array and returns a new array with the updated elements.

forEach() : forEach() is used to excute the same code on every element in an array but does not change the array and it returns undefined . 

filter() : filter() checke every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria . 


                 Ans to the ques no -3

function greetings (name) {
    console.log ("Hello", ${name});
};
greetings("Omar faruq");  // Holle, Omar faruq !

The arrow function syntax allows you to create a function expression that produces the same result as the code above . 
      

                 Ans to the ques no -4 

The two most used data structures in JavaScript are object and Array . 

>> Object allow us to create a single entity that stores data items by key . 
>> Arrays allow us to gather data items into an ordered list . 

 
                 Ans to the ques no -5

They are enclosed by backticks (`) instead of single (') or double (") quotes.

single('') :

>>Backticks (``): Used to define a template literal.
>>${}: Used to insert expressions inside the string, such as variables, function calls, or arithmetic operations.

double("") : 

>>Backticks allow multi-line strings naturally. 
>>The console.log outputs the formatted string.