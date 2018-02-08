//1. Write a JavaScript program to display the current day and time.
function findTime(){
  const now = new Date(); //find date
  const date = (now.getMonth() + 1) + "/" + now.getDate(); //display month/day
  const time = now.getHours() + ":" + now.getMinutes(); //display hour:minute
  const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //array for day of the week
  const day = dayArray[now.getDay()]; //get string day of week
  const dateTime = "It is " + day + ", " + date + " at " + time + "."; //display time and date in string
return dateTime;
}

findTime();

//2. Write a JavaScript program to convert a number to a string.

function numToString(num){
  return num.toString();
}
numToString(30)


//3. Write a JavaScript program to convert a string to the number.

function stringToNum(string){
  return Number(string);
}
stringToNum('89')


//4. Write a JavaScript program that takes in different datatypes and prints out what type they are.

function dataType(type){
  return typeof(type);
}
dataType('eklgjheoh')


//5. Write a JavaScript program that adds 2 numbers together.

function sumNumbers (num1,num2) {
	return num1 + num2
}
sumNumbers(7, 3000)

//6. Write a JavaScript program that runs only when 2 things are true.

function bothTrue (arg1, arg2) {
  if(arg1 && arg2) {
    return 'both are true'
  }else{
   return 'nope'
  }
}
bothTrue(4, 6);
bothTrue(null, 6);
bothTrue(3, false)

//7. Write a JavaScript program that runs when 1 of 2 things are true.

function oneTrueThing(arg1, arg2) {
  if (arg1 || arg2) {
    return "st least one of these is true";
  } else {
    return "neither of these is true";
    }
}
oneTrueThing(false, true)

//8. Write a JavaScript program that runs when both things are not true.

function bothFalse(arg1, arg2) {
  if (!arg1 && !arg2) {
    return "both of these are false"
  } else {
    return "at least one of the arguments is true"
  }
}
bothFalse(4, 0)
bothFalse(0, 0)
