### **ES:**
#### *español*

***Experimenta y personaliza tus IDs de forma rápida con este generador***

# Generador Rápido de ID: 
*Un simple rapido y sencillo generador de IDs* 

Este repositorio contiene un sencillo y eficaz algoritmo para generar IDs de forma rápida y fácil.
Con tan Solo Dos funciónes y multiples opciones de configuración, puedes obtener IDs personalizados para tus necesidades.

Las funciones para la generacion de IDs son dos:
  + `miniID()`: Genera IDs **Pequeños** en un rango de [3 a 9]     caracteres de longitud.
  + `MegaID()`: Genera IDs **Grandes**  en un rango de [3 a 10000] caracteres de longitud.

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

- `num`: Números (0-9).  → **9 caracteres**
- `low`: Letras minúsculas (a-z). → **27 caracteres**
- `upp`: Letras mayúsculas (A-Z). → **27 caracteres**
- `alfa`: Números, letras minúsculas y mayúsculas. → **63 caracteres**

## ⚙️ Configuracion: 

### 🔧 Caracteristicas de configuracion comunes en ambas funciones: 
- Habilitar o Deshabilitar la repeticion caracteres.
- Elegir entre diferentes grupos de caracteres y grupos predeterminados.
- Usar un determinado grupo de caracteres brindados por el usuario.
- Establecer el uso de UNICAMENTE! los caracteres brindados por el usuario.

### 🔧 Caracteristicas de configuracion de la funcion *miniID()*:
- La longitud del ID se limita a un rango de *3 a 9* caracteres. 
- Brindar informacion relevante sobre los IDs: 
    + Cantidad de combinaciones posibles.
    + Configuracion actual establecida.

### 🔧 Caracteristicas de configuracion de la funcion *MegaID()*:
- La longitud del ID se limita a un rango de *3 a 10000* caracteres. 


#### valores por defecto en las funciones:
Ambas funciones reciben valores por defecto para una generacion sencilla en caso de que esta sea apropiada para las necesidades.


🔹parametros por default de *miniID()*

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

🔹parametros por default de *MegaID()*

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
Puedes personalizar la generación de *mini IDs* utilizando las siguientes opciones:


|   **PARAMETRO**  | **TIPO** |                                **UTILIDAD**                               | **VALOR PREDETERMINADO** |       **VALORES POSIBLES**     |
|:----------------:|:--------:|:-------------------------------------------------------------------------:|:------------------------:|:------------------------------:|
| length           | number   | Permite establecer la longitud del ID                                     | 5                        | numeros del 3 al 9             |
| repeat           | boolean  | Determina si el ID puede tener o no caracteres repetidos                  | false                    | true o false                   |
| infoCombinations | boolean  | Muestra la cantidad de combinaciones posibles con la configuracion actual | false                    | true o false                   |
| infoConfig       | boolean  | Muestra la configuracion que se ha elegido                                | false                    | true o false                   |
| onlyCustom       | boolean  | Determina si SOLO se utilizan los caracteres que brinda el usuario        | false                    | true o false                   |
| groups           | array    | Permite establecer que grupos de caracteres predeterminados son usados    | ["alfa"]                 | ["num", "low", "upp", "alfa"]; |
| customChars      | array    | Permite agregar cualquier caracter deseado                                | []                       | [cualquier caracter]           |


#### Opciones de Configuración para MegaID():
Puedes personalizar la generación de *mini IDs* utilizando las siguientes opciones:


| **PARAMETRO** | **TIPO** |                              **UTILIDAD**                              | **VALOR PREDETERMINADO** |      **VALORES POSIBLES**      |
|:-------------:|:--------:|:----------------------------------------------------------------------:|:------------------------:|:------------------------------:|
| length        | number   | Permite establecer la longitud del ID                                  | 25                       | numeros del 3 al 10000         |
| repeat        | boolean  | Determina si el ID puede tener o no caracteres repetidos               | true                     | true o false                   |
| onlyCustom    | boolean  | Determina si SOLO se utilizan los caracteres que brinda el usuario     | false                    | true o false                   |
| groups        | array    | Permite establecer que grupos de caracteres predeterminados son usados | ["alfa"]                 | ["num", "low", "upp", "alfa"]; |
| customChars   | array    | Permite agregar cualquier caracter deseado                             | []                       | [cualquier caracter]           |


