# Desafíos de JavaScript

Aquí presento mi resolución para los 25 desafíos de [AdventJS](https://adventjs.dev)



## Desafío 01 - [Contando ovejas para dormir](https://adventjs.dev/challenges/01)

Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color `rojo` **y que además** su nombre contenga tanto las letras `n` Y `a`, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

```js
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]
```

Al ejecutar el método debería devolver lo siguiente:

```js
const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

Recuerda. **Debe contener las dos letras 'a' y 'n' en el nombre**. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.

**Resolución: [ch01_countSheep.js](ch01_countSheep.js)** 



## Desafío 02 - [¡Ayuda al elfo a listar los regalos!](https://adventjs.dev/challenges/02)

Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque **ten cuidado**, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un **`_`** delante de la palabra, por ejemplo `_playstation`, que significa que **está tachado y no se tiene que contar.**

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

```js
const carta = 'bici coche balón _playstation bici coche peluche'
```

Al ejecutar el método debería devolver lo siguiente:

```js
const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
```

Ten en cuenta que los tests pueden ser más exhaustivos... 😝 **¡Cuidado con contar espacios vacíos!**

**Resolución: [ch02_listGifts.js](ch02_listGifts.js)** 



## Desafío 03 - [El Grinch quiere fastidiar la Navidad](https://adventjs.dev/challenges/03)

El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis `()`.

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

**¡Pero ojo!** Porque el Grinch ha dejado llaves `{` y corchetes `[` dentro de los paréntesis que **hacen que no sean válidas**. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

```js
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
      
```

Crea una función que pasándole el texto de la carta, devuelva `true` si es válida y `false` si no lo es. ¡Y acaba con la travesura del Grinch!

**Resolución: [ch03_isValid.js](ch03_isValid.js)** 



## Desafío 04 - [¡Es hora de poner la navidad en casa!](https://adventjs.dev/challenges/04)

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento `5`, se pintaría esto:

```js
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

Creamos un triángulo de asteriscos `*` con la altura proporcionada y, a los lados, usamos el guión bajo `_` para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.



Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de `#`.

Otro ejemplo con un árbol de altura `3`:

```js
__*__
_***_
*****
__#__
__#__
```

Ten en cuenta que el árbol es un string y necesitas los saltos de línea `\n` para cada línea para que se forme bien el árbol.

**Resolución: [ch04_createXmasTree.js](ch04_createXmasTree.js)** 



## Desafío 05 - [Contando los días para los regalos](https://adventjs.dev/challenges/05)

Con la emoción, ya estamos empezando a **contar los días del calendario hasta el 25 de diciembre 📆.**

Para ayudar a esto, vamos a crear una función que pasándole una instancia de `Date` nos diga el número de días que faltan.

Veamos unos ejemplos:

```js
const date1 = new Date('Dec 1, 2021')
daysToXmas(date1) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
daysToXmas(date2) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
daysToXmas(date3) // 1
const date4 = new Date("December 20, 2021 03:24:00")
daysToXmas(date4) // 5
```

El resultado tiene que ser **un número entero** y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.

**¡Pero ojo!** También hay que indicar si la fecha es del mismo día (devolveríamos `0`) o si es una fecha futura (devolveríamos el número de días en negativo `-`):

```js
const date = new Date('Dec 25, 2021')
daysToXmas(date) // 0
const date1 = new Date('Dec 26, 2021')
daysToXmas(date1) // -1
const date2 = new Date('Dec 31, 2021')
daysToXmas(date2) // -6
const date3 = new Date('Jan 1, 2022 00:00:01')
daysToXmas(date3) // -7
const date4 = new Date('Jan 1, 2022 23:59:59')
daysToXmas(date4) // -7
```

Por cierto, la fecha de referencia para saber si es 25 de diciembre es `Dec 25, 2021`.

**Resolución: [ch05_daysToXmas.js](ch05_daysToXmas.js)** 



## Desafío 06 - [Rematando los exámenes finales](https://adventjs.dev/challenges/06)

Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces **pueden haber más de dos valores** que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, **sin importar lo lejos que esté a la derecha**.

Si no se encuentra, se devuelve `null`.

Veamos unos ejemplos:

```js
sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
```

El resultado tiene que ser **un array con dos números**.

Una vez que tengas el resultado... ¿cómo podrías hacer que fuese lo más óptimo posible para **no tener que recorrer las mismas situaciones dos veces** 🤔?

**Resolución: [ch06_sumPairs.js](ch06_sumPairs.js)** 



## Desafío 07 - [Buscando en el almacén...](https://adventjs.dev/challenges/07)

Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función `contains` que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:

```js
const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
contains(almacen, 'camiseta') // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
contains(otroAlmacen, 'gameboy') // false
```

Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones.**Lo importante es buscar que el producto está en los almacenes.**

**Resolución: [ch07_contains.js](ch07_contains.js)** 



## Desafío 08 - [La locura de las criptomonedas](https://adventjs.dev/challenges/08)

Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que **no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.**

Por ejemplo:

```js
const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
    
```

**Si ese día no se puede sacar ningún beneficio**, tenemos que devolver `-1` para evitar que hagamos una locura:

```js
const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) = // -> -1 (no hay ganancia posible)
```

**Resolución: [ch08_maxProfit.js](ch08_maxProfit.js)** 



## Desafío 09 - [Agrupando cosas automáticamente](https://adventjs.dev/challenges/09)

En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

Por suerte a **Mark Zucktheelf 🧝** se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.

Nos trae un montón de **ejemplos**:

```js
groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
)
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
```

Como ves, la función `groupBy` recibe una colección (array) y una función o una propiedad, y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.

La dificultad del reto está más en **comprender** la función que en la **implementación**. ¡Suerte!.

**Resolución: [ch09_groupBy.js](ch09_groupBy.js)** 



## Desafío 10 - [La máquina de cambio](https://adventjs.dev/challenges/10)

Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.

Las monedas para cambio que puedes usar son estas:

```js
coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos
```

Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la **combinación de monedas mínimas** que debemos usar para conseguirlo.

```js
getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
```

La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que tienes disponible para crear el array con la devolución, ya que **debes usar siempre el menor número de monedas posible**. ¡Suerte 👩‍💻👨‍💻!.

**Resolución: [ch10_getCoins.js](ch10_getCoins.js)** 



## Desafío 11 - [¿Vale la pena la tarjeta fidelidad del cine?](https://adventjs.dev/challenges/11)

Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.

Mi cine favorito tiene dos posibilidades:

- • Entrada de un sólo uso: Cuesta 12$ por cada película.
- • Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas **pagas sólo el 75% del precio del ticket**. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.



Ejemplo de cada una al comprar 3 entradas y el precio que pagaría en total:

```js
// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
```

Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.

```js
shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad
```

La dificultad del reto está en encontrar una fórmula sencilla que nos diga el precio con descuento acumulado para la tarjeta fidelidad. 😜

**Resolución: [ch11_shouldBuyFidelity.js](ch11_shouldBuyFidelity.js)** 



## Desafío 12 - [La ruta perfecta para dejar los regalos](https://adventjs.dev/challenges/12)

En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para dejar los regalos.

**La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.**

El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. El problema es que nos ha dado la **lista de posiciones de los obstáculos desordenada**... 😅 aunque al menos nunca **la posición 0 puede tener un obstáculo.**

Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱

Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta.

```js
const obstacles = [5, 3, 6, 7, 9]
getMinJump(obstacles) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

const obstacles = [2, 4, 6, 8, 10]
getMinJump(obstacles) // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2
*/
```

La dificultad del reto está en pensar que sólo podemos configurar el salto del trineo una vez y que buscamos el salto mínimo que nos serviría para sortear todos los obstaculos.

**Resolución: [ch12_getMinJump.js](ch12_getMinJump.js)** 



## Desafío 13 - [Envuelve regalos con asteriscos](https://adventjs.dev/challenges/13)

¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

- Si el array está vacío, devuelve un array vacío
- Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
- Por suerte, cada posición del array siempre tiene la misma longitud...



```js
wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
```

**Resolución: [ch13_wrapGifts.js](ch13_wrapGifts.js)** 



## Desafío 14 - [En busca del reno perdido](https://adventjs.dev/challenges/14)

¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, *Elfon Musk* ha hecho inventario y nos pasa un array con los ids de cada reno.

**👍 Lo bueno:** los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

**👎 Lo malo:** la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

```js
missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)
```

Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?

**Resolución: [ch14_missingReindeer.js](ch14_missingReindeer.js)** 



## Desafío 15 - [El salto perfecto](https://adventjs.dev/challenges/15)

¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles. Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

Nuestro mecánico de confianza, **Kiko Belfs**, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos que asegurarnos que **los números suben y bajan de forma correcta**. También nos avisa que sólo pasaremos **arrays de, como mínimo, tres posiciones**.

Nos ha pasado algunos ejemplos de cómo debería ser nuestra función y algunos resultados:

```js
checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!
```

**Lo importante**: recorrer el array de izquierda a derecha para ver que la subida es siempre estricta, detectar el punto más alto y entonces ver que la bajada es estricta hacia abajo...

**Resolución: [ch15_checkSledJump.js](ch15_checkSledJump.js)** 



## Desafío 16 - [Descifrando los números...](https://adventjs.dev/challenges/16)

Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

```
Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100
```

Lara, además, ha notado una cosa. **Los símbolos se restan si están \**inmediatamente\** a la izquierda de otro mayor. 😱**

Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un `NaN`:

```js
decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
```

**Resolución: [ch16_decodeNumber.js](ch16_decodeNumber.js)** 



## Desafío 17 - [La locura de enviar paquetes en esta época](https://adventjs.dev/challenges/17)

Las empresas de paquetería 📦 se preparan para la época de fiestas y la locura de envíos que les espera.

La empresa funciona con flotas de furgonetas 🚛 y camiones 🚚. Las flotas tienen un organigrama, ya que existen rangos de nivel de experiencia.

Necesitamos saber el número de paquetes que una persona va a poder gestionar en un día. Para ello se cuenta el número de paquetes que puede llevar esa persona y **todos los transportistas que tiene en su equipo**. Lo malo es que los datos están almacenados de una forma un poco rara en un array:

- El array contiene otros arrays que contienen los datos de cada transportista
- `transportista[0]` -> Nombre/ID del Transportista
- `transportista[1]` -> Paquetes que gestiona en un día
- `transportista[2]` -> Array con sus subordinados



Para que lo veamos en código, tanto el array, como la función de dos parámetros para conseguir el número deseado:

```js
const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu') // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

countPackages(carriers2, 'camila') // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
```

**¡Ten cuidado!** Como has visto en el segundo ejemplo, **el organigrama puede tener diferentes niveles y además nos viene información que puede ser que no necesitemos.** Debemos tener en cuenta el parámetro de `carrierID` para calcular bien el número y contar todo su equipo.

**Resolución: [ch17_countPackages.js](ch17_countPackages.js)** 



## Desafío 18 - [El sistema operativo de Santa Claus](https://adventjs.dev/challenges/18)

Evelyn Belefzin 👩‍💻 está trabajando en **un sistema operativo** para ser usado en el taller de Santa Claus 🎅.

Se ha dado cuenta que en el taller nadie le presta atención a los nombres de los ficheros y a veces intentan guardar el mismo fichero más de una vez... así que es importante que **gestionemos bien los nombres duplicados**.

Tenemos que crear **una función que al pasarnos un array de nombres de archivo** devolvamos un array con el mismo número de elementos pero donde los nombres que se repetían se anexe al final `(k)` donde *k* sería el número de veces que se encontró repetido.

Lo mejor es que veamos un ejemplo:

```js
const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
```

Por cierto, **nos han dicho que son Agile y usan Scrum**. Por eso quieren saber cuánto tiempo vas a tardar para saber cuándo van a poder usarlo. Que hay prisa. 😝 Así que [entra a Discord y cuéntanos.](https://discord.gg/midudev)

**Resolución: [ch18_fixFiles.js](ch18_fixFiles.js)** 



## Desafío 19 - [¿Qué deberíamos aprender en Platzi?](https://adventjs.dev/challenges/19)

Con motivo de las fechas más bonitas del año, en [Platzi han lanzado una promoción muy especial](https://platzi.com/navidad/?utm_source=partnerships&utm_medium=paid&utm_campaign=MX_web_MiguelA_UF&utm_content=post) porque **la educación es un regalo 🎁 para siempre.**

En Platzi tienen **más de 800 cursos 📚** pero, claro, nuestro tiempo es limitado. Así que vamos a optimizar nuestro tiempo disponible para **completar dos cursos usando el máximo número de horas disponible.**

Tenemos que crear **una función que recibe dos parámetros**. El primero es el número de horas que tenemos disponible ⏳ y el segundo es un array donde cada índice es un curso y el valor el tiempo que se tarda en completar.

**Tenemos claro que queremos hacer dos cursos** así que la función debe devolver un array con el índice de los dos cursos que vamos a poder completar con el tiempo disponible proporcionado y **usando el máximo tiempo disponible**. Si no nos da tiempo, devolvemos `null`

Vamos a ver unos ejemplos:

```js
learn(10, [2, 3, 8, 1, 4]) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

learn(15, [2, 10, 4, 1]) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

learn(25, [10, 15, 20, 5]) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos

learn(8, [8, 2, 1]) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

learn(8, [8, 2, 1, 4, 3]) // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

learn(4, [10, 14, 20]) // null -> no nos da tiempo a hacer dos cursos

learn(5, [5, 5, 5]) // null -> no nos da tiempo a hacer dos cursos
```

Mirando todo el tema de Platzi, además nos hemos dado cuenta que tienen [un descuento especial para Navidad](https://platzi.com/navidad/?utm_source=partnerships&utm_medium=paid&utm_campaign=MX_web_MiguelA_UF&utm_content=post). ¿No sabes qué regalar? **Regala conocimiento 🎓.**

**Resolución: [ch19_learn.js](ch19_learn.js)** 



## Desafío 20 - [¿Una carta de pangramas? ¡QUÉ!](https://adventjs.dev/challenges/20)

En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

Desde el taller de Santa 🎅 se han enterado y quieren escribir **una función** que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la `á` y la `ä` cuenta como una `a`.

Vamos a ver unos ejemplos de frases:

```js
pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false
```

Y ya que estás... **¿Cuál es tu pangrama favorito?** ¡Compártelo en nuestra comunidad de [**Discord**](https://discord.gg/midudev)!

**Resolución: [ch20_pangram.js](ch20_pangram.js)** 



## Desafío 21 - [La ruta con los regalos](https://adventjs.dev/challenges/21)

Se están preparando las rutas para el trineo de Santa 🎅. Tenemos almacenes por todo el mundo para que Santa pueda recoger los regalos y entregarlos en el destino final. 🎁

Necesitamos saber si las rutas que estamos creando tienen sentido o si Santa va a tener que dejar tirados regalos por el camino. 🥺

Para eso vamos a crear una función que recibe dos parámetros:

- Un número con la **capacidad máxima de regalos en el trineo**.

- El viaje que es un array de arrays. Cada subarray contiene tres números que representan:

- - `trip[0]` = número de regalos a transportar
  - `trip[1]` = punto de recogida de los regalos
  - `trip[2]` = punto de entrega de los regalos

La ruta siempre va de izquierda a derecha (nunca volverá Santa hacia atrás) pero... ¡ten en cuenta que en mitad de la ruta puede tener que recoger regalos cuando ya tiene alguno encima!

Lo mejor es que veamos un ejemplo:

**Resolución: [ch21_canCarry.js](ch21_canCarry.js)** 



## Desafío 22 - [¿Cuantos adornos necesita el árbol?](https://adventjs.dev/challenges/22)

¡Ay! Que llega la Navidad y no hemos decorado todavía el árbol. 🎄😱

Necesitamos una función que pasándole un árbol binario nos diga el número de decoraciones que necesitamos. Para ello tenemos un objeto que sería la representación del árbol y que nos indica en cada nivel el número de ramas a decorar.

Lo mejor es que veamos un ejemplo:

```js
// tenemos el árbol en forma de objeto
const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  }
}

/* Gráficamente sería así:
    1
  /   \
 2     3

1 + 2 + 3 = 6
*/

countDecorations(tree) // 6

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}

/*
        1
      /   \
     5     6
    /     / \
   7     5   1
  /
 3
*/

countDecorations(bigTree) // 28
```

Por cierto, Bellf Gates me ha contado que este tipo de ejercicio es muy típico en las entrevistas de trabajo para programadores. ¿Lo sabías?

**Resolución: [ch22_countDecorations.js](ch22_countDecorations.js)** 



## Desafío 23 - [¿Puedes reconfigurar las fábricas para no parar de crear regalos?](https://adventjs.dev/challenges/23)

Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

Pensábamos que no íbamos a llegar pero **Jelf Bezos** ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un **string**. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

Pero **tiene limitaciones 🥲**: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos **una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas** mencionadas. Lo mejor es que veamos un ejemplo:

```js
const from = 'BAL'
const to   = 'LIB'
const canReconfigure(from, to) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

const from = 'CON'
const to   = 'JUU'
const canReconfigure(from, to) // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

const from = 'XBOX'
const to   = 'XXBO'
const canReconfigure(from, to) // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

const from = 'XBOX'
const to   = 'XOBX'
const canReconfigure(from, to) // true

const from = 'MMM'
const to   = 'MID'
cons canReconfigure(from, to) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

const from = 'AA'
const to   = 'MID'
cons canReconfigure(from, to) // false -> no tiene la misma longitud
```

**Resolución: [ch23_canReconfigure.js](ch23_canReconfigure.js)** 



## Desafío 24 - [Comparando árboles de Navidad](https://adventjs.dev/challenges/24)

El abuelo 👴 dice que ve todos los árboles de navidad iguales... La abuela 👵, en cambio, piensa que no. Que todos los árboles de navidad son distintos...

Vamos a hacer una función que nos diga si dos árboles de navidad son iguales. Para ello, vamos a comparar **[los árboles que ya creamos en el reto 22](https://adventjs.dev/challenges/22)**.

Tenemos que ver si ambos árboles tienen la misma estructura y los mismos valores en todas las ramas. Aquí tienes unos ejemplos:

```js
const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true
```

El cuñado 🦹‍♂️, que se las sabe todas, me ha dicho que tenga cuidado porque **el truco del JSON.stringify puede no funcionar...** ya que los árboles pueden ser el mismo pero el orden de representación de las ramas izquierda y derecha puede ser inversa...

**Resolución: [ch24_checkIsSameTree.js](ch24_checkIsSameTree.js)** 



## Desafío 25 - [El último juego y hasta el año que viene 👋](https://adventjs.dev/challenges/25)

Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

Un ratoncillo llamado *midurat* 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto [los vídeos de midudev](https://midu.tube/), va a crear una función para saber si su próximo movimiento es correcto o no ✅.

El ratoncillo se puede mover en 4 direcciones: *up, down, left, right* y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

- Un espacio vacío es que no hay nada
- Una `m` es el ratón
- Un `*` es la comida



Vamos a ver unos ejemplos:

```js
const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false
```

¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!

**Resolución: [ch25_canMouseEat.js](ch25_canMouseEat.js)** 