/* 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos). */

function mostrarTabla() {
    let num = parseInt(prompt("Introduce un número:"));

    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        console.log(num +" * "+ i +" = "+ resultado);
    }
}

mostrarTabla();



/* 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0. */

let acumulado = 0
let i
function numerosAcumulados() {
    while (i != 0) {
        i = parseInt(prompt('Ingrese un número'))
        acumulado += i
        console.log("La suma de los números ingresados es: " + acumulado);

    }
    console.log("Terminó el bucle, la total es: " + acumulado)

}

/*3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
    variable guardar un numero que este en el rango 1 - 100. La persona debera poder
    ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
    valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
    nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
    cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado.*/


let adivinanza = 34
for (let i = 1; number = adivinanza; i++) {
    number = parseInt(prompt("Ingresa un número entre 1 y 100"))

    if (number === adivinanza) {
        console.log("Ganaste")
        break

    } else if (number > adivinanza) {
        alert("Tu numero es mayor, ingresa otro número")

    } else {
        alert("Tu número es menor ingresa otro número")
    }

}

/* 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo.  */


let numeroComprobar = parseInt(prompt("Ingresa un número a comprobar"))
function esPrimo() {
    if (numeroComprobar <= 1) {
        return false
    }
    for (let i = 1; i <= Math.sqrt(numeroComprobar); i++) {
        if (numeroComprobar % i === 0) {
            return false

        }
    }
    return true
}

if (esPrimo(numeroComprobar)) {
    console.log( numeroComprobar +` es un número primo.`)
} else {
    console.log( numeroComprobar +` no es un número primo.`);
}


/* 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.  */

let numeroDividir = (prompt("Ingresa un número a dividir"))
function dividir() {
    for (let i = 1; i <= numeroDividir; i++) {
        if (numeroDividir % i === 0) {
            console.log(i)
        }
    }
}

dividir(numeroDividir)

/* 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array. */


let perros = ['Puglet', 'Blacky', 'Chuga', 'Marceline', 'Terry', 'Dragón', 'Aurin', 'Bambú', 'Impa', 'Pichón']
function verPerros() {
    for (let i = 0; i < 10; i++) {
        console.log(perros[i])
    }
}
console.log(verPerros())

/*  7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos. */

let numerosADoblar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function doblarNumeros(numerosADoblar) {
    for (let i = 0; i < numerosADoblar.length; i++) {
        let doble = numerosADoblar[i] * 2;
        console.log(doble)
    }
}

doblarNumeros(numerosADoblar)

/*8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array */

let familia = [
    {
        nombre: "Felipe",
        edad: 32,
        color: "Rojo",
        ocupacion: "Historiador"
    },
    {
        nombre: "Felipe",
        edad: 63,
        color: "verde",
        ocupacion: "Comerciante"
    },
    {
        nombre: "María",
        edad: 61,
        color: "Amarillo",
        ocupacion: "Enfermera retirada"
    },
    {
        nombre: "Jocelyn",
        edad: 25,
        color: "Turquesa",
        ocupacion: "Veterinaria"
    },
    {
        nombre: "Miriam",
        edad: 36,
        color: "Azul",
        relacion: "Amarillo",
        ocupacion: "Publicista"
    }
]

for (let i = 0; i < familia.length; i++) {
    let miembroFamilia = familia[i]
    console.log("Hola, soy "+familia[i].nombre+" mi edad es "+familia[i].edad+". mi color favorito es: "+familia[i].color+". Soy: "+ocupacion[1].ocupacion+"."  );
}


/* 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares.

*/

let numerosParesImpares = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10]
let impares = numerosParesImpares.filter(numero => numero % 2 !== 0)
for (let i = 0; i < numerosParesImpares.length; i++) {
    console.log('Los números impares son: ' + impares)
}


/* 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0.
*/


let sumaPares = 0;
let sumaImpares = 0;

while (true) {
    const numero = parseInt(prompt('Ingresa un número (0 para finalizar): '));

    if (numero === 0) {
        break;
    } else if (numero % 2 === 0) {
        sumaPares += numero;
    } else {
        sumaImpares += numero;
    }
}

console.log("Suma de números pares: " +sumaPares);
console.log("Suma de números impares: " +sumaImpares);

