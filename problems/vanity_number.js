/**
 * vanity numbers:
 * given a 4 digit number and dictionary of valid words, write a function that will return a list of valid 4 letter words
 */
function wordsForNumber(validWords, number) {
	debugger;
	//test for valid input
	if(validWords.length == 0 || String(number).length != 4) {
		return [];
	}

	//hash for storing list of valid words for a given number key
	var wordsForNumber = {};

	//hash for mapping nums to chars
	var numToChars = {
		2: ['a', 'b', 'c'],
		3: ['d', 'e', 'f'],
		4: ['g', 'h', 'i'],
		5: ['j', 'k', 'l'],
		6: ['m', 'n', 'o'],
		7: ['p', 'q', 'r', 's'],
		8: ['t', 'u', 'v'],
		9: ['w', 'x', 'y', 'z']
	};

	//build has for charToNumber
	var charToNumber = {};
	for(var i = 2; i <= 9; i++) {
		var chars = numToChars[i];
		for(var j = 0; j < chars.length; j++) {
			charToNumber[chars[j]] = i;
		}
	}

	//iterate through validWords
	for(var i = 0; i < validWords.length; i++) {
		var validWord = validWords[i];
		if(validWord.length != 4) {
			return [];//all valid words supplied must be 4 chars in length.
		}

		//get the number representation of the word, using charToNumber
		var numberForValidWord = "";
		for(var j = 0; j < validWord.length; j++) {
			numberForValidWord += charToNumber[validWord[j]];
		}
		numberForValidWord = parseInt(numberForValidWord);

		//insert it into an array under number key in wordsForNumber
		var existingWordsForNumber = wordsForNumber[numberForValidWord];
		if(existingWordsForNumber == undefined) {
			existingWordsForNumber = [validWord];
		}
		else if(existingWordsForNumber.indexOf(validWord) < 0) {
			existingWordsForNumber.push(validWord);
		}
		wordsForNumber[numberForValidWord] = existingWordsForNumber;
	}
	var words = wordsForNumber[number] || [];
	//console.log(words);
	return words;
}

exports.wordsForNumber = wordsForNumber;