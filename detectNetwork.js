// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

  // Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.


  //var DcNumDigits = 14;
  //var AmexNumDigits = 15;
  var prefix2 = cardNumber.substr(0,2);
  var prefix3 = cardNumber.substr(0,3);
  var prefix4 = cardNumber.substr(0,4);
  var prefix6 = cardNumber.substr(0,6);

  if (cardNumber.length >= 12 && cardNumber.length <= 19) {
    if (prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304') {
      return 'Maestro';
    }
    if (cardNumber.length >= 16 && cardNumber.length <= 19) {
      if (parseInt(prefix3) >= 624 && parseInt(prefix3) <= 626) {
        return 'China UnionPay';
      }
      if (parseInt(prefix4) >= 6282 && parseInt(prefix4) <= 6288) {
        return 'China UnionPay';
      }
      if (parseInt(prefix6) >= 622126 && parseInt(prefix6) <= 622925) {
        return 'China UnionPay';
      }
    }
  } 
  if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
    if (prefix4 === '4903' || prefix4 === '4905' || prefix4 === '4911' || prefix4 === '4936' || prefix4 === '6333' || prefix4 === '6759') {
      return 'Switch';
    }
    if (prefix6 === '564182' || prefix6 === '633110') {
      return 'Switch';
    }
  } 
  if (cardNumber.length === 14){
    return ((prefix2 === '38' || prefix2 === '39') ? 'Diner\'s Club' : 'Invalid Number');

  } else if (cardNumber.length === 15) {
    return ((prefix2 === '34' || prefix2 === '37') ? 'American Express' : 'Invalid Number');

  } else if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {

    if (parseInt(prefix2) >= 51 && parseInt(prefix2) <= 55){
      return 'MasterCard';
    }

    if (prefix2 === '65' || prefix4 === '6011' || (parseInt(prefix3) >= 644 && parseInt(prefix3) <= 649)){
      return 'Discover';
    }

    return ((prefix2[0] === '4') ? 'Visa' : 'Invalid Number');

  } else {
    return 'Invalid number';
  }
}; 