/* 
11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande.
 */
function encontrarNumeroMasGrande(busquedaNumeroMayor) {
    return Math.max(...busquedaNumeroMayor);
}
let busquedaNumeroMayor = [12, 313, 2, 3, 123, 4, 183, 138, 348, 913]

let numeroMayor = Math.max(...busquedaNumeroMayor)
console.log("El número más grande es: " +numeroMayor)

/* 
12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande.
 */

function encontrarNumeroMasGrande(busquedaNumeroMenor) {
    return Math.max(...busquedaNumeroMenor);
}
let busquedaNumeroMenor = [12, 313, 2, 3, 123, 4, 183, 138, 348, 913]

let numeroMenor = Math.min(...busquedaNumeroMenor)
console.log("El número más chico es: " +numeromenor)


/*13. 
 Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora.

*/
/*
function obtenerEleccion() {
    return prompt("Ingresa piedra, papel o tijeras");
}
function determinarGanador(eleccion1, eleccion2) {
    if (eleccion1 === eleccion2) {
        return "empate"
    } else if ((eleccion1 === "piedra" && eleccion2 === "tijeras") ||
        (eleccion1 === "papel" && eleccion2 === "piedra") ||
        (eleccion1 === "tijeras" && eleccion2 === "papel")
    ) {
        return "jugador1";
    } else {
        return "jugador2";
    }
}

*/
let jugador1 = prompt("Ingrese el nombre del jugador 1")
let jugador2 = prompt("Ingrese el nombre del jugador 2")


let ganador = false
while (ganador == false) {
    juegoJugador1 = (prompt("Ingresa:  piedra, papel o tijeras (escribe con minúsculas"))
    juegoJugador2 = (prompt("Ingresa:  piedra, papel o tijeras( escribe con minúsculas"))
    if (juegoJugador1 == "piedra" && juegoJugador2 == "tijeras" || juegoJugador1 == "papel" && juegoJugador2 == "piedra" || juegoJugador1 == "tijeras" && juegoJugador2 == "papel") {
        ganador = true
        console.log("Gana el jugador 1 " + jugador1)
        
    } else if (juegoJugador2 == "piedra" && juegoJugador1 == "tijeras" || juegoJugador2 == "papel" && juegoJugador1 == "piedra" || juegoJugador2 == "tijeras" && juegoJugador1 == "papel") {
        ganador = true
        console.log("Gana el jugador 2 " + jugador2)
        
    } else {
        console.log("Empate. Vuelvan a elegir: piedra, papel o tijeras")
    }

}



/*14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.*/
let asteriscos = "* "
for (let i = 1; i <=5; i++) {
    console.log (asteriscos)
    asteriscos+="*"

}



/*15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido. */

let asteriscos2 = " * * * * *"
for (let i = 5; i >=1; i--) {
    console.log (asteriscos2)
asteriscos2 = asteriscos2.substring(0, asteriscos2.length -2)
}

/*16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR */



let arregloDesordenado = [12, 313, 54, 67, 123, 4, 183, 138, 348, 913]
let longitud = arregloDesordenado.length; 
console.log("Números desordenados:", arregloDesordenado);

for (let iteracion = 0; iteracion < longitud - 1; iteracion++) {
    for (let interacion2 = 0; interacion2< longitud - iteracion - 1; interacion2++) {
        if (arregloDesordenado[interacion2] > arregloDesordenado[interacion2 + 1]) {
         
            let reserva = arregloDesordenado[interacion2];
            arregloDesordenado[interacion2] = arregloDesordenado[interacion2 + 1];
            arregloDesordenado[interacion2 + 1] = reserva;
        }
    }
}


console.log("Números ordenados:", arregloDesordenado);


let lista = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
//let lista = [389, 247, 703, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
let cantidadElementos = lista.length
console.log(lista);
console.log(cantidadElementos);
for (let i = 0; i < cantidadElementos; i++) {
    for (let j = 0; j < cantidadElementos-i; j++) {
        if (lista[j] > lista[j+1] ) {
            let temp = lista[j] // 703
            lista[j] = lista[j+1] // 703 remplamelo por 247
            lista[j+1] = temp
        }  
    }
}
console.log(lista);


