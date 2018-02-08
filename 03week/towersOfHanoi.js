'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//check if valid input
//check for legal move
//if win, game over, board resets

const movePiece = (startStack, endStack) => {
  return stacks[endStack].push(stacks[startStack].pop());
}
//the above movePiece function just makes the game functional, and lets you move pieces around. It allows for the removal of the last item in the first array (or startStack, in this case), through popping it off the end, and pushing it to the endStack, which could be stack b or c.

const isLegal = (startStack, endStack) => {
  // Your code here

}
//there should be a test to check to see whether a user's input is valid
//in this case, it would be checking for correct characters, whether its letters or numbers or both.
//it would also be checking to make sure the input suggestion didn't allow cheating. here, that would mean moving the pieces more than one at a time, or too far over, from peg 1 directly to peg 3.

const checkForWin = (startStack, endStack) => {
  if ((stacks.b.length === 4) || (stacks.c.length === 4)) {
    return "Hey, you won!";
  } else {
    return "Not quite, keep going!";
  }
}
//the above checkForWin function checks for when/if stacks b or c have all four pieces on one stack, or 4 items in the array. If this condition is met for either stack b or c, the user wins.

const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack)){ //would it be better to structure this with && to make sure these conditions are both met?
    movePiece(startStack, endStack)
  } else {
    return "Illegal move, try again!";
    }
  if (checkForWin()) {
    //following code *should* reset the board.
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  }
}
//I modeled the above function sort of after my tic tac toe function, especially the board reset and its placement. I'd originally placed it in the checkForWin function.

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

getPrompt();
