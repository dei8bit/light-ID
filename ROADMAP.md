## _español_

⌛ --> **Pendiente**
✅ --> **Completado**
❌ --> **Rechazado**

### TAREAS:

1. Generar IDS de un minimo de 3 caracteres y un maximo de 9 caracteres alfanumericos y numericos [✅]
2. Crear un generador de IDs de mayor longitud [✅]
3. Permitir al usuario agregar caracteres a gusto. [✅]
4. Informacion por consola :

   - la cantidad de combinaciones segun la configuracion dada [✅]
   - Verificar que la informacion sea acorde a los mismos numeros independiente del scope [✅]
   - Error 1: los caracteres custom son menores que la longitud indicada y la repeticion esta desactivada [✅]

5. Crear un comando "help": para que el usuario pueda solicitar informacion por consola sobre la utilizacion del generador. [✅]

6. Mejorar y ampliar la configuracion agil [⌛]

7. Hacer que quick-id sea un paquete para:

- npm [✅]
- pnpm [⌛]
- yarn [⌛]

8. Crear un extension de VScode para generar IDs con quick-id: [⌛]
   - Configuracion en JSON: [⌛]
   - Un solo comando para generar ID en linea: [⌛]
   - Un solo comando para generar varios ID en serie con la misma configuracion: [⌛]
   - Un solo comando para generar varios ID en serie con diferentes configuraciones: [⌛]
   - snippets para diferentes formas de generar IDs: (ACTIVADOS o DESACTIVADOS en JSON): [⌛]
      •idnew: ID por default: [⌛]
      •idlow: ID lowercase: [⌛]
      •idupp: ID uppercase: [⌛]
      •idnum: ID numerico: [⌛]  
      •idmax:ID con la mayor complejidad posible: [⌛]
      •idmin:ID con la menor complejidad posible: [⌛]

9. Traducir correctamente al INGLES y CHINO:

- Documentacion. [⌛]
- Mensajes por consola [⌛]
- Comentarios en codigo [⌛]
- TO-DOS [⌛]

10. Crear una interfaz grafica para generar IDs de forma practica, eficiente y comoda. [⌛]

11. Convertir todo el algoritmo a typescript para mayor seguridad  [⌛]

12. Agregar un set que permita acumular los IDs creados con una configuracion especifica,  pudiendo asi evitar duplicaciones   [⌛]

13. definir tests para todos y cada uno de los algoritmos [⌛]

14. opcion para acumular todos los IDS generados en un array, para una doble comprobacion de duplicados [⌛]

15. Crear un CLI de ayuda mas amigable e intuitivo que este separado de las funciones  miniID y MegaID [⌛]

16. Mejorar la estructura de este archivo probablemente moviendolo a github projects o catalogando las tareas de forma practica y legible divididas en "completed" y "upcoming"[⌛]

16. Crear la opcion de incluir un caracter especial cada tantos caracteres como un guion "-" cada tres o un dolar "$" cada 5 , o elegir un patron de saltos y caracteres:
   por ejemplo: 3,2,1 "-" "-" "$"  resultando en: vS2-1h-1$[⌛]


🔴**Problematicas:**

❗ ¿Que ocurre cuando el numero de caracteres de customChars es menor a el largo y la repeticion esta desactivada? ✅

- 🟢 SOLUCION: Se informa por consola y se retorna un ID por Default

❗ ¿Que ocurre cuando se pasan cadenas mayores a 1 de longitud en customChars?

- 🟢 SOLUCION 1: Se retorna un ID por default y se informa del error [❌]
- 🟢 SOLUCION 2: Se elige solo uno de todos los caracteres de la cadena. [❌]
- 🟢 SOLUCION 3: Se separan todos los caracteres y se agregan individualmente a customChars. [✅]
- 🟢 SOLUCION 4: Se Elimina la cadena y se trabaja con los caracteres custom restantes. [❌]

❗ ¿Que ocurre cuando se pasan grupos y customs ?

- 🟢 SOLUCION: existe la opcion de que se utilizen en conjunto o por separado [✅]

❗ ¿Que ocurre cuando se pasan caracteres simbolicos similares customChars?

- 🟢 SOLUCION: La funcion `forEach` en `customChars` se encarga de convertir todos los caracteres a strings, luego un conjunto erradica toda posibilidad de concurrencias [✅]

❗ ¿Que ocurre cuando se pasan caracteres repetidos en customChars?

- 🟢 SOLUCION: se crea un conjunto llamado `customCharsSet` erradica cualquier posibilidad de concurrencias multiples [✅]

# DISCLAIMER:

_I am NOT a translator, I do not know English and Chinese in depth, but I still tried to force the translation so that at least something exists, I am aware that many of the sentences are going to be wrong. but at least they are there to be corrected. I apologize, I have a great appreciation for both languages, and it would be a honor for me to have translations for the largest languages ​​in the world._ 🙇‍♂️🙇‍♂️

## _English_

⌛ --> **Pending**
✅ --> **Completed**
❌ --> **Rejected**

### TASKS:

1. Generate IDs with a minimum of 3 characters and a maximum of 9 alphanumeric and numeric characters [✅]
2. Create an ID generator with greater length [✅]
3. Allow the user to add characters as desired [✅]
4. Console information:

   - the number of combinations according to the given configuration [✅]
   - Verify that the information is consistent with the same numbers regardless of the scope [✅]
   - Error 1: custom characters are less than the indicated length, and repetition is disabled [✅]

