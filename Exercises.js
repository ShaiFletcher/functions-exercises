//Question 1
function myReverse(str) {
  // your code here
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString = newString + str[i];
  }
  return newString;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  var text;
  len = str.length;
  pos = 1;
  for (var i = 0; i < str.length; i++) {
    for (var j = pos; j <= len; j++) {
      text = str.substring(i,j);
      if (text !== "") {
        combinations.push(text);
      }
      console.log('i=' + i + ', j=' + j + ', text = ' + text + ', len=' + len);
    }
    pos++
  }

  return combinations;
}

//Question 3
function allCaps(str) {
  // your code here
  return "";
}

//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