###  ⚡ Configuracion agil: 
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
La mayoria de los parametros que reciben son booleanos por lo que tiene solo dos valores posibles (`true` o `false`)
Con el fin de evitar escribir algo tal como {parametro:true} o {parametro:false}, parecia agil poner simplemente {parametro}

> Gracias a la limpieza previa de `customChars` usted puede pasar caracteres en una sola cadena de texto:
De esta forma esto: --> `customChars:["1","h","s","♥","2","H","b","$"]` equivale a esto: --> `customChars:[1hs♥2Hb$]`
Y con este atajo puede ahorrar mucho tiempo al evitar las comillas ("") y las comas (,)


##### 📋 Ejemplos de uso con configuración *normal*:
Algunos ejemplos de los posibles resultados dada una configuracion.

+ ######  Ejemplo 1

```javascript
const customID = miniID({length: 8,repeat: true,infoConfig:true,onlyCustom: true,customChars: ["@", "#", "$"]});
console.log(customID);

/*↓ RESULTADO ↓*/
// largo del ID 8
// La repeticion esta activada
// los caracteres usados son @,#,$
// Cantidad de Caracteres Custom: 3 
// ##@$$@@@
```

+ ######  Ejemplo 2:

```javascript
const customID = miniID({length: 4,infoCombinations:true,repeat: false,group: ["low"]});
console.log(customID);

/*↓ RESULTADO ↓*/
// Combinaciones posibles: 13388280
// xsDc
```

+ ######  Ejemplo 3:

```javascript
const customID = miniID({length: 6,infoCombinations:true,repeat: false,group: ["low","num"]});
console.log(customID);

/*↓ RESULTADO ↓*/
// Combinaciones posibles: 44261653680
// Qw4Nz6
```

##### 📋 Ejemplos de uso con configuración *agil*:
Algunos ejemplos de los posibles resultados dada una configuracion.

+ ######  Ejemplo 1:

```javascript
const customID = miniID({length: 8,repeat,infoConfig,onlyCustom,customChars: ["@", "#", "$"]});
console.log(customID);

/*↓ RESULTADO ↓*/
// largo del ID 8
// La repeticion esta activada
// los caracteres usados son @,#,$
// Cantidad de Caracteres Custom: 3 
// @#$@#@@@
```

+ ######  Ejemplo 2:

```javascript
const customID = miniID({length: 4,infoCombinations,repeat,group:[low]});
console.log(customID);

/*↓ RESULTADO ↓*/
// Combinaciones posibles: 14776336
// 28hs
```

+ ######  Ejemplo 3:

```javascript
const customID = miniID({length: 4,infoCombinations,repeat,group:[low]});
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
MegaID() ===  MegaID({length:25,repeat:true,groups:["alfa"],onlyCustom:false,customChars:[]})
MegaID({groups:[num,upp,low,alfa]})  === MegaID({groups:["num","upp","low","alfa"]})
MegaID({groups:[alfa]}) ===  MegaID({groups:[num,upp,low]})
MegaID({repeat:true})  === MegaID({repeat})
MegaID({repeat:false})  === MegaID({repeat:no})
MegaID({onlyCustom:true})  === MegaID({onlyCustom})
MegaID({customChars:[1,2,3,4,5,6]})  === MegaID({customChars:[123456]})  
MegaID({customChars:["1","2","3","4","5","6"]})  === MegaID({customChars:["123456"]})
```

## 🕵️ Funcionamiento Interno:
Algunos detalles sobre el funcionamiento interno.

