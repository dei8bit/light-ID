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

lee mas en  https://github.com/dei8bit/light-ID#readme