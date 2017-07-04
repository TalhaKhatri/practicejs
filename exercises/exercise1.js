/*
 * Write a function findLongestWord() that takes an array of words and returns the length of the longest word.
 *
 */

var findLongestWord = function(words) {
  var length = 0;
  words.forEach(function(word) {
    if(word.length > length) {
      length = word.length;
    }
  }, this);
  return length;
};
