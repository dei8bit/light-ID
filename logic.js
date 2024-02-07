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
//+ Funiones que permiten corroborar como funcionan los generadores de IDs

function data(tipo, utilidad, defaultValue, posibilidades) {
  this.tipo = tipo;
  this.utilidad = utilidad;
  this.defaultValue = defaultValue;
  this.posibilidades = posibilidades;
}


function miniIDHelp(option) {
  const setting = {};

  setting.length = new data("number", "¿longitud del ID?", "5", "numeros del 3 al 9");
  setting.repeat = new data("boolean", "¿Caracteres repetidos o no?", "false", "true o false");
  setting.infoCombinations = new data("boolean", "Cantidad de combinaciones posibles", "false", "true o false");
  setting.infoConfig = new data("boolean", "Configuracion elegida", "false", "true o false");
  setting.onlyCustom = new data("boolean", "¿solo caracteres custom?", "false", "true o false");
  setting.groups = new data("array", "¿que grupos de caracteres?", `["alfa"]`, `["num", "low", "upp","alfa"]`);
  setting.customChars = new data("array", "¿que caracteres custom?", "[]", "[cualquier caracter]");

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
      console.log("Bienvenido a Quick-ID un generador de IDs, simple, versatil y practico")
      console.info("miniID()--> Genera IDs Pequeños en un rango de [3 a 9] caracteres de longitud.")
      console.info("↓↓↓↓ Tiene los siguientes parametros de configuracion posibles ↓↓↓↓")
      console.table(setting);
      console.info("si desea conocer especificamente como funciona un parametro escriba help 'parametro' ")
      break;
  }
}