###  Etapas de 👍validacion y limpieza🧹: 
Antes de generar el ID ocurren una serie de validaciones y limpiezas que las funciones encargadas de generar el ID trabajen con solo los datos necesarios.

#### 👍 Contencion de longitud en un rango puntual: 
*esto evita bucles infinitos e IDs con una longitud coherente mayor a 1* 

*Incluso si el usuario ingresa numeros negativos o numeros extremadamente altos.*

- La constante `limit` garantiza que el ID siempre se va a mantener en los rangos estipulados.

#### 🧹 Limpieza de caracteres custom: 
*para que todos los caracteres puedan elegirse con la misma igualdad de probabilidades es necesario que no haya caracteres repetidos y que no haya similitudes simbolicas como lo serian 1 y "1".*
*Gracias a esta limpieza usted puede ahorrarse separar cada item de customChars con comas (,) y comilla ("") y escribirlos como si fueran una sola cadena de texto.*

1. Es por esto que primero se separan las cadenas de texto que tengan mas de un caracter y todos los numeros que tengan mas de una cifra. Durante el proceso Todos los caracteres otorgados, se transforman a variables de tipo `strings`.
2. Luego se coloca TODOS los caracteres recoletados en un conjunto, donde se elimina cualquier posibilidad de dobles concurrencias.
3. Finalmente esto se transforma a un arreglo limpio, para poder manipularlo y generar IDs correctamente.

## VARIABLES Y FUNCIONES UTILES:

#### Funciones:


+ ``` factorial() ```               --> Colabora con el calculo de la cantidad de combinaciones posibles.
+ ``` getAmmountCombinations() ```  --> Calcula la cantidad de combinaciones posibles segun la configuracion dada en `miniID()`.
+ ``` getRandomItem() ```           --> Obtiene un item random de un array dado.
+ ``` generateDefaultID() ```       --> Genera un ID por default en caso de errores en `miniID()` y `MegaID()`.

#### Variables:

+ ```const limit```               --> Limita la entrada de `length` dentro de los rangos estipulados en `miniID()` y ``MegaID()``
+ ```const customCharsClean```    --> Almacena todos los caracteres pasados por el usuario a `customChars` y separa los items que tengan mas de 1 de longitud.
+ ```const chars```               --> Crea un conjunto con todos los grupos predeterminados mas los caracteres custom.
+ ```const totalChars```          --> Almacena la longitud de `chars`
+ ```const amountCombinations```  --> Almacena la cantidad de combinaciones posibles.
+ ```const DefaultID```           --> Almacena el ID por default para casos de error.
+ ```const customCharsSet```      --> Crea un conjunto con los caracteres pasados por el usuario en el array `customChars` para eliminar caracteres repetidos.
+ ```let setToArray```            --> Convierte y almacena `customCharsSet` en un array, para poder operarlo.
+ ```let randomMiniID```          --> Almacena el mini ID final que se retornara al usuario.
+ ```let randomSuperID```         --> Almacena el mega ID final que se retornara al usuario.


### 🚧 Errores esperables:
Debido a que la libertad de configuracion amerita propuestas ilogicas, se idearon alternativas para evitar errores.
Siempre que el usuario intente una configuracion ilogica, se le devolvera un ID por defecto y tambien se le explicara porque ocurrio el error y como solucionarlo.

Estas configuraciones ilogicas solo ocurren en una simple circunstancia: 
*Cuando se pide un ID con una longitud mayor que la cantidad de caracteres proporcionados*

🤔 Metaforizandolo: Es simple, si te doy **5** letras,  y te digo que formes una palabra de **8** letras usando cada letra *SOLO UNA VEZ*, estas en un desafio imposible❗ 

Esto genera un bucle infinito en el codigo. y hay ***tres*** formas de solucionarlo:
1. proporcionar mas caracteres en `customChars`:
 Hasta tener una cantidad de caracteres igual o mayor que la longitud exigida.
