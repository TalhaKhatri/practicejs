/*
 *  Write a function filterLongWords() that takes an array of words and an integer i and returns the array
 *  of words that are longer than i.
 */

var filterLongWords = function(words, i) {
  var longerWords = [];
  words.forEach(function(word) {
    if(word.length > i) {
      longerWords.push(word);
    }
  }, this);
  return longerWords;
};
