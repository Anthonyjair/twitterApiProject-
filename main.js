function square(x) {
  return x * x;
}



function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function(element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function reject(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (!predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}



// Warm Up


// 1.
var coordinates = [
  [1, 2],
  [4, -2],
  [5, 4],
  [0, 7],
  [-1, 1]
];

// 2 (lower).
function coordinatesToObjects(coordinates) {
  return map(coordinates, function(coord) {
    return {
      x: coord[0],
      y: coord[1]
    };
  });
}

// 3.
function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}


function factorials(numbers) {
  return map(numbers,factorial);
}
 
// improving map

// 1. The incrementValues function from yesterday can be written much more elegantly using map. Rewrite that function using our new and improved version of map.

// For convenience, the prompt is reproduced below:

// Write a function called incrementValues that accepts an object as a parameter, and outputs an object with all of its numeric values incremented by one. You'll want to use the updated version of map for this, and you will need to check the type of each value to determine whether or not it should be incremented.

function checkForNumber (number) {
	if(typeof number === "number") {
		return  number + 1 ;	
	}
	return number;
}	



function incrementValues (coll) {
	return map (coll,checkForNumber) 		
}

// 2. Write a function called uppercaseValues that, given an object as a parameter, returns a new object with all of its string values converted to uppercase. You'll want to make use of .toUpperCase() for this:

// "hello".toUpperCase(); // => "HELLO"
// Also, ensure that you only attempt to convert strings to uppercase -- you may want to use typeof for this.

function uppercaseValues (coll) {
	return map(coll,function (string) {
		return string.toUpperCase()
	});
}

// 3. Write a function called countNestedKeys that, given an object where all values are also objects, returns an object that contains the count of keys in each nested object, e.g.


function countNestedKeys(object) {
  
}
countNestedKeys({a: {b: 1, c: 7}, f: {h: 22, g: 12, i: 24}});
// => {a: 2, b: 3}



// Filter

// 1. Write a function called evens that takes an array of numbers as a parameter, and returns an array of only the even numbers in the parameter.
var numbers = [1,2,3,4,5,6];


function evens(numbers) {
	return filter (numbers,function(number) {
		return (number % 2 === 0);
	});
}


// 2. Write a function called multiplesOfThree that takes an array of numbers as a parameter, and returns an array of only the numbers that are multiples of three.

function multiplesOfThree(numbers) {
	return filter (numbers,function(number) {
		return number % 3 === 0;
	});
}

// 3. Write a function called positives that takes an array of numbers as a parameter, and returns an array of only the numbers that are positive.

function positives(numbers) {
	return filter (numbers,function(number) {
		return number >= 0
	});
}

// 4. Write a function called evenLength that takes an array of strings and returns an array of only the strings with an even length.

function evenLength(strings) {
	return filter (strings,function(string) {
		return string.length % 2 === 0
	});
}

// More Practice
// 1. Use filter to write the following functions:

// 	odds: Accepts an array of numbers, and returns the odd ones.

function odds(numbers) {
	return filter (numbers,function(number) {
		return !(number % 2 === 0);
	});
}
	
// multiplesOfThree: Accepts an array of numbers, and returns the ones that are multiples of three.

function multiplesOfThree(numbers) {
	return filter (numbers,function(number) {
		return number % 3 === 0;
	});
}

// negatives: Like positives, but with negatives! 	
function negatives(numbers) {
	return filter (numbers,function(number) {
		return !(number >= 0)
	});
}

// largerThanSix: given an array of numbers, returns those larger than 6.


function largerThanSix(numbers) {
	return filter (numbers, function(number) {
		return number > 6
	})
}
// 	Using filter, write a function startsWithChar that accepts two parameters: an array of strings, and a character (e.g. "a"), and returns an array of only the strings that start with that character:

function startsWithChar(words, character) {
	return filter(words, function(word){
		return word.charAt(0) === character
	})
}

var words = "the quick brown fox jumps over the lazy dog".split(" ");
// startsWithChar(words, "q"); // => ["quick"]
// startsWithChar(words, "t"); // => ["the", "the"]


