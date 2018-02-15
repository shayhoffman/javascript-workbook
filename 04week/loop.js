'use strict'

//Use a for loop to console.log each item in the array carsInReverse
const carsInReverse = ['honda', 'toyota', 'bmw',' jeep', 'ford', 'tesla']
for(let i = 0; i < carsInReverse.length; i++) {
  console.log(carsInReverse[i]);
}

//Create an object (an array with keys and values) called persons with the following data:
let persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5 1925",
  gender: "female",
}

for (let x in persons) {
  console.log(x);
}

for (let x in persons) {
  if(x === 'birthDate'){
    console.log(persons[x]);
  }
}


//Use a while loop to console.log the numbers 1 to 1000.
let number = 1;
while (number < 1001) {
  console.log(number);
  number++;
}

//Use a do...while loop to console.log the numbers from 1 to 1000
let number = 0;
do {
  number ++;
  console.log(number);
} while (number < 1001);

//When is a for loop better than a while loop?
//You would use a for loop when you know how many times the loop is going to iterate through the object and a while loop when you don't know or aren't sure.

//How is the readability of the code affected?
//It seems like the readability depends on what sort of object you're trying to work with. If you have an object that has the variable defined outside the loop, a while loop would be the better choice. However, maybe it's because we've spent more time with for loops, but they seem generally more readable to me because the syntax is more intuitive.

//What is the difference between a for loop and a for...in loop?
//For in loops are for object only. For loops are for arrays.

//What is the difference between a while loop and a do...while loop?
//a while loop will perform the blocl of code for as long as a specified condition is true, and a do while loop will always execute once, even if the condition is never true. 
