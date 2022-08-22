// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// Additional card numbers for testing
const visa1 = [4, 7, 0, 3, 9, 6, 5, 3, 4, 4, 3, 9, 7, 7, 9, 5];
const visa2 = [4, 5, 5, 6, 0, 2, 7, 7, 7, 3, 1, 5, 7, 7, 2, 5];
const visa3 = [4, 4, 8, 5, 8, 4, 9, 3, 6, 5, 0, 3, 2, 6, 4, 7, 9, 9, 3];

const discover1 = [6, 0, 1, 1, 9, 6, 6, 9, 4, 9, 3, 1, 3, 1, 0, 6];
const discover2 = [6, 0, 1, 1, 3, 4, 3, 1, 7, 2, 9, 1, 5, 6, 3, 7];
const discover3 = [6, 0, 1, 1, 3, 8, 6, 2, 4, 8, 5, 7, 4, 0, 5, 1, 2, 6, 4];

const dinersClubCarteBlanche1 = [3, 0, 2, 6, 9, 4, 4, 5, 3, 9, 0, 4, 0, 9];
const dinersClubCarteBlanche2 = [3, 0, 3, 6, 1, 6, 6, 1, 0, 9, 8, 3, 1, 9];
const dinersClubCarteBlanche3 = [3, 0, 4, 0, 0, 2, 8, 7, 6, 0, 0, 6, 2, 7];

const visaElectron1 = [4, 9, 1, 7, 0, 5, 6, 7, 4, 5, 2, 0, 4, 7, 4, 9];
const visaElectron2 = [4, 5, 0, 8, 0, 6, 2, 2, 6, 2, 2, 3, 0, 1, 4, 6];
const visaElectron3 = [4, 5, 0, 8, 5, 1, 8, 9, 3, 7, 5, 7, 5, 3, 1, 4];

const masterCard1 = [2, 7, 2, 0, 9, 9, 0, 6, 2, 3, 9, 6, 5, 6, 5, 1];
const masterCard2 = [2, 7, 2, 0, 9, 9, 7, 6, 8, 0, 8, 0, 7, 3, 1, 2];
const masterCard3 = [5, 4, 2, 6, 8, 2, 8, 2, 6, 7, 8, 5, 3, 7, 8, 5];

const jcb1 = [3, 5, 3, 5, 4, 3, 5, 8, 2, 1, 9, 2, 3, 5, 7, 6];
const jcb2 = [3, 5, 3, 7, 1, 2, 0, 6, 0, 9, 4, 3, 0, 1, 0, 5];
const jcb3 = [3, 5, 3, 3, 5, 3, 8, 8, 2, 4, 0, 1, 8, 0, 7, 2, 3, 5, 6];

const dinersClubInternational1 = [3, 6, 7, 5, 2, 0, 8, 7, 3, 8, 4, 5, 0, 3];
const dinersClubInternational2 = [3, 6, 4, 2, 6, 2, 2, 1, 9, 6, 3, 7, 0, 0];
const dinersClubInternational3 = [3, 6, 8, 7, 9, 0, 1, 0, 5, 2, 7, 6, 5, 8];

const instaPayment1 = [6, 3, 9, 1, 8, 5, 2, 5, 3, 6, 6, 5, 5, 8, 5, 3];
const instaPayment2 = [6, 3, 9, 1, 6, 7, 2, 9, 1, 4, 0, 3, 7, 5, 1, 0];
const instaPayment3 = [6, 3, 7, 0, 2, 6, 6, 3, 9, 9, 3, 6, 4, 2, 7, 8];

const amex1 = [3, 4, 9, 0, 9, 1, 7, 2, 9, 3, 4, 8, 4, 5, 7];
const amex2 = [3, 4, 0, 1, 0, 3, 6, 5, 9, 5, 6, 3, 9, 3, 7];
const amex3 = [3, 4, 2, 6, 5, 3, 0, 8, 5, 8, 9, 9, 0, 6, 3];

const dinersClubNorthAmerica1 = [5, 5, 3, 4, 0, 1, 9, 6, 0, 7, 6, 0, 2, 6, 8, 1];
const dinersClubNorthAmerica2 = [5, 5, 8, 0, 4, 6, 2, 4, 4, 8, 4, 7, 9, 5, 0, 0];
const dinersClubNorthAmerica3 = [5, 4, 6, 7, 6, 1, 9, 5, 7, 6, 2, 7, 5, 3, 1, 9];

