// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
  const valor = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');
  // TODO: implementar raizCuadrada(numero)
  function raizCuadrada(valor) {
    if (isNaN(valor) || valor < 0) { // Validación de entrada
      return 'Error: introduce un número válido y no negativo';
    }
    return Math.sqrt(valor); // Cálculo de la raíz cuadrada
  }

  const res = raizCuadrada(valor); // Llamada a la función
  out.textContent = `Resultado: ${res}`;
});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo'; // Valor por defecto o ingresado

  document.getElementById('out-e2').textContent = 'Implementa la función alerta(mensaje) para mostrar un alert en el navegador.';
  function alerta(mensaje) {
    alert(mensaje);
  }
  alerta(msg);
});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {

  // TODO: usa new Function para construir y ejecutar una función que sume a y b
  const a = parseFloat(document.getElementById('a-e3a').value); // Convertir a número
  const b = parseFloat(document.getElementById('a-e3b').value); // Convertir a número
  const out = document.getElementById('out-e3');

  const suma = new Function('a', 'b', 'return a + b;'); // Crear función suma
  const resultado = suma(a, b);
  out.textContent = `Resultado: ${resultado}`;
});

// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {
  // TODO: reproduce el ejemplo en el código editando esta función.
  muestraMensaje(mensaje); // Se llama antes de declarar: mostrará "undefined"

  var mensaje = 'Hola, mundo';

  muestraMensaje(mensaje); // Se llama después: mostrará "Hola, mundo"

  function muestraMensaje(texto) {
    console.log(texto); // Mostrará "undefined" por el hoisting
  }

  // Mostramos en pantalla lo observado
  const out = document.getElementById('out-e4');
  out.textContent = 'Si consultas la consola el valor mostrado antes de la asignación es "undefined" debido al hoisting de var.';
});


// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
  const resultado = (function () {
    console.log('Función autoinvocada');
    return 'valor retornado por la IIFE';
  })();

  const out = document.getElementById('out-e5');
  out.textContent = `Resultado de la función autoinvocada: ${resultado}`;
});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {

  // TODO: define y usa esa función para devolver el resultado
  const a = parseFloat(document.getElementById('a-e6a').value);
  const b = parseFloat(document.getElementById('a-e6b').value);
  const out = document.getElementById('out-e6');

  const dividir = function (a, b) {
    if (b === 0) {
      return 'Error: No se puede dividir por cero';
    }
    return a / b;
  };

  const resultado = dividir(a, b);
  out.textContent = `Resultado: ${resultado}`;
});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {

  // TODO: implementa una función flecha multiplicar = 
  const a = parseFloat(document.getElementById('a-e7a').value);
  const b = parseFloat(document.getElementById('a-e7b').value);
  const out = document.getElementById('out-e7');

  const multiplicar = (a, b) => a * b;
  const resultado = multiplicar(a, b);
  out.textContent = `Resultado: ${resultado}`;
});

// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {
  const out = document.getElementById('out-e8');
  const a = document.getElementById('a-e8').value;

  // TODO: implementar function saludar
  function saludar(nombre = 'Invitado') {
    return `Hola, ${nombre}`;
  }

  const resultado = saludar(a || undefined);
  out.textContent = resultado;
});

// Ejercicio 9 - Funciones anidadas (plantilla)
document.getElementById('run-e9').addEventListener('click', function () {

  // TODO: implementar función externa e interna
  function externa() {
    contador++;
    function interna() {
      console.log(`Valor actual de contador: ${contador}`);
      return contador;
    }
    return interna();
  }

  const resultado = externa();

  const out = document.getElementById('out-e9');
  out.textContent = `Resultado: ${resultado}\nLa función interna puede acceder a "contador" porque forma un closure.
  Esto significa que "interna" recuerda y mantiene acceso al ámbito en el que fue creada, incluso después de que externa() haya terminado su ejecución.`;

});
let contador = 0;

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {

  // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)
  const texto = document.getElementById('a-e10').value;
  const out = document.getElementById('out-e10');

  const longitud = texto.length;
  const mayus = texto.toUpperCase();
  const sinEspacios = texto.trim();
  const indiceMundo = texto.indexOf('Mundo');
  const aleatorio = Math.random().toFixed(4);
  const marcaTiempo = Date.now();

  out.textContent =
    `length: ${longitud}\n` +
    `toUpperCase: '${mayus}'\n` +
    `trim: '${sinEspacios}'\n` +
    `indexOf 'Mundo': ${indiceMundo}\n` +
    `Math.random(): ${aleatorio}\n` +
    `Date.now(): ${marcaTiempo}`;
});
