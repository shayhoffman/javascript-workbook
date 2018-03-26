'use strict';

//code plan:
//RULES:
/*
    -12 pices per color, so 24 pieces total.
    -pieces in every other square.
    -can only move diagonally, and can jump the opposing color's piece if moving  diagonally if there is an empty square on the opposite side.
MOVING:
    -enter first the row and then the column, so it will look like a single number in the terminal.
    -so, 2 coordinates to start and two to finish, but will look like a single double digit number.
PRINTING THE BOARD/PLAYING:
    -3 rows of 4 pieces, and two empty rows between the two teams
    -2 different color pieces (white and black or red and black usually)
    -must only move diagonally and forward to an open space.
    -cannot move backward
    -can only move if the spot you're moving to is empty.
    -when moving, must check for valid input, and valid move. (pushing, splicing?)
    -if valid input and legal move, then allow the move.
    -should track turns, if no win, then change players.
    -DON'T worry about kinging people or double jumps. make sure you can't jump your own pieces.
KILL FUNCTION:
    -when making a legal jump over an opposing piece, the piece should disappear.
CHECK FOR WIN:
    -fill 4 spots on opposite side of the board OR if no more valid moves possible, then game ends, and count who has more checkers.*/

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checker {
  constructor(color) {
    if (color === 'red') {
      this.symbol = 'R'
      //R will signify which pieces are the red pieces
    } else {
      //B will signify whic pieces are black pieces
      this.symbol = 'B'
    }
  }
}
//how you make the game functional through creating a function to move stuff around?
//class. can tell because of capital letter
//this class is just creating the symbol

class Board {
  constructor() {
    this.checkers = [];
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


  // prints out the board, with the grid and adds the numbers to it
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

  //this prints out the checker pieces to the rows and columns
  this.putCheckersOnBoard = function() {

    //first number in the brackets is row, second is column
    //12 pieces per color
    const redPieces = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ]

    for (let i = 0; i < 12; i++) {
      let redRow = redPieces[i][0];
      let redColumn = redPieces[i][1];
      let redChecker = new Checker('red');
      this.checkers.push(redChecker);
      this.grid[redRow][redColumn] = redChecker;
    }

    //12 pieces per color
    const blackPieces = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ]
      for (let i = 0; i < 12; i++) {
        let blackRow = blackPieces[i][0];
        let blackColumn = blackPieces[i][1];
        let blackChecker = new Checker('black');
        this.checkers.push(blackChecker);
        this.grid[blackRow][blackColumn] = blackChecker;
      }
    }
  }
}


class Game {
  constructor() {
    this.board = new Board();
    this.start = function() {
      this.board.createGrid();
      //creating the game and moving/killing pieces
      this.board.putCheckersOnBoard();
    };
    this.moveChecker = (start, finish) => {
      const startRow = parseInt(start.charAt(0));
      const startColumn = parseInt(start.charAt(1));
      const finishRow = parseInt(finish.charAt(0));
      const finishColumn = parseInt(finish.charAt(1));

      if (inputIsLegal(startRow, startColumn, finishRow, finishColumn) && moveIsLegal(startRow, startColumn, finishRow, finishColumn) && this.board.grid[finishRow][finishColumn] === null) {

        this.board.grid[finishRow][finishColumn] = this.board.grid[startRow][startColumn];
        this.board.grid[startRow][startColumn] = null;

        //below is for taking pieces, or jumping them and making them disappear from the board
        if (Math.abs(finishRow - startRow) === 2) {
          let jumpedRow = finishRow - startRow > 0 ? startRow + 1 : finishRow + 1;
          let jumpedColumn = finishColumn - startColumn > 0 ? startColumn + 1 : finishColumn + 1;
          this.board.grid[jumpedRow][jumpedColumn] = null;
          this.board.checkers.pop();

        }
      } else {
        console.log('Hey, illegal move, friend')
        return false;
      }
    }

  }
}
//Game is a class
//game is going to take in board

const inputIsLegal = (startRow, startColumn, finishRow, finishColumn) => {
  let validSource = (startRow >= 0 && startRow < 8) && (startColumn >= 0 && startColumn < 8);
  let validDestination = (finishRow >= 0 && finishRow < 8) && (finishColumn >= 0 && finishColumn < 8);
  return (validSource && validDestination);
}

const moveIsLegal = (startRow, startColumn, finishRow, finishColumn) => {
  let validRowValue = (Math.abs(finishRow - startRow));
  let validColumnValue = (Math.abs(finishColumn - startColumn));
  if (validRowValue === 1 && validColumnValue === 1) {
    return true;
  } else if (validRowValue === 2 && validColumnValue === 2) {
    return true;
  } else {
    return false;
  }
}

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
