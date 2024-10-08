# light-ID:
_Un rapido y simple generador de IDs con opciones de personalizacion_

Con tan Solo Dos funciónes y multiples opciones de configuración, puedes obtener IDs personalizados para tus necesidades.

- `miniID()`: Genera IDs (de 3 a 9 caracteres).
- `MegaID()`: Genera IDs (de 3 a 10000 caracteres).

#### Resumen de Beneficios:
- 🔹   0 dependencias
- 🔹   Permite caracteres custom
- 🔹   configuraciones inteligentes
- 🔹   patrones configurables
- 🔹   documentacion robusta y didactica


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

- `num`: Números (0-9) → **9 caracteres**
- `low`: Letras minúsculas (a-z) → **26 caracteres**
- `upp`: Letras mayúsculas (A-Z) → **26 caracteres**
- `alfa`: Números, letras minúsculas y mayúsculas → **62 caracteres**

## ⚙️ Configuracion:

Ambas funciones, `miniID()` y `MegaID()`, permiten las siguientes configuraciones:

- Habilitar o Deshabilitar la repeticion caracteres.
- Seleccionar grupos de caracteres predeterminados o personalizados.
- Utilizar solo caracteres proporcionados por el usuario.


### 🔧 Caracteristicas de configuracion de la funcion _miniID()_:

- La longitud del ID se limita a un rango de _3 a 9_ caracteres.
- Permite obtener la siguiente informacion:
  - Cantidad de combinaciones posibles (aproximado).
  - Configuracion actual establecida.

### 🔧 Caracteristicas de configuracion de la funcion _MegaID()_:

- La longitud del ID se limita a un rango de _3 a 10000_ caracteres.
- Permite obtener la siguiente informacion:
  - Configuracion actual establecida.

#### valores por defecto en las funciones:

Ambas funciones incluyen valores por defecto pero son configurables.

##### 🔹parametros por default de _miniID()_

```javascript
function miniID({
  length = 5,               // Longitud del ID
  groups = ["alfa"],        // Grupo de caracteres alfa-numéricos
  customChars = [],         // Grupo de caracteres custom
  repeat = false,           // Sin repetición de caracteres
  infoCombinations = false, // Cantidad de combinaciones (aproximada)
  infoConfig = false,       // Configuracion actual
  onlyCustom = false,       // Solo caracteres custom
} = {})
```

##### 🔹parametros por default de _MegaID()_

```javascript
function MegaID({
  length= 25,               // Longitud del ID
  groups = ["alfa"],        // Grupo de caracteres alfa-numéricos 
  customChars = [],         // Grupo de caracteres custom
  repeat = true,            // Con repetición de caracteres
  onlyCustom = false,       // Solo caracteres custom
  infoConfig = false,       // Configuracion actual
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
const infoCombinations = true;
const help = " "; 
const options = [{help:"length"}, {help:"repeat"}, {help:"onlyCustom"}, {help:"groups"}, {help:"customChars"},{help:"infoConfig"},{help:"infoCombinations"}]; 
const [lengthInfo, repeatInfo, onlyCustomInfo, groupsInfo, customCharsInfo,configInfo,combinationsInfo] = options ;

```

> Tanto la funcion `miniID()` como la funcion `MegaID()` reciben como parametro un objeto de configuracion:
> La mayoria de los parametros que reciben son booleanos por lo que tiene solo dos valores posibles (`true` o `false`)
> Con el fin de evitar escribir algo tal como {parametro:true} o {parametro:false}, parecia agil poner simplemente {parametro}

> Gracias a la limpieza previa de `customChars` usted puede pasar caracteres en una sola cadena de texto:
> De esta forma esto: --> `customChars:["1","h","s","♥","2","H","b","$"]` equivale a esto: --> `customChars:["1hs♥2Hb$"]`
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
MegaID() === MegaID({length: 25,repeat: true,groups: ["alfa"],onlyCustom: false,customChars: [],})
MegaID({ groups: [num, upp, low, alfa] }) === MegaID({ groups: ["num", "upp", "low", "alfa"] })
MegaID({ groups: [alfa] }) === MegaID({ groups: [num, upp, low] })
MegaID({ repeat: true }) === MegaID({ repeat })
MegaID({ repeat: false }) === MegaID({ repeat: no })
MegaID({ onlyCustom: true }) === MegaID({ onlyCustom })
MegaID({ customChars: [1, 2, 3, 4, 5, 6] }) === MegaID({ customChars: [123456] })
MegaID({ customChars: ["1", "2", "3", "4", "5", "6"] }) === MegaID({ customChars: ["123456"] });
```

## 🕵️ Funcionamiento Interno:

Esta sección describe los procesos de *validación* y *limpieza* que aseguran que los IDs se generen correctamente.


### Etapas de 👍validacion y limpieza🧹:

Antes de generar el ID ocurren una serie de validaciones y limpiezas para que las funciones encargadas de generar el ID trabajen con solo los datos necesarios.

**Validación de longitud**: Garantiza que la longitud esté dentro del rango permitido.
**Limpieza de caracteres personalizados**: Se eliminan caracteres duplicados y se normalizan cadenas de texto.


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
_Debido a que la libertad de configuracion amerita propuestas ilogicas, se idearon alternativas para evitar errores._

Si se proporciona una longitud mayor que el número de caracteres disponibles, se devuelve un ID por defecto. Para evitar este error, el usuario puede:

Hay **_tres_** formas de solucionarlo:

1. proporcionar mas caracteres en `customChars`:
   Hasta tener una cantidad de caracteres igual o mayor que la longitud exigida.
2. Disminuir la longitud exigida en `length`:
   Hasta tener una longitud igual o menor que la cantidad de caracteres proporcionados
3. Activar la repeticion con `repeat`:
   De esta forma, si exige una longitud de _X_ numeros, y proporciona al menos _1_ caracter, este o estos caracteres proporcionados se podran repetir todas las veces necesarias hasta generar un ID con la longitud exigida.

_🙏 si te gusta el proyecto puedes apoyarme comprandome un cafe: ☕_

<a href="https://www.buymeacoffee.com/dei8bit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

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