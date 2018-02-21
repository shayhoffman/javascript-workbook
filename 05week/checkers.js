'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//code plan:

//first step: print the board with checker pieces
//then have to move. two coordinates to start and two coordinates to finish.
  //'41' -> [4][1]
  //str[0] -> 4
  //str[1] -> 1
//then have to check for valid move. check for valid input
  //can only move forward, and diagonally and only if the spot you're moving to is open. CANNOT move backward.
//if valid move, then move. how?
  //could splice.
//check for win: fill 4 spots on opposite side of the board OR if no more valid moves possible, then game ends, and count who has more checkers.
//must track turns. if no win, then change players.
//don't worry about kinging people or double jumps. make sure you cannot jump your own pieces
//HINT from Renee:

function Checker() {
  // Your code here
}
//how you make the game functional through creating a function to move stuff around?
//class. can tell because of capital letter
//this class is just creating the symbol

function Board() {
  this.grid = [];
  // creates an 8x8 array, filled with null values
  this.createGrid = function() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
        //null is just a placeholder. null won't be here forever
        //HINT: change above null to checker
      }
    }
  };
  //board is another class
  //board will have 64 squares
  //each player gets 12 checkers for a total of 24
  //pieces would likely be created in this function

  // prints out the board

  this.viewGrid = function() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  };

  // Your code here
}


function Game() {

  this.board = new Board();

  this.start = function() {
    this.board.createGrid();
    // Your code here
    //game.moveChecker();
  };
}
//Game is a class
//game is going to take in board


function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', function () {
    it('should move a checker', function () {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
