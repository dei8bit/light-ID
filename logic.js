//_ Default characters:

const characters = {
  num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  low: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upp: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  alfa: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
};


//_ Constants to speed up configuration:

const infoCombinations = true;
const infoConfig = true;
const onlyCustom = true;
const help = true;
const repeat = true;
const no = false;
const groups = ["num", "low", "upp", "alfa"];
const [num, low, upp, alfa] = groups;


//_ Functions to obtain information:

function factorial(n) {
  if (n < 0) {
    return undefined; // Undefined factorial for negative numbers
  }
  if (n === 0 || n === 1) {
    return 1n; // 1n represents a BigInt
  }
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

function getAmmountCombinations(totalChars, length, repeat) { // Gets the number of possible combinations given a certain group of characters
  const repeatOption = Math.pow(totalChars, length);
  const noRepeatOption = factorial(totalChars) / factorial(totalChars - length);
  const result = repeat ? repeatOption : noRepeatOption;
  return (`Possible combinations  : ${result.toString()}`);
}

//_ Functions to generate IDs:

function getRandomItem(arr) { // Gets a random Item from a provided array
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generateDefaultID(chars) { // Generates a Default ID for error cases
  let defaultID = "";
  for (let i = 0; i < 5; i++) {
    defaultID += getRandomItem(chars);
  }
  return defaultID;
}


//_  HELP FUNCTIONS:
//+ functions that allow you to check how ID generators work

function data(type, utility, defaultValue, options) {
  this.type = type;
  this.utility = utility;
  this.defaultValue = defaultValue;
  this.options = options;
}


function miniIDHelp(option) {
  const setting = {};

  setting.length = new data("number", "lenght ID?", "5", "numbers from 3 to 9");
  setting.repeat = new data("boolean", "¿Repeated characters or not?", "false", "true or false");
  setting.infoCombinations = new data("boolean", "Number of possible combinations", "false", "true or false");
  setting.infoConfig = new data("boolean", "Chosen configuration", "false", "true or false");
  setting.onlyCustom = new data("boolean", "¿only custom characters?", "false", "true or false");
  setting.groups = new data("array", "¿what character groups?", `["alfa"]`, `["num", "low", "upp","alfa"]`);
  setting.customChars = new data("array", "¿what custom characters?", "[]", "[any character]");

  switch (option) {
    case "length":
      console.log("case length");
      break;
    case "repeat":
      console.log("case repeat");
      break;
    case "onlyCustom":
      console.log("case onlyCustom");
      break;
    case "groups":
      console.log("case groups");
      break;
    case "customChars":
      console.log("case customChars");
      break;

    default:
      console.log("Welcome to light-ID, a simple, versatile and practical ID generator")
      console.info("miniID()--> Generates mini IDs in a range of [3 to 9] characters in length.")
      console.info("↓↓↓↓ It has the following possible configuration parameters ↓↓↓↓")
      console.table(setting);
      console.info("If you want to know specifically how a parameter works, write help 'parameter' ")
      break;
  }
}

function MegaIDHelp(option) {
  const setting = {};

  setting.length = new data("number", "lenght ID?", "25", "numbers from 3 to 10000");
  setting.repeat = new data("boolean", "¿Repeated characters or not?", "false", "true or false");
  setting.onlyCustom = new data("boolean", "¿only custom characters?", "false", "true or false");
  setting.groups = new data("array", "¿what character groups?", `["alfa"]`, `["num", "low", "upp","alfa"]`);
  setting.customChars = new data("array", "¿what custom characters?", "[]", "[any character]");

  switch (option) {
    case "length":
      console.log("case length");
      break;
    case "repeat":
      console.log("case repeat");
      break;
    case "onlyCustom":
      console.log("case onlyCustom");
      break;
    case "groups":
      console.log("case groups");
      break;
    case "customChars":
      console.log("case customChars");
      break;

    default:
      console.log("Welcome to light-ID, a simple, versatile and practical ID generator")
      console.info("miniID()--> Generates mini IDs in a range of [3 to 10000] characters in length.")
      console.info("↓↓↓↓ It has the following possible configuration parameters ↓↓↓↓")
      console.table(setting);
      console.info("If you want to know specifically how a parameter works, write help 'parameter' ")
      break;
  }
}


//# MINI ID:

function miniID({
  length = 5,
  repeat = false,
  infoCombinations = false,
  infoConfig = false,
  onlyCustom = false,
  groups = ["alfa"],
  customChars = [],
  help = { 'solicitado': false, 'option': "" },
} = {}) {
  const limit = Math.min(Math.max(length, 3), 9); // Set a range from 3 to 9
  const customCharsClean = []

  customChars.forEach((item) => {
    if (item.length > 1 || item > 9) { // If the customChars item is a number or a string of more than two digits, it is separated into individual characters.
      customCharsClean.push(...item.toString()); // all characters are converted to string
    } else {
      customCharsClean.push(item.toString()); // all characters are converted to string
    }
  });

  const chars = new Set(groups.reduce((acc, group) => acc.concat(characters[group] || []), []).concat(customCharsClean));
  const totalChars = chars.size; // gets the number of unique elements (62 by default)
  const amountCombinations = getAmmountCombinations(totalChars, limit, repeat); // assigns the number of combinations according to the configuration
  const DefaultID = generateDefaultID(characters[alfa]) // assigns a default ID in case of errors
  const customCharsSet = new Set(customCharsClean); // create a custom character set to eliminate duplicate values
  let setToArray = Array.from(chars); //  creates an initial array with all available characters according to the current configuration.

  if (help) {
    miniIDHelp()
    return " "
  }

  if (onlyCustom) {
    setToArray = Array.from(customCharsSet);
    if (customChars.length === 0) {
      console.warn("Incompatible: A custom character set must be provided in order to use the {onlyCustom} option.")
      console.info(`EXPLANATION: You selected the onlycustom option, which indicates that the ID generator will work only with the characters you provide.
      but instead you have not provided any character in only custom
    `)
      console.log(`You will be given a default ID --> ${DefaultID}`);
      return "";
    }

    if (setToArray.length > 0 && !repeat && setToArray.length < length) {
      console.warn("Invalid operation: The length of customChars must be at least equal to the total number of unique characters required for ID generation when repetition is disabled.");
      console.info(`
EXPLANATION: 
      You Provided These Characters: |${setToArray}|
      with a length of: |${setToArray.length}|
      However, a total length of: |${length}| 
      and the repat option is set in: false => |disabled| 
      Therefore the characters never reach the established length, since they cannot be repeated and are less than the established length.

It has three possible solutions:
    1.- Increase the number of characters until it is equal to or greater than the configured length.
    2.- Decrease the configured length until it is equal to or less than the number of characters.
    3.- set de repeat opion in true.
`);
      console.log(`You will be given a default ID --> ${DefaultID}`);
      return "";
    }
  } else {
    setToArray = Array.from(chars);
  }



  if (infoCombinations) { console.log(amountCombinations) } // returns possible combinations if requested

  if (infoConfig) {  // returns configuration information if requested
    console.log(`lenght ID ${limit}`);
    repeat ? console.log(`repeat is active`) : console.log(`repeat is not active`)
    if (onlyCustom) {
      customCharsClean.length > 0 ? console.log(`the characters used are ${setToArray}`) : "";
      console.log(`number of custom chars: ${customCharsClean.length} `);
    }
    else { customCharsClean.length > 0 ? console.log(`chars used  are: ${setToArray} and also ${groups}`) : console.log(`chars used  are: ${groups}`); }
  }

  let randomMiniID = ""; // This variable is filled in each iteration of the loop, if there are no previous errors.

  while (randomMiniID.length < limit) {
    const randomChar = getRandomItem(setToArray)
    if (!repeat && randomMiniID.includes(randomChar)) { continue; }
    randomMiniID += randomChar;
  }
  return randomMiniID;

}


console.log(miniID({ help }));

//# MEGAID

function MegaID({
  length = 25,
  repeat = true,
  onlyCustom = false,
  groups = ["alfa"],
  customChars = [],
} = {}) {
  const limit = Math.min(Math.max(length, 3), 10000); // Set a range from 3 to 10000

  const customCharsClean = []

  customChars.forEach((item) => {
    if (item.length > 1 || item > 9) { // If the customChars item is a number or a string of more than two digits, it is separated into individual characters.
      customCharsClean.push(...item.toString()); // all characters are converted to string
    } else {
      customCharsClean.push(item.toString());    // all characters are converted to string
    }
  });

  const chars = new Set(groups.reduce((acc, group) => acc.concat(characters[group] || []), []).concat(customCharsClean));
  const DefaultID = generateDefaultID(characters[alfa]) // assigns a default ID in case of errors
  const customCharsSet = new Set(customCharsClean);     // create a custom character set to eliminate duplicate values
  setToArray = Array.from(chars)

  if (onlyCustom) { setToArray = Array.from(customCharsSet) }
  else { setToArray = Array.from(chars) }

  if (setToArray.length > 0 && !repeat && setToArray.length < length) {
    console.warn("Invalid operation: The length of customChars must be at least equal to the total number of unique characters required for ID generation when repetition is disabled.");
    console.info(`
    EXPLANATION: 
    You Provided These Characters: |${setToArray}|
    with a length of: |${setToArray.length}|
    However, a total length of: |${length}| 
    and the repat option is set in: false => |disabled| 
    Therefore the characters never reach the established length, since they cannot be repeated and are less than the established length.

It has three possible solutions:
  1.- Increase the number of characters until it is equal to or greater than the configured length.
  2.- Decrease the configured length until it is equal to or less than the number of characters.
  3.- set de repeat opion in true.
`);
    console.log(`You will be given a default ID --> --> ${DefaultID}`);
    return DefaultID;
  }

  if (onlyCustom) { setToArray = Array.from(customCharsSet) }
  else { setToArray = Array.from(chars) }

  let randomSuperID = ""; // This variable is filled in each iteration of the loop, if there are no previous errors.

  while (randomSuperID.length < limit) {
    const randomChar = getRandomItem(setToArray)
    if (!repeat && randomSuperID.includes(randomChar)) { continue; }
    randomSuperID += randomChar;
  }
  return randomSuperID;
}