const maestro1 = [6, 3, 0, 4, 9, 2, 1, 6, 7, 9, 3, 0, 5, 8, 2, 8];
const maestro2 = [5, 0, 2, 0, 1, 2, 6, 2, 9, 9, 1, 1, 1, 8, 4, 7];
const maestro3 = [6, 7, 6, 3, 4, 5, 4, 1, 2, 8, 8, 0, 5, 2, 6, 7];

const mynumber1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// An array of all additional arrays
const batch2 = [visa1, visa2, visa3, discover1, discover2, discover3, dinersClubCarteBlanche1, dinersClubCarteBlanche2, dinersClubCarteBlanche3, visaElectron1, visaElectron2, visaElectron3, masterCard1, masterCard2, masterCard3, jcb1, jcb2, jcb3, dinersClubInternational1, dinersClubInternational2, dinersClubInternational3, instaPayment1, instaPayment2, instaPayment3, amex1, amex2, amex3, dinersClubNorthAmerica1, dinersClubNorthAmerica2, dinersClubNorthAmerica3, maestro1, maestro2, maestro3];


// Add your functions below:
function validateCred(array) {
  // declaration begins
  let valid = 0; // used to tell whether the credit card number is valid or not.
  let virtualArray = []; // store a copy of credit card numbers from the original array, with '*2' and '-9' applied where needed.
  let arrayLength = array.length; // store the original array's length.
  let lastIndex = arrayLength - 1; // store the index number of the last element in the original array.
  let secondLastIndex = lastIndex - 1; // store the index number of the second last element in the original array.
  let digitsSum = 0; // store the sum of all digits in virtualArray.
  // declaration ends

  console.log('Step 1: ' + array);
  virtualArray[lastIndex] = array[lastIndex]; // set the last element of virtualArray to be the same as array's last element

  // if secondLastIndex is even, all remaining even indexes' value is multiplied by 2
  // if secondLastIndex is odd, all remaining odd indexes' value is multiplied by 2
  // Step 1A, iterate from right to left (every other even index's digit gets doubled)
  if (secondLastIndex % 2 === 0) {
    // console.log('Path A is chosen');
    for (let i = secondLastIndex; i >= 0; i--) {
      // Step 2A, decide if the digit should be doubled, minus by 9, or carry straight to virtualArray
      if (i % 2 === 0) {
        virtualArray[i] = array[i] * 2;
        if (virtualArray[i] > 9) {
          virtualArray[i] -=9;
        }
      }
      else {
        virtualArray[i] = array[i];
      }
    }
  }
  // Step 1B, iterate from right to left (every other odd index's digit gets doubled)
  else {
    // console.log('Path B is chosen');
    for (let i = secondLastIndex; i >= 0; i--) {
      // Step 2B, decide if the digit should be doubled, minus by 9, or carry straight to virtualArray
      if (i % 2 !== 0) {
        virtualArray[i] = array[i] * 2;
        if (virtualArray[i] > 9) {
          virtualArray[i] -=9;
        }
      }
      else {
        virtualArray[i] = array[i];
      }
    }
  }
  
  console.log('Step 2: ' + virtualArray);
  
  // Step 3, sum up the digits in virtualArray
  for (let j = 0; j < arrayLength; j++) {
    digitsSum += virtualArray[j];
  }
  console.log ('Step 3: ' + digitsSum);
  

  // Step 4, check validity
  console.log('Step 4: ' + digitsSum + ' % 10 = ' + digitsSum % 10);
  if (digitsSum % 10 === 0) {
    valid = true;
  }
  


  if (valid) {
    // return true if valid
    console.log('Result: valid');
    console.log('----------------------------------------');
    return true;
  }
  else if (!valid) {
    // return false if invalid
    console.log('Result: invalid');
    console.log('----------------------------------------');
    return false;
  }
}


function findInvalidCards(nestedArr) {
  invalidCards = []; // store arrays that contain invalid credit card numbers
  // check through the nested array for which numbers are invalid
  nestedArr.forEach(function(arrFromNested) {
    if (validateCred(arrFromNested) === false) {
      invalidCards.push(arrFromNested);
    }
  });
  // return another nested array of invalid cards
  // console.log('Invalid cards:');
  return invalidCards;
}



