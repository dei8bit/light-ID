## _español_

**_Experimenta y personaliza tus IDs de forma rápida con este generador_**

# Generador Rápido de ID:

_Un simple rapido y sencillo generador de IDs_

Este repositorio contiene un sencillo y eficaz algoritmo para generar IDs de forma rápida y fácil.
Con tan Solo Dos funciónes y multiples opciones de configuración, puedes obtener IDs personalizados para tus necesidades.

Las funciones para la generacion de IDs son dos:

- `miniID()`: Genera IDs **Pequeños** en un rango de [3 a 9] caracteres de longitud.
- `MegaID()`: Genera IDs **Grandes** en un rango de [3 a 10000] caracteres de longitud.

#### Uso Básico:

```javascript
console.log(miniID());
// Ejemplo de salida: QKiMZ
```

```javascript
console.log(MegaID());
// Ejemplo de salida: 9EBuQK5bdCK723MroaLEuMxiQ
```

#### Grupos predeterminados de Caracteres Disponibles:

Estos grupos de caracteres permiten generar IDs especificos, los caracteres de los grupos son de tipo `string`.

- `num`: Números (0-9). → **9 caracteres**
- `low`: Letras minúsculas (a-z). → **27 caracteres**
- `upp`: Letras mayúsculas (A-Z). → **27 caracteres**
- `alfa`: Números, letras minúsculas y mayúsculas. → **63 caracteres**

## ⚙️ Configuracion:

### 🔧 Caracteristicas de configuracion comunes en ambas funciones:

- Habilitar o Deshabilitar la repeticion caracteres.
- Elegir entre diferentes grupos de caracteres y grupos predeterminados.
- Usar un determinado grupo de caracteres brindados por el usuario.
- Establecer el uso de UNICAMENTE! los caracteres brindados por el usuario.

### 🔧 Caracteristicas de configuracion de la funcion _miniID()_:

- La longitud del ID se limita a un rango de _3 a 9_ caracteres.
- Brindar informacion relevante sobre los IDs:
  - Cantidad de combinaciones posibles.
  - Configuracion actual establecida.

### 🔧 Caracteristicas de configuracion de la funcion _MegaID()_:

- La longitud del ID se limita a un rango de _3 a 10000_ caracteres.

#### valores por defecto en las funciones:

Ambas funciones reciben valores por defecto para una generacion sencilla en caso de que esta sea apropiada para las necesidades.

🔹parametros por default de _miniID()_

```javascript
function miniID({
  length = 5,
  repeat = false,
  infoCombinations = false,
  infoConfig = false,
  onlyCustom = false,
  groups = ["alfa"],
  customChars = [],
} = {})
```

🔹parametros por default de _MegaID()_

```javascript
function MegaID({
  length= 25,
  repeat = true,
  onlyCustom = false,
  groups = ["alfa"],
  customChars = [],
} = {})
```

#### Opciones de Configuración para miniID():

Puedes personalizar la generación de _mini IDs_ utilizando las siguientes opciones:

|  **PARAMETRO**   | **TIPO** |                               **UTILIDAD**                                | **VALOR PREDETERMINADO** |      **VALORES POSIBLES**      |
| :--------------: | :------: | :-----------------------------------------------------------------------: | :----------------------: | :----------------------------: |
|      length      |  number  |                   Permite establecer la longitud del ID                   |            5             |       numeros del 3 al 9       |
|      repeat      | boolean  |         Determina si el ID puede tener o no caracteres repetidos          |          false           |          true o false          |
| infoCombinations | boolean  | Muestra la cantidad de combinaciones posibles con la configuracion actual |          false           |          true o false          |
|    infoConfig    | boolean  |                Muestra la configuracion que se ha elegido                 |          false           |          true o false          |
|    onlyCustom    | boolean  |    Determina si SOLO se utilizan los caracteres que brinda el usuario     |          false           |          true o false          |
|      groups      |  array   |  Permite establecer que grupos de caracteres predeterminados son usados   |         ["alfa"]         | ["num", "low", "upp", "alfa"]; |
|   customChars    |  array   |                Permite agregar cualquier caracter deseado                 |            []            |      [cualquier caracter]      |

#### Opciones de Configuración para MegaID():

Puedes personalizar la generación de _mini IDs_ utilizando las siguientes opciones:

| **PARAMETRO** | **TIPO** |                              **UTILIDAD**                              | **VALOR PREDETERMINADO** |      **VALORES POSIBLES**      |
| :-----------: | :------: | :--------------------------------------------------------------------: | :----------------------: | :----------------------------: |
|    length     |  number  |                 Permite establecer la longitud del ID                  |            25            |     numeros del 3 al 10000     |
|    repeat     | boolean  |        Determina si el ID puede tener o no caracteres repetidos        |           true           |          true o false          |
|  onlyCustom   | boolean  |   Determina si SOLO se utilizan los caracteres que brinda el usuario   |          false           |          true o false          |
|    groups     |  array   | Permite establecer que grupos de caracteres predeterminados son usados |         ["alfa"]         | ["num", "low", "upp", "alfa"]; |
|  customChars  |  array   |               Permite agregar cualquier caracter deseado               |            []            |      [cualquier caracter]      |

### ⚡ Configuracion agil:

Con el fin de ahorrar tiempo al escribir la configuracion se crearon variables que funcionan como atajos equivalentes, para los parametros de ambas funciones:

```javascript
const infoCombinations = true;
const infoConfig = true;
const onlyCustom = true;
const repeat = true;
const no = false;
const groups = ["num", "low", "upp", "alfa"];
const [num, low, upp, alfa] = groups;
```

> Tanto la funcion `miniID()` como la funcion `MegaID()` reciben como parametro un objeto de configuracion:
> La mayoria de los parametros que reciben son booleanos por lo que tiene solo dos valores posibles (`true` o `false`)
> Con el fin de evitar escribir algo tal como {parametro:true} o {parametro:false}, parecia agil poner simplemente {parametro}

