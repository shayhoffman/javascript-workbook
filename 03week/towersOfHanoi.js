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

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};


const movePiece = (startStack, endStack) => {
  return stacks[endStack].push(stacks[startStack].pop());
};
//the above movePiece function just makes the game functional, and lets you move pieces around. It allows for the removal of the last item in the first array, or the array you want to pull from (or startStack, in this case), through popping it off the end, and pushing it to the endStack, which could be stack b or c (or a, depending on what stack you're trying to move to/from). However, this function does not ensure legality of moves or order in the arrays. It simply allows the user to pop the last value off their targeted array and move it into a different array (or stack, in this case).

const validIput = (startStack, endStack) => {
  if ((startStack === 'a') && (endStack === 'b' || endStack === 'c')) {
    return true;
  } else if ((startStack === 'b') && (endStack === 'a' || endStack === 'c')) {
    return true;
  } else if ((startStack === 'c') && (endStack === 'a' || endStack === 'b')) {
    return true;
  } else {
    return false;
  }
}
//the above function makes sure that the user is entering a valid input, in this case only a, b, or c. This rules out all other possible letters, and that your start and end stacks correspond. Example: If your startStack is a, then this function necessitates that your endStack can only be one of two options: b or c. The two subsequent else if statements take all other possible start and end points into account and make sure they correspond. It also explicitly specifies what letters can be used. This function also doesn't allow the user to enter nothing or a space into one of the start or end stack options when playing the game in the terminal, and keeps all illegal moves or selections from throwing a messy error that could force the user to start the entire game over instead of making progress from where they made the mistake. (I feel like this also would have worked as a test)

const isLegal = (startStack, endStack) => {
  if (validIput(startStack, endStack)) {

    let movingPieceValue = stacks[startStack][stacks[startStack].length - 1];
    let endPieceValue = stacks[endStack][stacks[endStack].length - 1];

    if ((movingPieceValue < endPieceValue) || (stacks[endStack].length === 0)) {
      return true;
    } else {
      console.log("That's an invalid move! Try again.")
      return false;
      }
  } else {
      console.log("That's an invalid selection! Enter a, b, or c. Try again.")
      return false;
    }
}
//For the above function, you use .length -1 array method to access the last value in an array so the user can move it as a piece. isLegal incorporates the previous function, validIput, and makes it part of the conditional statement in order for the isLegal function to work. The validIput function must be working in order for isLegal to work. In this case, whatever piece you're trying to move into a new array (movingPieceValue) either has to be a smaller value than the last value in the array (endPieceValue) or the array has to be empty. If the user tries to make an illegal move, the function runs as false. If the user tries to select something other than a, b, or c, the function also returns as false. I added descriptive console logs to aid the user (and myself) in order to help them make a valid move, and so I knew which mistake I was making/which part of the function was returning false.

const checkForWin = () => {
  if (stacks.c.length === 4) {
    console.log("You won! Play again!")
    return true;
  } else {
    return false;
    }
};
//the above checkForWin function checks for when/if stack c has all four pieces on stack c, or 4 items in the array. This doesn't check for order because the isLegal function makes sure the order is correct, and the validIput function makes sure there can only be three possible letters used. If this condition is met for stack c, the user wins.

const towersOfHanoi = (startStack, endStack) => {
   if (isLegal(startStack, endStack)){
     //note to self: would it be better to structure this with && to make sure isLegal and movePiece conditions are both met? Would this even be functional? not sure.
    movePiece(startStack, endStack)
    }
 if (checkForWin()){
   stacks = {
     a: [4, 3, 2, 1],
     b: [],
     c: []
   }
  }
};
//I modeled the above function sort of after my tic tac toe function, especially the board reset and its placement. I'd originally placed it inside the checkForWin function. in this function, the code is first checking to see if the move the user makes is legal through the isLegal function, and if it is, then it runs the movePiece function. Then, if winning conditions are detected (all 4 items in stack c), the board resets to its original state, with all 4 pieces in order on stack a, allowing the user to play again.

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

//Tests below

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });

  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), false);
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();
//side note: I had issues with this FOREVER because this last getPrompt was in the wrong place. I had it above the tests, and had written the tests below it. Woo! Note to self forever: always have the above final getPrompt(); in the right place. UNDER the tests.
}
