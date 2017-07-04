/*
 *  Design a cash register drawer function that accepts purchase price as the first argument, payment as
 *  the second argument, and cash-in-drawer (cid) as the third argument.
 *
 *  cid is a 2d array listing available currency.
 *
 *  Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the
 *  string "Closed" if cash-in-drawer is equal to the change due.
 *
 *  Otherwise, return change in coin and bills, sorted in highest to lowest order.
 *  In case of multiple solutions, return the one containing the highest value of coin/bill
 */

function drawer(price, cash, cid) {
	var change = [0, 0, 0, 0, 0, 0, 0];
	var notes = [1, 2, 5, 10, 20, 100, 1000];
	var availableNotes = [];
	var totalInRegister = 0;
	var amountToReturn = cash - price;
	
	for (var i = 0; i < notes.length; i++) {
		totalInRegister = totalInRegister + notes[i] * cid[i][1];
		availableNotes[i] = cid[i][1];
	}
	if (totalInRegister < amountToReturn) {
		return "Insufficient Funds";
	}
	if (totalInRegister == amountToReturn) {
		return "Closed";
	}
	
	while (amountToReturn !== 0) {
		for (var j = notes.length - 1; j >= 0; j--) {
			if (notes[j] <= amountToReturn && availableNotes[j] != 0) {
				availableNotes[j]--;
				amountToReturn -= notes[j];
				console.log(notes[j]);
				change[j]++;
				break;
			}
		}
	}
	var cashBack = [];
	for (var k = 0; k < change.length; k++) {
		if (change[k] !== 0) {
			switch (k) {
				case 0:
					cashBack.unshift(['ONE RUPEE', change[k]]);
					break;
				case 1:
					cashBack.unshift(['TWO RUPEES', change[k]]);
					break;
				case 2:
					cashBack.unshift(['FIVE RUPEES', change[k]]);
					break;
				case 3:
					cashBack.unshift(['TEN RUPEES', change[k]]);
					break;
				case 4:
					cashBack.unshift(['TWENTY RUPEES', change[k]]);
					break;
				case 5:
					cashBack.unshift(['ONE HUNDRED RUPEES', change[k]]);
					break;
				case 6:
					cashBack.unshift(['ONE THOUSAND RUPEES', change[k]]);
					break;
				default:
					break;
			}
		}
	}
	return cashBack;
}


 // Example cash-in-drawer array:
 // ['ONE RUPEE', 10],
 // ['TWO RUPEES', 15],
 // ['FIVE RUPEES', 35],
 // ['TEN RUPEES', 9],
 // ['TWENTY RUPEES', 8],
 // ['ONE HUNDRED RUPEES', 5],
 // ['ONE THOUSAND RUPEES', 2]]

 // The currency of the cash in drawer can always assumed to be PKR with denominations in the example above

 // Example call
 // drawer(17, 20, [['ONE RUPEE', 11], ['TWO RUPEES', 15], ['FIVE RUPEES', 36], ['TEN RUPEES', 9], ['TWENTY RUPEES', 8], ['ONE HUNDRED RUPEES', 5], ['ONE THOUSAND RUPEES', 2]]);
 // output [['TWO RUPEES', 1], [ONE RUPEE', 1]]
