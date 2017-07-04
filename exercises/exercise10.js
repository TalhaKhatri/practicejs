/**
 * Given two input strings, write a function to find largest identical substring
 * For example:
 * String
 * Spring
 * Here the largest substring is 'ring'
 *
 * In case there are multiple largest substrings of similar length, the function must return the first largest substring found w.r.t first string, For example:
 * hirespring
 * ringfhire
 * Here, the largest substring returned will be 'hire' and NOT 'ring'
*/

function largestSubstring(str1, str2) {
	if (!str1 || !str2)
		return "";
 
	var sequence = "",
		str1Length = str1.length,
		str2Length = str2.length,
		num = new Array(str1Length),
		maxlen = 0,
		lastSubsBegin = 0;
 
	for (var i = 0; i < str1Length; i++) {
		var subArray = new Array(str2Length);
		for (var j = 0; j < str2Length; j++)
			subArray[j] = 0;
		num[i] = subArray;
	}
	var thisSubsBegin = null;
	for (var i = 0; i < str1Length; i++)
	{
		for (var j = 0; j < str2Length; j++)
		{
			if (str1[i] !== str2[j])
				num[i][j] = 0;
			else
			{
				if ((i === 0) || (j === 0))
					num[i][j] = 1;
				else
					num[i][j] = 1 + num[i - 1][j - 1];
 
				if (num[i][j] > maxlen)
				{
					maxlen = num[i][j];
					thisSubsBegin = i - num[i][j] + 1;
					if (lastSubsBegin === thisSubsBegin)
					{//if the current LCS is the same as the last time this block ran
						sequence += str1[i];
					}
					else //this block resets the string builder if a different LCS is found
					{
						lastSubsBegin = thisSubsBegin;
						sequence= ""; //clear it
						sequence += str1.substr(lastSubsBegin, (i + 1) - lastSubsBegin);
					}
				}
			}
		}
	}
	return sequence;
}