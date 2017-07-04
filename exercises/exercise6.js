/*
 *  Write a JavaScript program to validate a date in dd/mm/yyyy format. If the user input matches with
 *  the format, the program will return a message "Valid Date" otherwise return a message "Invalid Date!"
 */

var checkDate = function(dateStr) {
  if(!/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr))
    return "Invalid Date!";

  var parts = dateStr.split("/");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10);


  if(year < 1000 || year > 3000 || month === 0 || month > 12)
    return "Invalid Date!";

  var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

  // Adjust for leap years
  if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
    monthLength[1] = 29;

  // Check the range of the day
  if(day > 0 && day <= monthLength[month - 1])
    return "Valid Date!";
  else
    return "Invalid Date!";
};