5. Create a "help" command: so that the user can request information via the console on how to use the generator. [⌛]

6. Improve and expand agile configuration [⌛]

7. Make quick-id a package for:

   - npm [⌛]
   - pnpm [⌛]
   - yarn [⌛]

8. Create a VSCode extension to generate IDs with quick-id: [⌛]

   - JSON configuration: [⌛]
   - Single command to generate ID inline: [⌛]
   - Single command to generate multiple IDs in series with the same configuration: [⌛]
   - Single command to generate multiple IDs in series with different configurations: [⌛]
   - Snippets for different ways of generating IDs: (ENABLED or DISABLED in JSON): [⌛]
     • idnew: Default ID: [⌛]
     • idlow: Lowercase ID: [⌛]
     • idupp: Uppercase ID: [⌛]
     • idnum: Numeric ID: [⌛]
     • idmax: ID with the highest possible complexity: [⌛]
     • idmin: ID with the lowest possible complexity: [⌛]

9. Correctly translate to ENGLISH and CHINESE:
   - Documentation. [⌛]
   - Console messages [⌛]
   - Code comments [⌛]
   - TO-DOS [⌛]

10. Create a graphical interface to create IDs through accessible configuration [⌛]


🔴**Issues:**

❗ What happens when the number of characters in customChars is less than the length, and repetition is disabled? ✅

- 🟢 SOLUTION: It is reported in the console, and a Default ID is returned.

❗ What happens when strings longer than 1 are passed in customChars?

- 🟢 SOLUTION 1: A default ID is returned, and the error is reported. [❌]
- 🟢 SOLUTION 2: Only one character from the string is chosen. [❌]
- 🟢 SOLUTION 3: All characters are separated and individually added to customChars. [✅]
- 🟢 SOLUTION 4: The string is removed, and the remaining custom characters are used. [❌]

❗ What happens when both groups and custom characters are passed?

- 🟢 SOLUTION: There is an option to use them together or separately. [✅]

❗ What happens when similar symbolic characters are passed in customChars?

- 🟢 SOLUTION: The `forEach` function in `customChars` converts all characters to strings, and then a set eliminates any possibility of duplicate entries. [✅]

❗ What happens when repeated characters are passed in customChars?

- 🟢 SOLUTION: A set named `customCharsSet` is created, eliminating any possibility of multiple duplicates. [✅]

## _中文_

⌛ --> **待处理**
✅ --> **已完成**
❌ --> **已拒绝**

### 任务：

1. 生成最小 3 个字符和最大 9 个字符的字母数字和数字 ID [✅]
2. 创建一个更长 ID 的生成器 [✅]
3. 允许用户根据需要添加字符 [✅]
4. 控制台信息：

   - 根据给定配置的组合数量 [✅]
   - 验证信息是否与范围无关的相同数字一致 [✅]
   - 错误 1：自定义字符少于指定长度，且禁用重复 [✅]

5. 创建一个“help”命令：以便用户可以通过控制台请求关于如何使用生成器的信息 [⌛]

6. 改进和扩展灵活的配置 [⌛]

7. 使 quick-id 成为：

   - npm 的包 [⌛]
   - pnpm 的包 [⌛]
   - yarn 的包 [⌛]

8. 创建一个 VSCode 扩展来使用 quick-id 生成 ID：[⌛]

   - JSON 配置：[⌛]
   - 生成内联 ID 的单个命令：[⌛]
   - 生成具有相同配置的多个 ID 的单个命令：[⌛]
   - 生成具有不同配置的多个 ID 的单个命令：[⌛]
   - 用于生成不同方式 ID 的片段：（在 JSON 中启用或禁用）：[⌛]
     • idnew：默认 ID：[⌛]
     • idlow：小写 ID：[⌛]
     • idupp：大写 ID：[⌛]
     • idnum：数字 ID：[⌛]
     • idmax：具有最大可能复杂性的 ID：[⌛]
     • idmin：具有最低可能复杂性的 ID：[⌛]

9. 正确翻译成英文和中文：
   - 文档。 [⌛]
   - 控制台消息 [⌛]
   - 代码注释 [⌛]
   - 待办事项 [⌛]

10. 创建图形界面，通过可访问的配置创建ID [⌛]

🔴**问题：**

❗ 当 customChars 中的字符数少于长度且禁用重复时会发生什么？ ✅

- 🟢 解决方案：在控制台中报告，并返回默认 ID。

❗ 当在 customChars 中传递长度大于 1 的字符串时会发生什么？

- 🟢 解决方案 1：返回默认 ID，并报告错误。 [❌]
- 🟢 解决方案 2：仅选择字符串中的一个字符。 [❌]
- 🟢 解决方案 3：将所有字符分开，并逐个添加到 customChars。 [✅]
- 🟢 解决方案 4：删除字符串，使用剩余的自定义字符。 [❌]

❗ 当同时传递组和自定义字符时会发生什么？

- 🟢 解决方案：有选项可以同时使用它们或分开使用。 [✅]

❗ 当在 customChars 中传递类似的符号字符时会发生什么？

- 🟢 解决方案：`customChars`中的`forEach`函数将所有字符转换为字符串，然后集合消除了任何重复条目的可能性。 [✅]

❗ 当在 customChars 中传递重复字符时会发生什么？

- 🟢 解决方案：创建一个名为`customCharsSet`的集合，消除了任何多重重复的可能性。 [✅]
