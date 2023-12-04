### TO-DOS:
1. Generar IDS de un minimo de 3 caracteres y un maximo de 9 caracteres alfanumericos y numericos  [✅]
2. Crear un generador de IDs de mayor longitud  [✅]
3. Permitir al usuario agregar caracteres a gusto.  [✅]
4. Informacion por consola :
   + la cantidad de combinaciones segun la configuracion dada  [✅]
   + Verificar que la informacion sea acorde a los mismos numeros independiente del scope []
   + Error 1: largo no soportado  [✅]
   + Error 2: los caracteres custom son menores que la lonitud indicada y la repeticion esta desactivada  [✅]
5. Crear un comando "help": para que el usuario pueda solicitar informacion por consola sobre la utilizacion del generador. []
6. Mejorar y aumentar la configuracion agil[]

7. Hacer que mini-id sea una paquete para: 
  + npm  []
  + pnpm []
  + yarn []

8. Lograr que mini-id sea tambien una extension Sencilla y practica para VSCode: [ ]
  - Configuracion en JSON: [ ]   
  - Un solo comando para generar ID en linea: [ ]  
  - Un solo comando para generar ID en serie: [ ]  
  - snippets para diferentes formas de generar IDs: (ACTIVADOS o DESACTIVADOS en JSON): [ ]
    •idnew: ID por default: [ ] 
    •idlow: ID Lowercase:   [ ]
    •idupp: ID Uppercase:   [ ] 
    •idnum: ID numerico:    [ ]  
    •idmax:ID con la mayor complejidad posible: [ ]
    •idmin:ID con la menor complejidad posible: [ ]

9. Traducciones al INGLES y CHINO de:
  + Documentacion. []
  + Mensajes por consola [ ]


🔴**Problematicas:**

❗ ¿Que ocurre cuando el numero de caracteres de customChars es menor a el largo y la repeticion esta desactivada? ✅
  + 🟢 SOLUCION: Se informa por consola y se retorna un ID por Default

❗ ¿Que ocurre cuando se pasan cadenas mayores a 1 de longitud en customChars? 
  + 🟢 SOLUCION 1: Se retorna un ID por default y se informa del error 
  + 🟢 SOLUCION 2: Se elige solo uno de todos los caracteres de la cadena.
  + 🟢 SOLUCION 3: Se separan todos los caracteres y se agregan individualmente a customChars. (creo que esta es la mejor) (si es asi entonces va a exitir la redunancia  customChars:["1","2","3","4"] === customChars:["1234"], y de paso la agilizacion de custom chars )
  + 🟢 SOLUCION 4: Se Elimina la cadena y se trabaja con los caracteres custom restantes.

❗ ¿Que ocurre cuando se pasan grupos y customs ? ✅
  + 🟢 SOLUCION: existe la opcion de que se utilizen en conjunto o por separado

❗ ¿Que ocurre cuando se pasan caracteres repetidos en customChars? ✅
  + 🟢 SOLUCION: La funcion previa a los caracteres crea un set que erradica la posibilidad de concurrencias