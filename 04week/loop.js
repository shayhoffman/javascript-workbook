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

for(let i = 0; i < 1001; i++) {
  console.log(i)
}
