'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/* I need at least two more functions to meet the benchmarks for this assignment. I will probably complete this and then find out there's a bunch of bugs and a way easier way, but leggo. */
/*Based on the tests, I need at least three functions. One of which will probably be specifically to address the vowel test. Would probably be best to use an if statement to look for vowels at the beginning of my chosen word, or in this case, a bunch of string. IF the word matches the criteria, then I will have it return the word+way.  */
/* For any other words, it seems intuitive just to use a function that moves the first letter to the end of the word (maybe using an array method?) and then adding ay.*/
/* The first function below splits the word or string into an array of substrings, which allows the following functions to move letters (which now make up the new array) around. */
/* It seems like maybe a good idea to establish string as a global variable so it can be used for all functions without having to re-write it for each function*/

let word = String

function letters(word) {
    return word.split('')
}

function pigLatin(word) {
  const vowelArray = ["a", "e", "i", "o", "u"]
  if (vowelArray.includes(word[0])) {
    console.log("firstIsVowel")
        return word=word+"way";
  }else if (chars = letters(word)){
    console.log("firstNotVowel")
      return chars.slice(1).join('') + chars[0] + 'ay';
}
}

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
