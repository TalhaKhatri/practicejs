/*
 *  Write a function to sort a list of words (an array) in alphabetical order
 */

var sort = function(words) {
  return words.sort(function (a, b) {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
  });
};