> Gracias a la limpieza previa de `customChars` usted puede pasar caracteres en una sola cadena de texto:
> De esta forma esto: --> `customChars:["1","h","s","♥","2","H","b","$"]` equivale a esto: --> `customChars:[1hs♥2Hb$]`
> Y con este atajo puede ahorrar mucho tiempo al evitar las comillas ("") y las comas (,)

##### 📋 Ejemplos de uso con configuración _normal_:

Algunos ejemplos de los posibles resultados dada una configuracion.

- ###### Ejemplo 1

```javascript
const customID = miniID({
  length: 8,
  repeat: true,
  infoConfig: true,
  onlyCustom: true,
  customChars: ["@", "#", "$"],
});
console.log(customID);

/*↓ RESULTADO ↓*/
// largo del ID 8
// La repeticion esta activada
// los caracteres usados son @,#,$
// Cantidad de Caracteres Custom: 3
// ##@$$@@@
```

- ###### Ejemplo 2:

```javascript
const customID = miniID({
  length: 4,
  infoCombinations: true,
  repeat: false,
  group: ["low"],
});
console.log(customID);

/*↓ RESULTADO ↓*/
// Combinaciones posibles: 13388280
// xsDc
```

- ###### Ejemplo 3:

```javascript
const customID = miniID({
  length: 6,
  infoCombinations: true,
  repeat: false,
  group: ["low", "num"],
});
console.log(customID);

/*↓ RESULTADO ↓*/
// Combinaciones posibles: 44261653680
// Qw4Nz6
```

##### 📋 Ejemplos de uso con configuración _agil_:

Algunos ejemplos de los posibles resultados dada una configuracion.

- ###### Ejemplo 1:

```javascript
const customID = miniID({
  length: 8,
  repeat,
  infoConfig,
  onlyCustom,
  customChars: ["@", "#", "$"],
});
console.log(customID);

/*↓ RESULTADO ↓*/
// largo del ID 8
// La repeticion esta activada
// los caracteres usados son @,#,$
// Cantidad de Caracteres Custom: 3
// @#$@#@@@
```

- ###### Ejemplo 2:

```javascript
const customID = miniID({ length: 4, infoCombinations, repeat, group: [low] });
console.log(customID);

/*↓ RESULTADO ↓*/
// Combinaciones posibles: 14776336
// 28hs
```

- ###### Ejemplo 3:

```javascript
const customID = miniID({ length: 4, infoCombinations, repeat, group: [low] });
console.log(customID);

/*↓ RESULTADO ↓*/
// Combinaciones posibles: 14776336
// gE7B
```

### 🔄 Redundancias en configuraciones:

Debido a que existen muchas formas de lograr los mismos resultados, es importante exponer las distintas redundancias posibles.

##### miniID()

```javascript
miniID() ===  miniID({length:5,repeat:false,groups:["alfa"],infoCombinations:false,infoConfig:false,onlyCustom:false,customChars:[]})
miniID({groups:[num,upp,low,alfa]})  === miniID({groups:["num","upp","low","alfa"]})
miniID({groups:[alfa]}) ===  miniID({groups:[num,upp,low]})
miniID({repeat}) === miniID({repeat:true})
miniID({repeat:no}) === miniID({repeat:false}))
miniID({infoCombinations}) === miniID({infoCombinations:true}))
miniID({infoConfig}) === miniID({infoConfig:true}))
miniID({onlyCustom}) === miniID({onlyCustom:true}))
miniID({customChars:[123456]})   === miniID({customChars:[1,2,3,4,5,6]}))
miniID({customChars:["123456"]}) === miniID({customChars:["1","2","3","4","5","6"]}))
```

##### MegaID()

```javascript
MegaID() ===
  MegaID({
    length: 25,
    repeat: true,
    groups: ["alfa"],
    onlyCustom: false,
    customChars: [],
  });
MegaID({ groups: [num, upp, low, alfa] }) ===
  MegaID({ groups: ["num", "upp", "low", "alfa"] });
MegaID({ groups: [alfa] }) === MegaID({ groups: [num, upp, low] });
MegaID({ repeat: true }) === MegaID({ repeat });
MegaID({ repeat: false }) === MegaID({ repeat: no });
MegaID({ onlyCustom: true }) === MegaID({ onlyCustom });
MegaID({ customChars: [1, 2, 3, 4, 5, 6] }) ===
  MegaID({ customChars: [123456] });
MegaID({ customChars: ["1", "2", "3", "4", "5", "6"] }) ===
  MegaID({ customChars: ["123456"] });
```

## 🕵️ Funcionamiento Interno:

Algunos detalles sobre el funcionamiento interno.

### Etapas de 👍validacion y limpieza🧹:

Antes de generar el ID ocurren una serie de validaciones y limpiezas que las funciones encargadas de generar el ID trabajen con solo los datos necesarios.

#### 👍 Contencion de longitud en un rango puntual:

_esto evita bucles infinitos e IDs con una longitud coherente mayor a 1_

_Incluso si el usuario ingresa numeros negativos o numeros extremadamente altos._

- La constante `limit` garantiza que el ID siempre se va a mantener en los rangos estipulados.

#### 🧹 Limpieza de caracteres custom:

_para que todos los caracteres puedan elegirse con la misma igualdad de probabilidades es necesario que no haya caracteres repetidos y que no haya similitudes simbolicas como lo serian 1 y "1"._
_Gracias a esta limpieza usted puede ahorrarse separar cada item de customChars con comas (,) y comilla ("") y escribirlos como si fueran una sola cadena de texto._

1. Es por esto que primero se separan las cadenas de texto que tengan mas de un caracter y todos los numeros que tengan mas de una cifra. Durante el proceso Todos los caracteres otorgados, se transforman a variables de tipo `strings`.
2. Luego se coloca TODOS los caracteres recoletados en un conjunto, donde se elimina cualquier posibilidad de dobles concurrencias.
3. Finalmente esto se transforma a un arreglo limpio, para poder manipularlo y generar IDs correctamente.

## VARIABLES Y FUNCIONES UTILES:

#### Funciones:

