'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// an easier way to do this would have been if (hand1 === hand2) {
//return 'its a tie!';
//}

function rockPaperScissors(hand1, hand2) {

  hand1=hand1.toLowerCase().trim();
  hand2=hand2.toLowerCase().trim();

  if (hand1 === 'rock'){
   if (hand2 === 'rock') {
     return 'tie';
   }  else if (hand2 === 'paper'){
        return 'player 2 wins';
   }      else if (hand2 === 'scissors') {
            return 'player 1 wins';
   }          else {
                return 'try again';
    }
  }else if (hand1 === 'paper') {
    if (hand2 === 'rock') {
      return 'player 1 wins';
    }   else if (hand2 === 'paper') {
          return 'tie';
    }       else if (hand2 === 'scissors') {
              return 'player 2 wins';
                else {
                  return 'try again';
                }
    }
  }else if (hand1 === 'scissors') {
    if (hand2 === 'rock') {
      return 'player 2 wins'; {
        else if (hand2 === 'paper') {
          return 'player 1 wins'; {
            else if (hand2 === 'scissors') {
              return 'tie';
                else {
                  return 'try again';
                }
            }
          }
        }
      }
    }
  }
  // Write code here (above, in this case)
  /*step 1 take in hand 1 and take in hand 2.
  code block should compare the two arguments hand1 and hand2.
   4-12 will be if/then conditional statements based on each rule.
   */

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
