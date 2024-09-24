[⏳] --> **Pendent**
[✔️] --> **Done**
[❌] --> **Rejected**


## ENFOQUE🧿: 
_Un generador de IDS simple, liviano y sencillo de usar e implementar_

---

## LOGISTICA📦: 
- 🧩Add: Traducir correctamente al INGLES y CHINO: [⏳] 
   - 🔹 Documentacion. [⌛]
   - 🔹 Mensajes por consola [⌛]
   - 🔹 Comentarios en codigo [⌛]
   - 🔹 TO-DOS [⌛]


### - 🐛Bug:
   - 👀Check: cuando se invoca a la funcion infoConfig con el parametro customChars activo con al menos un valor Ej: MegaID({infoConfig , customChars:["♥"]}), el mensaje por consola muestra un monton de informacion de más, pasa tanto en MegaID como miniID[⏳]

### - ♻️Refactor:

- ☄️Boost:  Mejorar la estructura de este archivo probablemente moviendolo a github projects o catalogando las tareas de forma practica y mas legible [✔️]

- 🧩Add: definir tests para todos y cada uno de los algoritmos [⌛]

### - ✨Feature: 

- 🧩Add: Generar IDS de un minimo de 3 caracteres y un maximo de 9 caracteres alfanumericos y numericos [✔️]

- 🧩Add: Crear un generador de IDs de mayor longitud [✔️]

- 🧩Add: Permitir al usuario agregar caracteres a gusto. [✔️]

- 🧩Add: Informacion por consola:
   - 🔹  la cantidad de combinaciones segun la configuracion dada [✔️]
   - 🔹  Verificar que la informacion sea acorde a los mismos numeros independiente del scope [✔️]
   - 🔹  Error 1: los caracteres custom son menores que la longitud indicada y la repeticion esta desactivada [✔️]

- 🐣Spawn: Convertir todo el algoritmo a typescript para mayor seguridad  [⌛]

- 🧩Add: Agregar una configuracion especifica que genere un set que acumula  un historial con todos los IDs creados ,  pudiendo asi evitar duplicaciones [⌛] 

- 🐣Spawn: Hacer que quick-id sea un paquete para:
   - 🔹 npm [✔️]
   - 🔹 pnpm [⌛]
   - 🔹 yarn [⌛]
   - 🔹 bun [⌛]


- 🧩Add: Crear la opcion de incluir un caracter especial cada tantos caracteres como un guion "-" cada tres o un dolar "$" cada 5 , o elegir un patron de saltos y caracteres: por ejemplo: 3,2,1 "-" "-" "$"  resultando en: vS2-1h-1$[⌛]

- 🆕Create: Crear un comando "help": para que el usuario pueda solicitar informacion por consola sobre la utilizacion del generador. [✔️]

- ☄️Boost: Mejorar y ampliar la configuracion agil [⌛]


## upcoming📌: 

- 🎨Design: Crear una interfaz grafica para generar IDs de forma practica, eficiente y comoda. [⌛]

- 🎨Design: Crear un CLI de ayuda mas amigable e intuitivo que este separado de las funciones  miniID y MegaID [⌛]
   - 🔹 Incorporar chalk y boxen al CLI.  

- 🤔Plan: Pensar en alguna forma de crear multiples IDs, que el usuario pueda elegir crear 7 IDs con una configuracion (quizas devolver un array con todos los IDs generados.) [⏳]

- 🤔Plan: Crear una extension de VScode para generar IDs con quick-id: [⌛]
   - 🔹 Configuracion en JSON: [⌛]
   - 🔹 Un solo comando para generar ID en linea: [⌛]
   - 🔹 Un solo comando para generar varios ID en serie con la misma configuracion: [⌛]
   - 🔹 Un solo comando para generar varios ID en serie con diferentes configuraciones: [⌛]
   - 🔹 snippets para diferentes formas de generar IDs: (ACTIVADOS o DESACTIVADOS en JSON): [⌛]
      • idnew: ID por default: [⌛]
      • idlow: ID lowercase: [⌛]
      • idupp: ID uppercase: [⌛]
      • idnum: ID numerico: [⌛]  
      • idmax:ID con la mayor complejidad posible: [⌛]
      • idmin:ID con la menor complejidad posible: [⌛]



## 🛑 **Problematicas:** 🛑

#### ❗ ¿Que ocurre cuando el numero de caracteres de customChars es menor a el largo y la repeticion esta desactivada? [✔️]
_🟢 SOLUCION: Se informa por consola y se retorna un ID por Default_

#### ❗ ¿Que ocurre cuando se pasan cadenas mayores a 1 de longitud en customChars?

- 🟢 SOLUCION 1: Se retorna un ID por default y se informa del error [❌]
- 🟢 SOLUCION 2: Se elige solo uno de todos los caracteres de la cadena. [❌]
- 🟢 SOLUCION 3: Se separan todos los caracteres y se agregan individualmente a customChars. [✔️]
- 🟢 SOLUCION 4: Se Elimina la cadena y se trabaja con los caracteres custom restantes. [❌]

#### ❗ ¿Que ocurre cuando se pasan grupos y customs ?

- 🟢 SOLUCION: existe la opcion de que se utilizen en conjunto o por separado [✔️]

#### ❗ ¿Que ocurre cuando se pasan caracteres simbolicos similares customChars?

- 🟢 SOLUCION: La funcion `forEach` en `customChars` se encarga de convertir todos los caracteres a strings, luego un conjunto erradica toda posibilidad de concurrencias [✔️]

#### ❗ ¿Que ocurre cuando se pasan caracteres repetidos en customChars?

- 🟢 SOLUCION: se crea un conjunto llamado `customCharsSet` erradica cualquier posibilidad de concurrencias multiples [✔️]

#### ❗ Con el fin de agregar informacion por consola mas visual, ¿vale la pena agregar mas paquetes como chalk o es mejor mantener light-ID liviano?

- 🟢 SOLUCION 1: se agregan los paquetes de todas formas porque la idea es mejorar la experiencia de usuario  [❌]
- 🟢 SOLUCION 2: se respeta a los usuarios que quieren un paquete lo mas liviano posible cueste lo que cueste [❌]
- 🟢 SOLUCION 3: se crea un paquete aparte que tiene como dependencia a light-ID y que provee una interfaz enriquecida (logrando una solucion media entre las dos anteriores) [✔️]