- `factorial()` --> Colabora con el calculo de la cantidad de combinaciones posibles.
- `getAmmountCombinations()` --> Calcula la cantidad de combinaciones posibles segun la configuracion dada en `miniID()`.
- `getRandomItem()` --> Obtiene un item random de un array dado.
- `generateDefaultID()` --> Genera un ID por default en caso de errores en `miniID()` y `MegaID()`.

#### Variables:

- `const limit` --> Limita la entrada de `length` dentro de los rangos estipulados en `miniID()` y `MegaID()`
- `const customCharsClean` --> Almacena todos los caracteres pasados por el usuario a `customChars` y separa los items que tengan mas de 1 de longitud.
- `const chars` --> Crea un conjunto con todos los grupos predeterminados mas los caracteres custom.
- `const totalChars` --> Almacena la longitud de `chars`
- `const amountCombinations` --> Almacena la cantidad de combinaciones posibles.
- `const DefaultID` --> Almacena el ID por default para casos de error.
- `const customCharsSet` --> Crea un conjunto con los caracteres pasados por el usuario en el array `customChars` para eliminar caracteres repetidos.
- `let setToArray` --> Convierte y almacena `customCharsSet` en un array, para poder operarlo.
- `let randomMiniID` --> Almacena el mini ID final que se retornara al usuario.
- `let randomSuperID` --> Almacena el mega ID final que se retornara al usuario.

### 🚧 Errores esperables:

Debido a que la libertad de configuracion amerita propuestas ilogicas, se idearon alternativas para evitar errores.
Siempre que el usuario intente una configuracion ilogica, se le devolvera un ID por defecto y tambien se le explicara porque ocurrio el error y como solucionarlo.

Estas configuraciones ilogicas solo ocurren en una simple circunstancia:
_Cuando se pide un ID con una longitud mayor que la cantidad de caracteres proporcionados_

🤔 Metaforizandolo: Es simple, si te doy **5** letras, y te digo que formes una palabra de **8** letras usando cada letra _SOLO UNA VEZ_, estas en un desafio imposible❗

Esto genera un bucle infinito en el codigo. y hay **_tres_** formas de solucionarlo:

1. proporcionar mas caracteres en `customChars`:
   Hasta tener una cantidad de caracteres igual o mayor que la longitud exigida.
2. Disminuir la longitud exigida en `length`:
   Hasta tener una longitud igual o menor que la cantidad de caracteres proporcionados
3. Activar la repeticion con `repeat`:
   De esta forma, si exige una longitud de _X_ numeros, y proporciona al menos _1_ caracter, este o estos caracteres proporcionados se podran repetir todas las veces necesarias hasta generar un ID con la longitud exigida.

_🙏 si te gusta el proyecto puedes apoyarme comprandome un cafe: ☕_

<a href="https://www.buymeacoffee.com/dei8bit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

_No es lo primero ni lo utlimo que hago o voy a hacer, y siempre aspiro a un grado de prolijidad mayor 🙃_

## ☝️ PROPUESTAS Y ERRORES 👾

¿Encontrastes algun error? 😮
¿Quieres hacer una propuesta para mejorar el codigo o cambiarlo radicalmente haciendo que nada de esto tenga sentido? 😲

Me encantan los cambios siempre que sean buenos y esten justificados!🧐

_No dudes en contribuir o informar problemas si encuentras alguna mejora o ajuste necesario._

### PROPUESTAS: ☝️

Si usted tiene una sugerencia para mejorar el codigo, por favor indiquela de la siguiente forma:

- **Idea en resumen**: (Una explicacion breve en una linea)
- **Variables involucradas en el cambio**, ejemplo: (customChars,infoConfig,etc...)
- **Aspecto que se mejora al cambiar el codigo**, ejemplo:(seguridad, performance,legibilidad,acomplamiento,cohesion,etc...)
- **Razon por la cual lo considera algo positivo** (opcional, no necesario siempre): (explicacion personal)
- **Propuesta**: (una explicacion de que lo se propone)

**_Ejemplo:_**
_Este ejemplo es ficticio y no tiene un sentido practico es solo ilustrativo:_

**_Usuario anonimo:_**

- **Idea:** Considero que no tiene sentido que haya caracteres predeterminados en minuscula y mayuscula.
- **Variables involucradas:**
  - characters.low
  - characters.upp
- **Aspecto que se mejora:** decremento en cantidad de lineas de codigo.
- **Razon positiva:** Gracias a esto usted puede ahorrarse un monton de palabras innecesarias en su codigo
- **Propuesta:** La idea es que en vez de que haya dos grupos arreglos con caracteres uno en minusculas y otro en mayusculas, simplemente eliga uno y el otro lo transorme a mayusculas o minusculas segun la necesidad, de esta forma evita la necesidad de tener dos arrays con las mismas letras. ☺

### ERRORES: 👾

Si usted encuentra un error en el codigo, por favor indiquelo de la siguiente forma:

- **Nombre del error.**
- **Lugar del error.**
- **Devolucion de la consola.**
- **Comportamiento esperado.**

**_Ejemplo:_**
_Este ejemplo es ficticio y no tiene un sentido practico es solo ilustrativo:_

- **Nombre del error**: `ReferenceError: asdfgh is not defined`
- **Lugar del error**: `console.log(MegaID({length:asdfgh,onlyCustom,repeat:no,customChars:[1234]}));`
- **Devolucion de la consola**: `ReferenceError: asdfgh is not defined
  at Object.<anonymous> (c:\Users\usuario\Desktop\quick-id\logica.js:199:28)
  at Module.\_compile (node:internal/modules/cjs/loader:1256:14)
  at Module.\_extensions..js (node:internal/modules/cjs/loader:1310:10)
  at Module.load (node:internal/modules/cjs/loader:1119:32)
  at Module.\_load (node:internal/modules/cjs/loader:960:12)
  at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
  at node:internal/main/run_main_module:23:47

Node.js v18.16.1`

- **Comportamiento esperado**: Simplemente queria un ID que tenga los caracteres asdfgh mezclados de forma random.

# DISCLAIMER:

_I am NOT a translator, I do not know English and Chinese in depth, but I still tried to force the translation so that at least something exists, I am aware that many of the sentences are going to be wrong. but at least they are there to be corrected. I apologize, I have a great appreciation for both languages, and it would be a honor for me to have translations for the largest languages ​​in the world._ 🙇‍♂️🙇‍♂️

