/*
 *  Write a JavaScript function that checks whether a passed string is palindrome or not.
 */

var isPalindrome = function(word) {
  if(word.split(" ").length > 1) return false;
  var reverse = word.split("").reverse().join("");
  return reverse == word;
};
