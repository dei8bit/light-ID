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
const repeat = true;
const no = false; 
const help = " "; 

const options = [{help:"length"}, {help:"repeat"}, {help:"onlyCustom"}, {help:"groups"}, {help:"customChars"},{help:"infoConfig"},{help:"infoCombinations"}]; 
const [lengthInfo, repeatInfo, onlyCustomInfo, groupsInfo, customCharsInfo,configInfo,combinationsInfo] = options ;

const groups = ["num", "low", "upp", "alfa"];
const [num, low, upp, alfa] = groups;



//_ Informative Messagges Reusables:

const msgLengthMini = `➤ **length**: Set the ID length (3-9)
⦿ Default: 5 → ID with 5 characters
🛠️ Example: miniID({length: 7}) // 7 characters`;

const msgLengthMega = `➤ **length**: Set the ID length (3-10000)
⦿ Default: 25 → ID with 25 characters
🛠️ Example: MegaID({length: 100}) // 100 characters`;

const msgRepeat = `➤ **repeat**: Allow repeated characters
⦿ Default: false → No repeated characters
🛠️ Example: miniID({repeat: true}) // Allow repeats`;

const msgOnlyCustom = `➤ **onlyCustom**: Use only custom characters
⦿ Default: false → Adds custom to existing chars
🛠️ Example: miniID({onlyCustom: true}) // Only custom chars`;

const msgGroups = `➤ **groups**: Define character groups (num, low, upp, alfa)
⦿ Default: ["alfa"] → Numbers, lower & uppercase
🛠️ Example: miniID({groups: ["num", "low"]}) // Numbers + lowercase`;

const msgCustomChars = `➤ **customChars**: Use custom characters
⦿ Default: [] → No custom characters
🛠️ Example: miniID({customChars: ["A", "B", "C"]}) // Use custom chars`;

const msgInfoCombinations = `➤ **infoCombinations**: Approximate ID combinations
⦿ Default: false → Not shown
🛠️ Example: miniID({infoCombinations: true}) // Show combinations
⚠️ This is an approximation`;

const msgInfoConfig = `➤ **infoConfig**: Show current config
⦿ Default: false → Not shown
🛠️ Example: miniID({infoConfig: true}) // Show config`;




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

function dataTable(type, utility, defaultValue, options) {

  //$  Columns Table:

  this.type = type;
  this.utility = utility; 
  this.defaultValue = defaultValue; 
  this.options = options; 
}


function miniIDHelp(option) {
  const setting = {};

  setting.length = new dataTable("number", "ID length?", "5", "Between 3-9");
  setting.repeat = new dataTable("boolean", "Repeated characters?", "false", "true/false");
  setting.onlyCustom = new dataTable("boolean", "Only custom chars?", "false", "true/false");
  setting.groups = new dataTable("array", "Character groups?", `["alfa"]`, `["num", "low", "upp","alfa"]`);
  setting.customChars = new dataTable("array", "Custom characters?", "[]", "[any character]");
  setting.infoCombinations = new dataTable("boolean", "Show ID combinations?", "false", "true/false");
  setting.infoConfig = new dataTable("boolean", "Show config info?", "false", "true/false");

  switch (option) {
    case "length":
      console.info(msgLengthMini);
      break;
    case "repeat":
      console.info(msgRepeat);
      break;
    case "onlyCustom":
      console.info(msgOnlyCustom);
      break;
    case "groups":
      console.info(msgGroups);
      break;
    case "customChars":
      console.info(msgCustomChars);
      break;
    case "infoCombinations":
      console.info(msgInfoCombinations);
      break;
    case "infoConfig":
      console.info(msgInfoConfig);
      break;
    default:
      console.log("Welcome to miniID, a simple, versatile ID generator.");
      console.info("miniID() → Generates IDs of 3 to 9 characters.");
      console.info("Configuration options:");
      console.table(setting);
      console.log("To learn more about a parameter, use miniID({help: 'parameter'})");
      break;
  }
}

function MegaIDHelp(option) {
  const setting = {};

  setting.length = new dataTable("number", "ID length?", "25", "Between 3-10000");
  setting.repeat = new dataTable("boolean", "Repeated characters?", "false", "true/false");
  setting.onlyCustom = new dataTable("boolean", "Only custom chars?", "false", "true/false");
  setting.groups = new dataTable("array", "Character groups?", `["alfa"]`, `["num", "low", "upp","alfa"]`);
  setting.customChars = new dataTable("array", "Custom characters?", "[]", "[any character]");
  setting.infoConfig = new dataTable("boolean", "Show config info?", "false", "true/false");

  switch (option) {
    case "length":
      console.info(msgLengthMega);
      break;
      case "repeat":
        console.info(msgRepeat);
        break;
      case "onlyCustom":
        console.info(msgRepeat);
        break;
      case "groups":
        console.info(msgGroups);
        break;
      case "customChars":
        console.info(msgCustomChars);
        break;
      case "infoConfig":
        console.info(msgInfoConfig);
        break;
    default:
      console.log("Welcome to MegaID, an advanced and versatile ID generator.");
      console.info("MegaID() → Generates IDs of 3 to 10,000 characters.");
      console.info("Configuration options:");
      console.table(setting);
      console.log("To learn more about a parameter, use MegaID({help: 'parameter'})");
      break;
  }
}


//# MINI ID:

function miniID({
  length = 5,
  repeat = false,
  customChars = [],
  groups = ["alfa"],
  onlyCustom = false,
  infoCombinations = false,
  infoConfig = false,
  help = false

  } = {}) 
  
  
  {
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


  if (typeof help === "string") {
    // Si `help` es un string, llamamos a la función de ayuda con la opción
    miniIDHelp(help);
    return; // Salimos de la función para no continuar con la generación de IDs
  } else if (help) {
    // En caso de que el valor de help no sea false, pero tampoco un string válido
    console.error("Invalid help option");
    return;
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
      with a total length of: |${setToArray.length}|
      but you demanded an ID with length of: |${length}| 
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


//# MEGAID

function MegaID({
  length = 25,
  repeat = true,
  customChars = [],
  groups = ["alfa"],
  onlyCustom = false,
  infoConfig = false,
  help = false

  
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
  let setToArray = Array.from(chars)

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

  if (infoConfig) {  // returns configuration information if requested
    console.log(`lenght ID ${limit}`);
    repeat ? console.log(`repeat is active`) : console.log(`repeat is not active`)
    if (onlyCustom) {
      customCharsClean.length > 0 ? console.log(`the characters used are ${setToArray}`) : "";
      console.log(`number of custom chars: ${customCharsClean.length} `);
    }
    else { customCharsClean.length > 0 ? console.log(`chars used  are: ${setToArray} and also ${groups}`) : console.log(`chars used  are: ${groups}`); }
  }


  let randomSuperID = ""; // This variable is filled in each iteration of the loop, if there are no previous errors.

  while (randomSuperID.length < limit) {
    const randomChar = getRandomItem(setToArray)
    if (!repeat && randomSuperID.includes(randomChar)) { continue; }
    randomSuperID += randomChar;
  }
  return randomSuperID;
}


export { miniID, MegaID };