## _English_

**_Experience and customize your IDs quickly with this generator_**

# Quick ID Generator:

_A simple, fast, and straightforward ID generator_

This repository contains a simple yet effective algorithm for quickly and easily generating IDs. With just two functions and multiple configuration options, you can get custom IDs for your needs.

The functions for ID generation are two:

- `miniID()`: Generates **Small** IDs in a range of [3 to 9] characters in length.
- `MegaID()`: Generates **Large** IDs in a range of [3 to 10000] characters in length.

#### Basic Usage:

```javascript
console.log(miniID());
// Example output: QKiMZ
```

```javascript
console.log(MegaID());
// Example output: 9EBuQK5bdCK723MroaLEuMxiQ
```

#### Default Available Character Groups:

These character groups allow you to generate specific IDs; the characters in the groups are of type `string`.

- `num`: Numbers (0-9). → **9 characters**
- `low`: Lowercase letters (a-z). → **26 characters**
- `upp`: Uppercase letters (A-Z). → **26 characters**
- `alfa`: Numbers, lowercase, and uppercase letters. → **62 characters**

## ⚙️ Configuration:

### 🔧 Common Configuration Features in Both Functions:

- Enable or disable character repetition.
- Choose between different character groups and default groups.
- Use a specific user-provided character group.
- Set the use of ONLY! user-provided characters.

### 🔧 Configuration Features of the _miniID()_ Function:

- The ID length is limited to a range of _3 to 9_ characters.
- Provide relevant information about the IDs:
  - Number of possible combinations.
  - Current configuration set.

### 🔧 Configuration Features of the _MegaID()_ Function:

- The ID length is limited to a range of _3 to 10000_ characters.

#### Default values in the functions:

Both functions receive default values for simple generation in case it is appropriate for the needs.

🔹 Default parameters of _miniID()_

```javascript
function miniID({
  length = 5,
  repeat = false,
  infoCombinations = false,
  infoConfig = false,
  onlyCustom = false,
  groups = ["alfa"],
  customChars = [],
} = {})
```

🔹 Default parameters of _MegaID()_

```javascript
function MegaID({
  length= 25,
  repeat = true,
  onlyCustom = false,
  groups = ["alfa"],
  customChars = [],
} = {})
```

#### Configuration Options for miniID():

You can customize the generation of _mini IDs_ using the following options:

|  **PARAMETER**   | **TYPE** |                               **UTILITY**                               | **DEFAULT VALUE** |      **POSSIBLE VALUES**       |
| :--------------: | :------: | :---------------------------------------------------------------------: | :---------------: | :----------------------------: |
|      length      |  number  |                        Set the length of the ID                         |         5         |      numbers from 3 to 9       |
|      repeat      | boolean  |            Determine if the ID can have repeated characters             |       false       |         true or false          |
| infoCombinations | boolean  | Show the number of possible combinations with the current configuration |       false       |         true or false          |
|    infoConfig    | boolean  |                      Show the chosen configuration                      |       false       |         true or false          |
|    onlyCustom    | boolean  |           Determine if ONLY user-provided characters are used           |       false       |         true or false          |
|      groups      |  array   |               Set which default character groups are used               |     ["alfa"]      | ["num", "low", "upp", "alfa"]; |
|   customChars    |  array   |                   Allow adding any desired character                    |        []         |        [any character]         |

#### Configuration Options for MegaID():

You can customize the generation of _mega IDs_ using the following options:

| **PARAMETER** | **TYPE** |                     **UTILITY**                     | **DEFAULT VALUE** |      **POSSIBLE VALUES**       |
| :-----------: | :------: | :-------------------------------------------------: | :---------------: | :----------------------------: |
|    length     |  number  |              Set the length of the ID               |        25         |    numbers from 3 to 10000     |
|    repeat     | boolean  |  Determine if the ID can have repeated characters   |       true        |         true or false          |
|  onlyCustom   | boolean  | Determine if ONLY user-provided characters are used |       false       |         true or false          |
|    groups     |  array   |     Set which default character groups are used     |     ["alfa"]      | ["num", "low", "upp", "alfa"]; |
|  customChars  |  array   |         Allow adding any desired character          |        []         |        [any character]         |

### ⚡ Agile Configuration:

In order to save time when writing configurations, variables that function as equivalent shortcuts for the parameters of both functions were created:

```javascript
const infoCombinations = true;
const infoConfig = true;
const onlyCustom = true;
const repeat = true;
const no = false;
const groups = ["num", "low", "upp", "alfa"];
const [num, low, upp, alfa] = groups;
```

> Both the `miniID()` and `MegaID()` functions receive a configuration object as a parameter.
> Most of the parameters they receive are booleans, so they only have two possible values (`true` or `false`).
> To avoid writing something like {parameter: true} or {parameter: false}, it seemed more efficient to simply use {parameter}.

> Thanks to the previous cleaning of `customChars`, you can pass characters in a single string:
> This way, this: --> `customChars:["1","h","s","♥","2","H","b","$"]` is equivalent to this: --> `customChars:[1hs♥2Hb$]`
> And with this shortcut, you can save a lot of time by avoiding quotes ("") and commas (,).

##### 📋 Examples of usage with _normal_ configuration:

Some examples of possible results given a configuration.

- ###### Example 1

```javascript
const customID = miniID({
  length: 8,
  repeat: true,
  infoConfig: true,
  onlyCustom: true,
  customChars: ["@", "#", "$"],
});
console.log(customID);

/*↓ RESULT ↓*/
// ID length 8
// Repetition is enabled
// Used characters are @, #, $
// Number of Custom Characters: 3
// ##@$$@@@
```

- ###### Example 2:

```javascript
const customID = miniID({
  length: 4,
  infoCombinations: true,
  repeat: false,
  group: ["low"],
});
console.log(customID);

/*↓ RESULT ↓*/
// Possible combinations: 13388280
// xsDc
```

- ###### Example 3:

