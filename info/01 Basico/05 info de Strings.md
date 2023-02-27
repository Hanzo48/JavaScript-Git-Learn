*Strings*

let cadena = "Hola Mundo";

*PROPIEDADES*

`length` -> *Devuelve la longitud de la cadena*

* 
	cadena.length

*Métodos*

Todos los métodos devuelven una cadena nueva, la cadena original no será modificada.

` toUpperCase() ` -> *Devuleve la cadena a mayúsculas*
* 
	cadena.toUpperCase()

` toLowerCase() ` -> *Devuelve la cadena a minúsculas*
* 
	cadena.toLowerCase()


` indexOf(string) `-> *Devuelve la posición en la que se encuentra el string, si no lo encuentra devuelve -1*

* 
	(cadena.indexOf('o'));
	(cadena.indexOf('Hola'));


` replace(valor a buscar, valor nuevo) ` -> *Remplaza el fragmento de la cadena que le digamos y pone el valor nuevo*

* 
	(cadena.replace('Mundo','Youtube'));


` substring(inicio [,fin]) `  -> *Extrae los caracteres desde inicio hasta fin (el final no se incluye)*

Si no se incluye el fin extrae hasta el final.

* 
	/*(cadena.substring(3));
	(cadena.substring(3, 7));*/


` slice(inicio [,fin]) `-> *Igual que substring pero admite valores negativos, si ponemos valores negativos empezará desde atrás*

Si no se incluye el final extrae hasta el final

	(2,-4) -> Empieza a contar en el tercer caracter y los 4 últimos no los considera

* 
	(cadena.slice(-3));
	(cadena.slice(2));
	(cadena.slice(0,-2));


`trim() `-> *Elimina los espacios al inicio y al final de la cadena*

* 
	let cadena2 = 'Hola youtube, estamos trabajando con cadenas';

	(cadena2.trim());


*--ES6--*

` startsWith(valor [,inicio]) `-> *Sirve para saber si la cadena empieza con ese valor. Devuleve true o false*

* 
	(cadena.startsWith('H')
	(cadena.startsWith('h')

	(cadena.startsWith('M',5)


`endsWith(valor [,longitud])` -> *Sirve para saber si la cadena termina con ese valor. Devuleve true o false*

* 
	(cadena.endsWith('o')
	(cadena.endsWith('a',4)
	(cadena.endsWith('n',8)
	(cadena.endsWith('Mundo')


`includes(valor[,inicio]) `-> *Igual que indexOf pero devuelve true o false*

* 
	(cadena.includes('a',2)
	(cadena.includes('n')
	(cadena.includes('a',5)


` repeat(valor) ` -> *Repite el string el número de veces que le indiquemos.* 

* 
	let cadena3 = 'Hola';

	cadena3.repeat(3)

**Template Strings**

* 
	let nombre = 'Juan';
	let apellido = 'Gómez';
	let edad = 20;

	("Hola " + nombre + " " + apellido + ". Tienes " + (edad+1) + " años.");

	(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);

	(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad+1} años.`);
* 