function MegaIDHelp(option) {
  const setting = {};

  setting.length = new data("number", "¿longitud del ID?", "25", "numeros del 3 al 10000");
  setting.repeat = new data("boolean", "¿Caracteres repetidos o no?", "false", "true o false");
  setting.onlyCustom = new data("boolean", "¿solo caracteres custom?", "false", "true o false");
  setting.groups = new data("array", "¿que grupos de caracteres?", `["alfa"]`, `["num", "low", "upp","alfa"]`);
  setting.customChars = new data("array", "¿que caracteres custom?", "[]", "[cualquier caracter]");
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
      console.log("Bienvenido a Quick-ID un generador de IDs, simple, versatil y practico")
      console.info("MegaID()--> Genera IDs Grandes en un rango de [3 a 10000] caracteres de longitud.")
      console.info("↓↓↓↓ Tiene los siguientes parametros de configuracion posibles ↓↓↓↓")
      console.table(setting);
      console.info("si desea conocer especificamente como funciona un parametro escriba help 'parametro' ")
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
  const limit = Math.min(Math.max(length, 3), 9); // Establece un rango de 3 a 9
  const customCharsClean = []

  customChars.forEach((item) => {
    if (item.length > 1 || item > 9) { // si el item de customChars es un numero o una cadena de mas de dos cifras, se separa en caracteres individuales.
      customCharsClean.push(...item.toString()); // todos los caracteres se convierten a string
    } else {
      customCharsClean.push(item.toString()); // todos los caracteres se convierten a string
    }
  });

  const chars = new Set(groups.reduce((acc, group) => acc.concat(characters[group] || []), []).concat(customCharsClean));
  const totalChars = chars.size; // obtiene el número de elementos únicos (62 por default)
  const amountCombinations = getAmmountCombinations(totalChars, limit, repeat); // asigna la cantidad de combinaciones segun la configuracion
  const DefaultID = generateDefaultID(characters[alfa]) // asigna un ID por defecto en caso de errores
  const customCharsSet = new Set(customCharsClean); // crea un conjunto de caracteres custom para eliminar concurrencias multiples
  let setToArray = Array.from(chars); //  crea un array inicial con todos los caracteres disponibles acorde a la configuracion actual.

  if (help) {

    miniIDHelp()

    return " "
  }

  if (onlyCustom) {
    setToArray = Array.from(customCharsSet);
    if (customChars.length === 0) {
      console.warn("Incompatible: debe proporcionarse un grupo de caracteres custom, para poder usar la opcion {onlyCustom}")
      console.info(`EXPLICACION: Usted selecciono la opcion onlycustom, la cual indica que el generador de IDs trabajara solo con los caracteres que proporcione.
    sin embargo no ha proporcionado ningun caracter en only custom
    `)
      console.log(`Se le brindara un ID por default --> ${DefaultID}`);
      return "";
    }

    if (setToArray.length > 0 && !repeat && setToArray.length < length) {
      console.warn("Operación no válida: la longitud de customChars debe ser al menos igual al número total de caracteres únicos requeridos para la generación del ID cuando la repetición está desactivada.");
      console.info(`
EXPLICACION: 
      Usted Proporciono estos caracteres: |${setToArray}|
      en total: |${setToArray.length}|
      sin embargo esta especificado un largo total de: |${length}| 
      y la repeticion esta: |desactivada| 
      Por ende los caracteres nunca alcanzan la longitud establecida, puesto que no se pueden repetir y son menos que el largo establecido.

Tiene tres soluciones posibles:
    1.- Aumente la cantidad de caracteres hasta que sea igual o mayor que la longitud configurada
    2.- Disminuya la longitud configurada hasta que sea igual o menor que la cantidad de caracteres
    3.- Active la repeticion.
`);
      console.log(`Se le brindara un ID por default --> ${DefaultID}`);
      return "";
    }
  } else {
    setToArray = Array.from(chars);
  }



  if (infoCombinations) { console.log(amountCombinations) } // devuelve las combinaciones posibles si se solicitan

  if (infoConfig) {  // devuelve la informacion de configuracion si se solicita
    console.log(`largo del ID ${limit}`);
    repeat ? console.log(`La repeticion esta activada`) : console.log(`La repeticion esta desactivada`)
    if (onlyCustom) {
      customCharsClean.length > 0 ? console.log(`los caracteres usados son ${setToArray}`) : "";
      console.log(`Cantidad de Caracteres Custom: ${customCharsClean.length} `);
    }
    else { customCharsClean.length > 0 ? console.log(`los caracteres usados son ${setToArray} mas ${groups}`) : console.log(`los caracteres usados son ${groups}`); }
  }

  let randomMiniID = ""; // esta variable se llena en cada iteracion del bucle , si es que no hay errores previos.

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
  const limit = Math.min(Math.max(length, 3), 10000); // Establece un rango de 3 a 10000

  const customCharsClean = []

  customChars.forEach((item) => {
    if (item.length > 1 || item > 9) { // si el item de customChars es un numero o una cadena de mas de dos cifras, se separa en caracteres individuales.
      customCharsClean.push(...item.toString()); // todos los caracteres se convierten a string
    } else {
      customCharsClean.push(item.toString()); // todos los caracteres se convierten a string
    }
  });

  const chars = new Set(groups.reduce((acc, group) => acc.concat(characters[group] || []), []).concat(customCharsClean));
  const DefaultID = generateDefaultID(characters[alfa]) // asigna un ID por defecto en caso de errores
  const customCharsSet = new Set(customCharsClean); // crea un conjunto de caracteres custom para eliminar concurrencias multiples
  setToArray = Array.from(chars)

  if (onlyCustom) { setToArray = Array.from(customCharsSet) }
  else { setToArray = Array.from(chars) }

  if (setToArray.length > 0 && !repeat && setToArray.length < length) {
    console.warn("Operación no válida: la cantidad de caracteres disponibles para genera el ID debe ser al menos igual a la longitud establecida para la generación del ID cuando la repetición está desactivada.");
    console.info(`
EXPLICACION: 
    Usted Proporciono estos caracteres: |${setToArray}|
    en total: |${setToArray.length}|
    sin embargo esta especificado un largo total de: |${length}| 
    y la repeticion esta: |desactivada| 
    Por ende los caracteres nunca alcanzan la longitud establecida, puesto que no se pueden repetir y son menos que el largo establecido.

Tiene tres soluciones posibles:
    1.- Aumente la cantidad de caracteres hasta que sea igual o mayor que la longitud configurada
    2.- Disminuya la longitud configurada hasta que sea igual o menor que la cantidad de caracteres
    3.- Active la repeticion.
`);
    console.log(`Se le brindara un ID por default --> ${DefaultID}`);
    return DefaultID;
  }

  if (onlyCustom) { setToArray = Array.from(customCharsSet) }
  else { setToArray = Array.from(chars) }

  let randomSuperID = ""; // esta variable se llena en cada iteracion del bucle , si es que no hay errores previos.

  while (randomSuperID.length < limit) {
    const randomChar = getRandomItem(setToArray)
    if (!repeat && randomSuperID.includes(randomChar)) { continue; }
    randomSuperID += randomChar;
  }
  return randomSuperID;
}