```javascript
const customID = miniID({
  length: 6,
  infoCombinations: true,
  repeat: false,
  group: ["low", "num"],
});
console.log(customID);

/*↓ RESULT ↓*/
// Possible combinations: 44261653680
// Qw4Nz6
```

##### 📋 Examples of usage with _agile_ configuration:

Some examples of possible results given a configuration.

- ###### Example 1:

```javascript
const customID = miniID({
  length: 8,
  repeat,
  infoConfig,
  onlyCustom,
  customChars: ["@", "#", "$"],
});
console.log(customID);

/*↓ RESULT ↓*/
// ID length 8
// Repetition is enabled
// Used characters are @, #, $
// Number of Custom Characters: 3
// @#$@#@@@
```

- ###### Example 2:

```javascript
const customID = miniID({ length: 4, infoCombinations, repeat, group: [low] });
console.log(customID);

/*↓ RESULT ↓*/
// Possible combinations: 14776336
// 28hs
```

- ###### Example 3:

```javascript
const customID = miniID({ length: 4, infoCombinations, repeat, group: [low] });
console.log(customID);

/*↓ RESULT ↓*/
// Possible combinations: 14776336
// gE7B
```

### 🔄 Redundancies in Configurations:

Since there are many ways to achieve the same results, it's essential to highlight various possible redundancies.

##### miniID()

```javascript
miniID() ===  miniID({length:5,repeat:false,groups:["alfa"],infoCombinations:false,infoConfig:false,onlyCustom:false,customChars:[]})
miniID({groups:[num,upp,low,alfa]})  === miniID({groups:["num","upp","low","alfa"]})
miniID({groups:[alfa]}) ===  miniID({groups:[num,upp,low]})
miniID({repeat}) === miniID({repeat:true})
miniID({repeat:no}) === miniID({repeat:false}))
miniID({infoCombinations}) === miniID({infoCombinations:true}))
miniID({infoConfig}) === miniID({infoConfig:true}))
miniID({onlyCustom}) === miniID({onlyCustom:true}))
miniID({customChars:[123456]})   === miniID({customChars:[1,2,3,4,5,6]}))
miniID({customChars:["123456"]}) === miniID({customChars:["1","2","3","4","5","6"]}))
```

##### MegaID()

```javascript
MegaID() ===
  MegaID({
    length: 25,
    repeat: true,
    groups: ["alfa"],
    onlyCustom: false,
    customChars: [],
  });
MegaID({ groups: [num, upp, low, alfa] }) ===
  MegaID({ groups: ["num", "upp", "low", "alfa"] });
MegaID({ groups: [alfa] }) === MegaID({ groups: [num, upp, low] });
MegaID({ repeat: true }) === MegaID({ repeat });
MegaID({ repeat: false }) === MegaID({ repeat: no });
MegaID({ onlyCustom: true }) === MegaID({ onlyCustom });
MegaID({ customChars: [1, 2, 3, 4, 5, 6] }) ===
  MegaID({ customChars: [123456] });
MegaID({ customChars: ["1", "2", "3", "4", "5", "6"] }) ===
  MegaID({ customChars: ["123456"] });
```

## 🕵️ Internal Operation:

Some details about the internal operation.

### Stages of 👍validation and cleaning🧹:

Before generating the ID, a series of validations and cleanups occur to ensure that the functions responsible for generating the ID work with only the necessary data.

#### 👍 Containment of length within a specific range:

_This prevents infinite loops and ensures coherent ID length greater than 1._

_Even if the user enters negative numbers or extremely high numbers._

- The constant `limit` ensures that the ID always stays within the stipulated ranges.

#### 🧹 Cleaning of custom characters:

_To ensure that all characters can be chosen with the same probability, it's necessary to have no repeated characters and no symbolic similarities, such as 1 and "1"._
_Thanks to this cleaning, you can save yourself from separating each item of customChars with commas (,) and quotes ("") and write them as if they were a single string._

1. This is why first, strings with more than one character and all numbers with more than one digit are separated. During the process, all given characters are transformed into variables of type `strings`.
2. Then ALL the collected characters are placed in a set, where any possibility of double occurrences is eliminated.
3. Finally, this is transformed into a clean array, to be able to manipulate it and generate IDs correctly.

## USEFUL VARIABLES AND FUNCTIONS:

#### Functions:

- `factorial()` --> Assists in the calculation of the number of possible combinations.
- `getAmountCombinations()` --> Calculates the number of possible combinations according to the configuration given in `miniID()`.
- `getRandomItem()` --> Retrieves a random item from a given array.
- `generateDefaultID()` --> Generates a default ID in case of errors in `miniID()` and `MegaID()`.

#### Variables:

- `const limit` --> Limits the input of `length` within the ranges stipulated in `miniID()` and `MegaID()`.
- `const customCharsClean` --> Stores all characters passed by the user to `customChars` and separates items that have a length greater than 1.
- `const chars` --> Creates a set with all default groups plus custom characters.
- `const totalChars` --> Stores the length of `chars`.
- `const amountCombinations` --> Stores the number of possible combinations.
- `const DefaultID` --> Stores the default ID for error cases.
- `const customCharsSet` --> Creates a set with the characters passed by the user in the `customChars` array to eliminate repeated characters.
- `let setToArray` --> Converts and stores `customCharsSet` into an array, for further manipulation.
- `let randomMiniID` --> Stores the final mini ID that will be returned to the user.
- `let randomSuperID` --> Stores the final mega ID that will be returned to the user.

### 🚧 Expected Errors:

Due to the freedom of configuration allowing illogical proposals, alternatives were devised to prevent errors. Whenever a user attempts an illogical configuration, a default ID will be returned, accompanied by an explanation of the error and how to resolve it.

These illogical configurations only occur in a simple circumstance:
_When requesting an ID with a length greater than the number of provided characters._

🤔 Metaphorically speaking: It's simple, if I give you **5** letters and ask you to form an **8** letter word using each letter _ONLY ONCE_, you're in an impossible challenge❗

This generates an infinite loop in the code, and there are **_three_** ways to solve it:

1. Provide more characters in `customChars`:
   Until you have a quantity of characters equal to or greater than the required length.
