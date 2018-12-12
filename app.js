console.log('yay js');
// 1. concatenation is adding something onto another, interpolation is inserting something into something also is new with es6.
// concatenating strings in a console.log would look like console.log("Hey " + "there " + nameVariable);
// using interpolation in a console.log would look like this console.log(`Hey there ${nameVariable}`);

// 2. DRY stands for dont repeat yourself.  You want to pay attention to it because it will make your life much easier
// and your code will be cleaner and more efficient.  IT also uses less memory and will run faster (even though you cant notice)
// We have learned about loops to help us DRY.

// 3. declaring a variable is when you first create a variable, you can input a value at this time.  
// Assigning a value to a variable is when you actually give a variable a value or change it.
// When we say define a variable we are saying that it has a value or is not undefined.

// 4. We will use const for most of this course and especially when we dont want the value to change.
// We will use let when we want to be able to change the value.

// 5. Parent directory is the directory that your current directory is in.

// 6. use the command help

// 7. tab completion is awesome because you don't have to remember the exact spelling of directories and files and it will instantly type it in for you perfectly.

// PART II

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a + b === c);
console.log(a * a === d);
console.log(e === 'Kevin');
console.log(48 == '48');

// PART III
// 1. This is an infinite loop.  because using a while loop it will continue running until false.  
// If you put in the value true then it will never be false.

// 2. This is not an infinite loop because it will give you an error.  
// The expected output will be an error because const cannot be changed.

// 3. 
// declare a variable letters as A.
let letters = "A";
// declare a variable i as 0.
let i = 0;
// make a while loop that will run until i is no longer less than 20.
while (i < 20) {
    // Add on A to the variable letters.
    letters += "A";
    // add 1 to i so the loop continues.
    console.log(letters);
    i++;
}

// PART IV
// For loop seems more streamlined than while loops because you can put all the 
// parameters on the first line and for loop will operate incrementally until the condition is met. 

for (let x = 0; x <= 999; x++) {
    console.log(x);
}

// 3. The three parts of the control statement are: the initialization, the condition, and the afterthought.
//let i = 0;
//i <= 999;
//i++;

for (let j = 999; j >= 0; j--) {
    console.log(j);
}

for (let y = 1; y <= 10; y++){
    console.log(`The value of y is: ${y} of 10`)
}