function idInvalidCardCompanies(invalidCardsArr) {
  let allCompanies = { // an object that contains all supported credit card companies, initialized to false, meaning they have not issued cards with invalid numbers.
    amex: false,
    visa: false,
    mastercard: false,
    discover: false
  }
  let invalidCompanyArr = []; // will be used to hold a list of companies that have issued cards with invalid numbers.


  for (let i = 0; i < invalidCardsArr.length; i++) {
    let firstDigit = invalidCardsArr[i][0];

    switch (firstDigit) { // the if statements are to make sure each company name is only added to the invalidCompanyArr array once.
      case 3:
        if (allCompanies.amex === false) {
          allCompanies.amex = true;
          invalidCompanyArr.push('Amex');
        }
        break;
      case 4:
        if (allCompanies.visa === false) {
          allCompanies.visa = true;
          invalidCompanyArr.push('Visa');
        }
        break;
      case 5:
        if (allCompanies.mastercard === false) {
          allCompanies.mastercard = true;
          invalidCompanyArr.push('Mastercard');
        }
        break;
      case 6:
        if (allCompanies.discover === false) {
          allCompanies.discover = true;
          invalidCompanyArr.push('Discover');
        }
        break;
      default:
      console.log('Company not found');
      break;
    }
  }
  
  // return an array of companies
  return invalidCompanyArr;
}



function stringToArrayConverter (string) { // converts a string of numbers into an array of numbers
  let numberArray = []; // store the digits converted from string
  for (let i = 0; i < string.length; i++) {
    numberArray[i] = parseInt(string[i], 10); // parseInt converts string to number
  }
  
  return numberArray;
}


function invalidToValidConverter(invalidNumber) {
  // run validateCred, function call is not used because I need to access digitsSum.
  let array = invalidNumber;
  let valid = 0;
  let virtualArray = [];
  let arrayLength = array.length;
  let lastIndex = arrayLength - 1;
  let secondLastIndex = lastIndex - 1;
  let digitsSum = 0;

  console.log('Step 1: ' + array);
  virtualArray[lastIndex] = array[lastIndex];

  if (secondLastIndex % 2 === 0) {
    for (let i = secondLastIndex; i >= 0; i--) {
      if (i % 2 === 0) {
        virtualArray[i] = array[i] * 2;
        if (virtualArray[i] > 9) {
          virtualArray[i] -=9;
        }
      }
      else {
        virtualArray[i] = array[i];
      }
    }
  }
  else {
    for (let i = secondLastIndex; i >= 0; i--) {
      if (i % 2 !== 0) {
        virtualArray[i] = array[i] * 2;
        if (virtualArray[i] > 9) {
          virtualArray[i] -=9;
        }
      }
      else {
        virtualArray[i] = array[i];
      }
    }
  }
  
  console.log('Step 2: ' + virtualArray);
  
  for (let j = 0; j < arrayLength; j++) {
    digitsSum += virtualArray[j];
  }
  console.log ('Step 3: ' + digitsSum);
  

  console.log('Step 4: ' + digitsSum + ' % 10 = ' + digitsSum % 10);
  if (digitsSum % 10 === 0) {
    valid = true;
  }
  
  if (valid) {
    console.log('Result: valid');
    console.log('Note  : No alteration needed');
    console.log('----------------------------------------');
  }
  else if (!valid) {
    console.log('Result: invalid');
    console.log('Note  : Proceed with alteration');
    console.log('----------------------------------------');
  }
  // make the sum = 0 when % 10
  let digitsSumCopy = digitsSum; // not sure if the code below will alter the valud of digitsSum, they probably won't, but just in case...
  let alterValue = parseInt(digitsSumCopy.toString().split('').pop());
  let alteredArray = array;
  // apply the alteration to the last digit
  // if the alteration makes the digit become more than 9, switch it to minus (-5)
  if (alteredArray[lastIndex] >= alterValue) {
    alteredArray[lastIndex] -= alterValue;
  }
  else {
    let tempValue = 10 - alterValue;
    alteredArray[lastIndex] += tempValue;
    // console.log('Alteration failed, fix required.');
  }
  validateCred(alteredArray);
  // return the altered valid number
}


// validateCred(valid1);
// console.log(findInvalidCards(batch));
// console.log(idInvalidCardCompanies(findInvalidCards(batch2)));
// validateCred(stringToArrayConverter('4024007140779025'));
invalidToValidConverter(mynumber1);