2. Decrease the required length in `length`:
   Until you have a length equal to or less than the quantity of provided characters.
3. Activate repetition with `repeat`:
   This way, if you demand a length of _X_ numbers and provide at least _1_ character, this or these provided characters can be repeated as many times as necessary to generate an ID with the required length.

_🙏 If you like the project, you can support me by buying me a coffee: ☕_

<a href="https://www.buymeacoffee.com/dei8bit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

_This is not the first nor the last thing I do or will do, and I always aim for a higher degree of neatness 🙃_

## ☝️ PROPOSALS AND BUGS 👾

Found a bug? 😮
Want to make a proposal to improve the code or radically change it, making all of this nonsense? 😲

I love changes as long as they are good and justified! 🧐

Feel free to contribute or report issues if you find any improvements or necessary adjustments.

### PROPOSALS: ☝️

If you have a suggestion to improve the code, please provide it in the following format:

- **Idea in summary**: (A brief explanation in one line)
- **Variables involved in the change**, for example: (customChars, infoConfig, etc...)
- **Aspect improved by changing the code**, for example: (security, performance, readability, coupling, cohesion, etc...)
- **Reason why you consider it positive** (optional, not always necessary): (personal explanation)
- **Proposal**: (an explanation of what is being proposed)

**_Example:_**
_This example is fictional and has no practical sense; it's just illustrative:_

**_Anonymous user:_**

- **Idea:** I think it doesn't make sense to have predefined characters in both lowercase and uppercase.
- **Variables involved:**
  - characters.low
  - characters.upp
- **Aspect improved:** decrease in the number of lines of code.
- **Positive reason:** Thanks to this, you can save a lot of unnecessary words in your code.
- **Proposal:** The idea is that instead of having two arrays with characters, one in lowercase and one in uppercase, simply choose one, and the other is transformed to uppercase or lowercase as needed. This way, you avoid the need for two arrays with the same letters. ☺

### BUGS: 👾

If you find a bug in the code, please report it in the following format:

- **Error name**.
- **Location of the error**.
- **Console return**.
- **Expected behavior**.

**_Example:_**
_This example is fictional and has no practical sense; it's just illustrative:_

- **Error name**: `ReferenceError: asdfgh is not defined`
- **Location of the error**: `console.log(MegaID({length:asdfgh,onlyCustom,repeat:no,customChars:[1234]}));`
- **Console return**: `ReferenceError: asdfgh is not defined
  at Object.<anonymous> (c:\Users\user\Desktop\quick-id\logic.js:199:28)
  at Module.\_compile (node:internal/modules/cjs/loader:1256:14)
  at Module.\_extensions..js (node:internal/modules/cjs/loader:1310:10)
  at Module.load (node:internal/modules/cjs/loader:1119:32)
  at Module.\_load (node:internal/modules/cjs/loader:960:12)
  at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
  at node:internal/main/run_main_module:23:47

Node.js v18.16.1`

- **Expected behavior**: I just wanted an ID with the characters asdfgh mixed randomly.

## _中文_

**_通过此生成器快速体验和定制您的 ID_**

# 快速 ID 生成器：

一个简单、快速和直接的 ID 生成器

这个仓库包含了一个简单但有效的算法，可以快速轻松地生成 ID。只需两个函数和多个配置选项，您就可以为自己的需求获得定制的 ID。

生成 ID 的函数有两个：

- `miniID()`: 生成长度为 [3 到 9] 个字符的 **小型** ID。
- `MegaID()`: 生成长度为 [3 到 10000] 个字符的 **大型** ID。

#### 基本用法：

```javascript
console.log(miniID());
// 示例输出: QKiMZ
```

```javascript
console.log(MegaID());
// 示例输出: 9EBuQK5bdCK723MroaLEuMxiQ
```

#### 默认可用字符组：

这些字符组允许您生成特定的 ID；字符组中的字符是 `string` 类型。

- `num`: 数字 (0-9)。 → **9 个字符**
- `low`: 小写字母 (a-z)。 → **26 个字符**
- `upp`: 大写字母 (A-Z)。 → **26 个字符**
- `alfa`: 数字、小写字母和大写字母。 → **62 个字符**

## ⚙️ 配置：

### 🔧 两个函数中的共同配置功能：

- 启用或禁用字符重复。
- 在不同的字符组和默认组之间进行选择。
- 使用特定的用户提供的字符组。
- 仅使用! 用户提供的字符。

### 🔧 _miniID()_ 函数的配置功能：

- ID 长度限制在 _3 到 9_ 个字符的范围内。
- 提供有关 ID 的相关信息：
  - 可能的组合数量。
  - 当前的配置设置。

### 🔧 _MegaID()_ 函数的配置功能：

- ID 长度限制在 _3 到 10000_ 个字符的范围内。

#### 函数中的默认值：

这两个函数都接收了默认值，以便在需要时进行简单的生成。

🔹 _miniID()_ 的默认参数

```javascript
function miniID({
  length = 5,
  repeat = false,
  infoCombinations = false,
  infoConfig = false,
  onlyCustom = false,
  groups = ["alfa"],
  customChars = [],
} = {})
```

🔹 _MegaID()_ 的默认参数

```javascript
function MegaID({
  length= 25,
  repeat = true,
  onlyCustom = false,
  groups = ["alfa"],
  customChars = [],
} = {})
```

#### _miniID()_ 的配置选项：

您可以使用以下选项自定义 _mini IDs_ 的生成：

|     **参数**     | **类型** |          **实用性**          | **默认值** |          **可能的值**          |
| :--------------: | :------: | :--------------------------: | :--------: | :----------------------------: |
|      length      |  number  |        设置 ID 的长度        |     5      |       3 到 9 之间的数字        |
|      repeat      | boolean  |  确定 ID 是否可以有重复字符  |   false    |         true 或 false          |
| infoCombinations | boolean  | 显示当前配置下可能的组合数量 |   false    |         true 或 false          |
|    infoConfig    | boolean  |       显示所选择的配置       |   false    |         true 或 false          |
|    onlyCustom    | boolean  |   确定仅使用用户提供的字符   |   false    |         true 或 false          |
|      groups      |  array   |    设置要使用的默认字符组    |  ["alfa"]  | ["num", "low", "upp", "alfa"]; |
|   customChars    |  array   |    允许添加任何所需的字符    |     []     |           [任何字符]           |