2. Disminuir la longitud exigida en `length`:
 Hasta tener una longitud igual o menor que la cantidad de caracteres proporcionados
3. Activar la repeticion con `repeat`:
 De esta forma, si exige una longitud de *X* numeros, y proporciona al menos *1* caracter, este o estos caracteres proporcionados se podran repetir todas las veces necesarias hasta generar un ID con la longitud exigida.


*🙏 si te gusta el proyecto puedes apoyarme comprandome un cafe: ☕*  

<a href="https://www.buymeacoffee.com/dei8bit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

*No es lo primero ni lo utlimo que hago o voy a hacer, y siempre aspiro a un grado de prolijidad mayor 🙃* 


## ☝️ PROPUESTAS Y ERRORES 👾  
¿Encontrastes algun error? 😮
¿Quieres hacer una propuesta para mejorar el codigo o cambiarlo radicalmente haciendo que nada de esto tenga sentido? 😲

Me encantan los cambios siempre que sean buenos y esten justificados!🧐

*No dudes en contribuir o informar problemas si encuentras alguna mejora o ajuste necesario.*

### PROPUESTAS: ☝️
Si usted tiene una sugerencia para mejorar el codigo, por favor indiquela de la siguiente forma:
  + **Idea en resumen**: (Una explicacion breve en una linea)
  + **Variables involucradas en el cambio**, ejemplo: (customChars,infoConfig,etc...)
  + **Aspecto que se mejora al cambiar el codigo**, ejemplo:(seguridad, performance,legibilidad,acomplamiento,cohesion,etc...)
  + **Razon por la cual lo considera algo positivo** (opcional, no necesario siempre): (explicacion personal)
  + **Propuesta**: (una explicacion de que lo se propone)

***Ejemplo:***
*Este ejemplo es ficticio y no tiene un sentido practico es solo ilustrativo:*

***Usuario anonimo:***
+ **Idea:** Considero que no tiene sentido que haya caracteres predeterminados en minuscula y mayuscula.
+ **Variables involucradas:** 
  - characters.low 
  - characters.upp
+ **Aspecto que se mejora:** decremento en cantidad de lineas de codigo.
+ **Razon positiva:** Gracias a esto usted puede ahorrarse un monton de palabras innecesarias en su codigo 
+ **Propuesta:** La idea es que en vez de que haya dos grupos arreglos con caracteres uno en minusculas y otro en mayusculas, simplemente eliga uno y el otro lo transorme a mayusculas o minusculas segun la necesidad, de esta forma evita la necesidad de tener dos arrays con las mismas letras. ☺

### ERRORES: 👾
Si usted encuentra un error en el codigo, por favor indiquelo de la siguiente forma:
  + **Nombre del error.**
  + **Lugar del error.**
  + **Devolucion de la consola.**
  + **Comportamiento esperado.**

***Ejemplo:***
*Este ejemplo es ficticio y no tiene un sentido practico es solo ilustrativo:*

  + **Nombre del error**: `ReferenceError: asdfgh is not defined`
  + **Lugar del error**:  `console.log(MegaID({length:asdfgh,onlyCustom,repeat:no,customChars:[1234]}));`
  + **Devolucion de la consola**: `ReferenceError: asdfgh is not defined
    at Object.<anonymous> (c:\Users\usuario\Desktop\quick-id\logica.js:199:28)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.16.1`

  + **Comportamiento esperado**: Simplemente queria un ID que tenga los caracteres asdfgh mezclados de forma random.

# DISCLAIMER: 
*I am NOT a translator, I do not know English and Chinese in depth, but I still tried to force the translation so that at least something exists, I am aware that many of the sentences are going to be wrong. but at least they are there to correct themselves. I apologize, I have a great appreciation for both languages, and it would be a pleasure for me to have translations for the largest languages ​​in the world.* 🙇‍♂️🙇‍♂️


### **EN** 
#### *English*

### **ZH** 
#### *中国人*