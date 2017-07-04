/*
 *  Define a function reverse() that computes the reversal of a (full) string. For example,
 *  reverse("jag testar") should return the string "ratset gaj".
 */

var reverse = function(words) {
  return words.split("").reverse().join("");
};