#### _MegaID()_ 的配置选项：

您可以使用以下选项自定义 _mega IDs_ 的生成：

|  **参数**   | **类型** |         **实用性**         | **默认值** |          **可能的值**          |
| :---------: | :------: | :------------------------: | :--------: | :----------------------------: |
|   length    |  number  |       设置 ID 的长度       |     25     |     3 到 10000 之间的数字      |
|   repeat    | boolean  | 确定 ID 是否可以有重复字符 |    true    |         true 或 false          |
| onlyCustom  | boolean  |  确定仅使用用户提供的字符  |   false    |         true 或 false          |
|   groups    |  array   |   设置要使用的默认字符组   |  ["alfa"]  | ["num", "low", "upp", "alfa"]; |
| customChars |  array   |   允许添加任何所需的字符   |     []     |           [任何字符]           |

### ⚡ 灵活配置：

为了在编写配置时节省时间，创建了作为两个函数参数的等效快捷方式的变量：

```javascript
const infoCombinations = true;
const infoConfig = true;
const onlyCustom = true;
const repeat = true;
const no = false;
const groups = ["num", "low", "upp", "alfa"];
const [num, low, upp, alfa] = groups;
```

> `miniID()` 和 `MegaID()` 函数都接收一个配置对象作为参数。
> 它们接收的大多数参数都是布尔值，因此只有两个可能的值（`true` 或 `false`）。
> 为了避免写类似 {parameter: true} 或 {parameter: false} 这样的内容，直接使用 {parameter} 似乎更为高效。

> 由于 `customChars` 的先前清理，您可以将字符传递为一个字符串：
> 这样，`customChars:["1","h","s","♥","2","H","b","$"]` 等同于 `customChars:[1hs♥2Hb$]`
> 通过这个快捷方式，您可以通过避免引号（""）和逗号（,）来节省大量时间。

##### 📋 使用 _normal_ 配置的示例：

一些给定配置的可能结果示例。

- ###### 示例 1

```javascript
const customID = miniID({
  length: 8,
  repeat: true,
  infoConfig: true,
  onlyCustom: true,
  customChars: ["@", "#", "$"],
});
console.log(customID);

/*↓ 结果 ↓*/
// ID 长度 8
// 重复已启用
// 使用的字符为 @, #, $
// 自定义字符数量：3
// ##@$$@@@
```

- ###### 示例 2：

```javascript
const customID = miniID({
  length: 4,
  infoCombinations: true,
  repeat: false,
  group: ["low"],
});
console.log(customID);

/*↓ 结果 ↓*/
// 可能的组合：13388280
// xsDc
```

- ###### 示例 3：

```javascript
const customID = miniID({
  length: 6,
  infoCombinations: true,
  repeat: false,
  group: ["low", "num"],
});
console.log(customID);

/*↓ 结果 ↓*/
// 可能的组合：44261653680
// Qw4Nz6
```

##### 📋 使用 _agile_ 配置的示例：

一些给定配置的可能结果示例。

- ###### 示例 1：

```javascript
const customID = miniID({
  length: 8,
  repeat,
  infoConfig,
  onlyCustom,
  customChars: ["@", "#", "$"],
});
console.log(customID);

/*↓ 结果 ↓*/
// ID 长度 8
// 重复已启用
// 使用的字符为 @, #, $
// 自定义字符数量：3
// @#$@#@@@
```

- ###### 示例 2：

```javascript
const customID = miniID({ length: 4, infoCombinations, repeat, group: [low] });
console.log(customID);

/*↓ 结果 ↓*/
// 可能的组合：14776336
// 28hs
```

- ###### 示例 3：

```javascript
const customID = miniID({ length: 4, infoCombinations, repeat, group: [low] });
console.log(customID);

/*↓ 结果 ↓*/
// 可能的组合：14776336
// gE7B
```

### 🔄 配置中的冗余:

由于有许多实现相同结果的方式，突出显示各种可能的冗余是很重要的。

##### miniID()

```javascript
miniID() ===  miniID({length:5,repeat:false,groups:["alfa"],infoCombinations:false,infoConfig:false,onlyCustom:false,customChars:[]})
miniID({groups:[num,upp,low,alfa]})  === miniID({groups:["num","upp","low","alfa"]})
miniID({groups:[alfa]}) ===  miniID({groups:[num,upp,low]})
miniID({repeat}) === miniID({repeat:true})
miniID({repeat:no}) === miniID({repeat:false}))
miniID({infoCombinations}) === miniID({infoCombinations:true}))
miniID({infoConfig}) === miniID({infoConfig:true}))
miniID({onlyCustom}) === miniID({onlyCustom:true}))
miniID({customChars:[123456]})   === miniID({customChars:[1,2,3,4,5,6]}))
miniID({customChars:["123456"]}) === miniID({customChars:["1","2","3","4","5","6"]}))
```

##### MegaID()

```javascript
MegaID() ===
  MegaID({
    length: 25,
    repeat: true,
    groups: ["alfa"],
    onlyCustom: false,
    customChars: [],
  });
MegaID({ groups: [num, upp, low, alfa] }) ===
  MegaID({ groups: ["num", "upp", "low", "alfa"] });
MegaID({ groups: [alfa] }) === MegaID({ groups: [num, upp, low] });
MegaID({ repeat: true }) === MegaID({ repeat });
MegaID({ repeat: false }) === MegaID({ repeat: no });
MegaID({ onlyCustom: true }) === MegaID({ onlyCustom });
MegaID({ customChars: [1, 2, 3, 4, 5, 6] }) ===
  MegaID({ customChars: [123456] });
MegaID({ customChars: ["1", "2", "3", "4", "5", "6"] }) ===
  MegaID({ customChars: ["123456"] });
```

## 🕵️ 内部操作:

关于内部操作的一些详细信息。

### 👍验证和清理🧹 阶段:

在生成 ID 之前，会进行一系列的验证和清理，以确保负责生成 ID 的函数仅使用必要的数据。

#### 👍 将长度限制在特定范围内:

_这可以防止无限循环，并确保 ID 的长度大于 1。_

_即使用户输入负数或极高的数值。_

- 常量 `limit` 确保 ID 始终保持在规定范围内。

#### 🧹 清理自定义字符:

_为了确保所有字符具有相同的选择概率，必须避免重复字符和符号相似性，比如 1 和 "1"。_
_由于这种清理，您可以避免使用逗号 (,) 和引号 ("") 分隔 `customChars` 的每个项目，并将它们写成一个字符串。_

1. 因此，首先将长度超过一个字符的字符串和所有长度超过一个数字的数字分开。在此过程中，所有给定的字符都会转换为 `string` 类型的变量。
2. 然后将所有收集到的字符放入一个集合中，消除任何可能的重复发生。
3. 最后，将其转换为一个干净的数组，以便能够进行操作并正确生成 ID。

## 有用的变量和函数:

#### 函数:

- `factorial()` --> 有助于计算可能组合的数量。
- `getAmountCombinations()` --> 根据 `miniID()` 中给定的配置计算可能组合的数量。
- `getRandomItem()` --> 从给定数组中获取一个随机项。
- `generateDefaultID()` --> 在 `miniID()` 和 `MegaID()` 出错时生成默认 ID。

#### 变量:

- `const limit` --> 限制 `length` 在 `miniID()` 和 `MegaID()` 中规定的范围内。
- `const customCharsClean` --> 存储用户传递到 `customChars` 的所有字符，并分离长度大于 1 的项目。
- `const chars` --> 创建包含所有默认组和自定义字符的集合。
- `const totalChars` --> 存储 `chars` 的长度。
- `const amountCombinations` --> 存储可能组合的数量。
- `const DefaultID` --> 存储错误情况下的默认 ID。
- `const customCharsSet` --> 使用 `customChars` 数组中由用户传递的字符创建一个集合，以消除重复字符。
- `let setToArray` --> 将 `customCharsSet` 转换并存储为数组，以便进行进一步操作。
- `let randomMiniID` --> 存储将返回给用户的最终 mini ID。
- `let randomSuperID` --> 存储将返回给用户的最终 mega ID。

### 🚧 预期错误：

由于配置自由度允许不合逻辑的提案，为了防止错误，我们设计了替代方案。每当用户尝试一个不合逻辑的配置时，都会返回一个默认的 ID，并附带一个解释错误的说明以及如何解决它。

这些不合逻辑的配置仅在一个简单的情况下发生：
_当要求的 ID 长度大于提供的字符数量时。_

🤔 换个说法：很简单，如果我给你 **5** 个字母，并要求你用每个字母 _仅一次_ 组成一个 **8** 个字母的单词，你将面临一个不可能完成的挑战❗

这会在代码中生成一个无限循环，有 **_三种_** 解决方法：

1. 在 `customChars` 中提供更多的字符：
   直到你拥有的字符数量等于或大于所需长度。
2. 减小 `length` 中所需的长度：
   直到长度等于或小于提供的字符数量。
3. 使用 `repeat` 激活重复：
   这样，如果要求长度为 _X_ 个数字，并提供至少 _1_ 个字符，这个或这些提供的字符将重复多次，直到生成所需长度的 ID。

_🙏 如果你喜欢这个项目，可以通过购买一杯咖啡来支持我: ☕_

<a href="https://www.buymeacoffee.com/dei8bit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

_这不是我做的第一件事，也不是我将要做的最后一件事，我总是追求更高程度的整洁 🙃_

## ☝️ 提案和错误 👾

发现了一个错误？ 😮
想要提出一个改进代码或彻底改变代码的建议，使所有这一切都变得毫无意义？ 😲

我喜欢变化，只要它们是好的并且有道理！ 🧐

请随时提供建议或报告问题，如果您发现任何改进或必要的调整。

### 提案: ☝️

如果您对改进代码有建议，请按照以下格式提供：

- **总体思路**：（一句简短的解释）
- **涉及到的变量**，例如：（customChars、infoConfig 等...）
- **通过更改代码改进的方面**，例如：（安全性、性能、可读性、耦合性、内聚性等...）
- **您认为这是积极的原因**（可选，不一定总是必要的）：（个人解释）
- **建议**：（对提议内容的解释）

**_例子:_**
_这个例子是虚构的，没有实际意义，只是为了说明:_

**_匿名用户:_**

- **总体思路:** 我认为在小写和大写中都有预定义字符是没有意义的。
- **涉及到的变量:**
  - characters.low
  - characters.upp
- **改进的方面:** 代码行数减少。
- **积极原因:** 通过这样做，您可以在代码中省下许多不必要的词汇。
- **建议:** 这个想法是，与其有两个包含相同字母的数组，一个是小写字母，一个是大写字母，不如简单地选择一个，另一个根据需要转换为大写或小写。 这样，您避免了需要有两个包含相同字母的数组的需求。 ☺

### 错误: 👾

如果您在代码中发现错误，请以以下格式报告：

- **错误名称**。
- **错误位置**。
- **控制台返回**。
- **期望的行为**。


**_示例:_**
_这个例子是虚构的，没有实际意义，只是为了说明:_

- **错误名称**: `ReferenceError: asdfgh 未定义`
- **错误位置**: `console.log(MegaID({length:asdfgh,onlyCustom,repeat:no,customChars:[1234]}));`
- **控制台返回**: `ReferenceError: asdfgh 未定义
  在 Object.<anonymous> (c:\Users\user\Desktop\quick-id\logic.js:199:28)
  在 Module._compile (node:internal/modules/cjs/loader:1256:14)
  在 Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
  在 Module.load (node:internal/modules/cjs/loader:1119:32)
  在 Module._load (node:internal/modules/cjs/loader:960:12)
  在 Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
  在 node:internal/main/run_main_module:23:47

Node.js v18.16.1`

- **期望的行为**: 我只是想要一个具有字符 asdfgh 随机混合的 ID。