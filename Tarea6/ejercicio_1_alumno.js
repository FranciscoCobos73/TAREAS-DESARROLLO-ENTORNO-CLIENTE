/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================

   INSTRUCCIONES:
   1. Completa cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar

   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/

// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================

function ejercicio1() {
    // TODO: Crear un objeto estudiante con las siguientes propiedades:
    // - nombre: "María"
    // - apellidos: "García López"
    // - edad: 20
    // - curso: "2º DAW"
    // - mostrarInfo: function() que retorne HTML con toda la información

    var estudiante = {
        nombre: "María",
        apellidos: "García López",
        edad: 20,
        curso: "2º DAW",
        // TODO: Completar las propiedades del objeto

        mostrarInfo: function () {
            // TODO: Retornar HTML con la información del estudiante
            // Sugerencia: usar template strings o concatenación
            return `<div class="card bg-info"><div class="card-body">
                ${this.nombre} ${this.apellidos}, ${this.edad} años, 
                curso: ${this.curso}.
            </div></div>`; // Cambiar esta línea
        }
    };

    // TODO: Mostrar el resultado en el DOM
    // Pista: usar document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
    document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
}

// ===================================
// EJERCICIO 2: ARRAY DE COLORES            REVISAR
// ===================================

// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"];

function agregarColor() {
    // TODO: Obtener el valor del input con id "color-input"
    var colorInput = document.getElementById("color-input");
    var nuevoColor = colorInput.value.trim();

    // TODO: Agregar el color al array usando push()
    colores.push(nuevoColor);
    // TODO: Limpiar el input
    colorInput.value = "";
    // TODO: Mostrar mensaje de confirmación
    document.getElementById("resultado-ej2").innerHTML =
        "<div class='alert alert-success'>Color '" + nuevoColor + "' agregado.</div>";
}

function eliminarUltimoColor() {
    // TODO: Eliminar el último elemento del array usando pop()
    var eliminado = colores.pop();
    // TODO: Mostrar mensaje indicando qué color se eliminó
    document.getElementById("resultado-ej2").innerHTML =
        "<div class='alert alert-warning'>Color '" + eliminado + "' eliminado.</div>";
    // TODO: Si el array está vacío, mostrar mensaje apropiado
    if (colores.length === 0) {
        document.getElementById("resultado-ej2").innerHTML +=
            "<div class='alert alert-danger'>El array de colores está vacío.</div>";
    }
}

function mostrarColores() {
    // TODO: Mostrar todos los colores del array
    // TODO: Crear HTML con la lista de colores
    // Sugerencia: usar un bucle for para crear la lista
    var html = "<h5>Lista de Colores:</h5><ul>";
    for (var i = 0; i < colores.length; i++) {
        html += "<li>" + colores[i] + "</li>";
    }
    // TODO: Completar el bucle para mostrar los colores
    html += "</ul>";

    document.getElementById("resultado-ej2").innerHTML = html;
}

// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================

var productos = []; // Array que contendrá los objetos producto

function cargarProductos() {
    // TODO: Crear array con al menos 5 objetos producto
    // Cada producto debe tener: nombre, precio, categoria
    productos = [
        // TODO: Completar con objetos producto
        // Ejemplo: { nombre: "Laptop", precio: 899, categoria: "Electrónicos" }
        { nombre: "Microfono Shure", precio: 49.99, categoria: "Microfonia" },
        { nombre: "Auriculares ATX", precio: 29.99, categoria: "Monitorizacion" },
        { nombre: "Monitores Adam", precio: 199.99, categoria: "Monitorizacion" },
        { nombre: "Amplificador Potencia", precio: 69.99, categoria: "Sonorizacion" },
        { nombre: "Mesa Mezclas", precio: 129.99, categoria: "Sonorizacion" }
    ];
    mostrarProductos(productos);
}

function ordenarPorPrecio() {
    // TODO: Ordenar el array productos por precio de menor a mayor
    // Pista: usar el método sort() con función comparadora
    productos.sort(function (a, b) {
        return a.precio - b.precio;
    });
    mostrarProductos(productos);
}

function filtrarProductosCaros() {
    // TODO: Filtrar productos con precio mayor a 50€
    // Pista: usar el método filter()
    var productosCaros = []; // TODO: Implementar el filtro
    productosCaros = productos.filter(function (producto) {
        return producto.precio > 50;
    });
    mostrarProductos(productosCaros);
}

function mostrarProductos(productos) {
    // TODO: Mostrar los productos en formato HTML
    // Crear tarjetas o lista con nombre, precio y categoría

    var html = "";
    // TODO: Recorrer el array y crear HTML para cada producto
    for (var i = 0; i < productos.length; i++) {
        html += `<div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">${productos[i].nombre}</h5>
                        <p class="card-text">Precio: €${productos[i].precio.toFixed(2)}</p>
                        <p class="card-text">Categoría: ${productos[i].categoria}</p>
                    </div>
                 </div>`;
    }

    document.getElementById("resultado-ej3").innerHTML = html;
}

// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================

var estudianteNotas = {
    nombre: "Francisco Cobos",
    notas: [],

    agregarNota: function (nota) {
        // TODO: Validar que la nota esté entre 0 y 10
        if (nota >= 0 && nota <= 10) {
            // TODO: Agregar la nota al array de notas
            this.notas.push(nota);
            document.getElementById("resultado-ej4").innerHTML =
                // TODO: Mostrar mensaje de confirmación
                "<div class='alert alert-success'>Nota " + nota + " agregada.</div>";
        } else {
            document.getElementById("resultado-ej4").innerHTML =
                "<div class='alert alert-danger'>Nota inválida. Debe estar entre 0 y 10.</div>";
        }
    },

    calcularPromedio: function () {
        // TODO: Calcular el promedio de todas las notas
        // TODO: Retornar el promedio redondeado a 2 decimales
        // Pista: usar reduce() o un bucle for
        if (this.notas.length === 0) {
            return 0; //Cambiar esta línea
        } else {
            var suma = 0;
            for (var i = 0; i < this.notas.length; i++) {
                suma += this.notas[i];
            }
            var promedio = suma / this.notas.length;
            return promedio.toFixed(2); // Retorna el promedio redondeado a 2 decimales
        }
    },

    mostrarNotas: function () {
        // TODO: Retornar HTML con todas las notas
        // TODO: Incluir el promedio si hay notas
        document.getElementById("resultado-ej4").innerHTML = ""; // Limpiamos el contenido

        var html = "";
        if (this.notas.length === 0) {
            return "<div class='alert alert-warning'>No hay notas para mostrar.</div>";
        } else {
            for (var i = 0; i < this.notas.length; i++) {
                html += "<li>" + this.notas[i] + "</li>";
            }
        }
        var promedio = this.calcularPromedio();
        return `<div>
                    <h5>Notas:</h5>
                    <ul>${html}</ul>
                    <p><strong>Promedio:</strong> ${promedio}</p>
                </div>`;
    }
};


function agregarNota() {
    // TODO: Obtener el valor del input de nota
    var notaInput = document.getElementById("nota-input");
    // TODO: Convertir a número
    var nuevaNota = parseFloat(notaInput.value);
    // TODO: Llamar al método agregarNota del objeto
    estudianteNotas.agregarNota(nuevaNota);
    // TODO: Limpiar el input
    notaInput.value = "";
    // TODO: Actualizar la visualización
    mostrarNotasEstudiante();
}

function calcularPromedio() {
    // TODO: Llamar al método calcularPromedio
    var promedio = estudianteNotas.calcularPromedio();
    // TODO: Mostrar el resultado en el DOM
    document.getElementById("resultado-ej4").innerHTML +=
        "<div class='alert alert-info'>El promedio de las notas es: " + promedio + "</div>";
}

function mostrarNotasEstudiante() {
    // TODO: Llamar al método mostrarNotas
    var notasEstudiantes = estudianteNotas.mostrarNotas();
    // TODO: Mostrar el resultado en el DOM
    document.getElementById("resultado-ej4").innerHTML += notasEstudiantes;
}

// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

var empleados = [];

function cargarEmpleados() {
    // TODO: Crear array con al menos 6 objetos empleado
    // Cada empleado: nombre, departamento, salario, antiguedad
    empleados = [
        // TODO: Completar con datos de empleados
        { nombre: "Francisco Cobos", departamento: "Mezcla y Master", salario: 9000, antiguedad: 10 },
        { nombre: "Juan Verdegay", departamento: "IT", salario: 3200, antiguedad: 5 },
        { nombre: "Harry Twiman", departamento: "CEO", salario: 2800, antiguedad: 2 },
        { nombre: "Jordi Marquez", departamento: "Marketing", salario: 2000, antiguedad: 6 },
        { nombre: "Pablo Cazorla", departamento: "Administracion", salario: 2500, antiguedad: 4 },
        { nombre: "Manuel Pozo", departamento: "Direccion", salario: 5900, antiguedad: 2 }
    ];
    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    // TODO: Obtener el departamento del input
    var departamento = document.getElementById("departamento-input").value.trim();
    // TODO: Filtrar empleados por departamento
    var empleadosDepto = empleados.filter(function (empleado) {
        return empleado.departamento.toLowerCase() === departamento.toLowerCase();
    });
    // TODO: Mostrar los resultado
    mostrarEmpleados(empleadosDepto)
}

function filtrarSalarioAlto() {
    // TODO: Filtrar empleados con salario > 3000€
    var empleadosAltoSalario = empleados.filter(function (empleado) {
        return empleado.salario > 3000;
    });

    mostrarEmpleados(empleadosAltoSalario);
}

function mostrarEmpleados(arrayEmpleados) {
    // TODO: Mostrar empleados en formato HTML
    var html = "<h4>empleados</h4>";
    for (var i = 0; i < arrayEmpleados.length; i++) {
        var p = arrayEmpleados[i];
        html += `<div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">${p.nombre}</h5>
                        <p class="card-text">Departamento: ${p.departamento}</p>
                        <p class="card-text">Salario: €${p.salario}</p>
                        <p class="card-text">Antigüedad: ${p.antiguedad} años</p>
                    </div>
                 </div>`;
    }
    // TODO: Crear HTML para cada empleado

    document.getElementById("resultado-ej5").innerHTML = html;
}

// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // TODO: Crear array con ciudades españolas
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"];

    // TODO: Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function eliminarDelMedio() {
    // TODO: Usar splice para eliminar elementos del medio
    // TODO: Mostrar qué elementos se eliminaron
    // TODO: Mostrar el array resultante
    var medio = Math.floor(ciudades.length / 2);
    var eliminados = ciudades.splice(medio, 1); // Elimina 1 elemento del medio

    var html = "<h5>Elementos eliminados:</h5>" + eliminados.join(", ") +
        "<h5>Array resultante:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function extraerConSlice() {
    // TODO: Usar slice para extraer una porción del array
    // TODO: Mostrar la porción extraída
    // TODO: Mostrar que el array original no se modifica
    var porcion = ciudades.slice(1, 5); // Extrae desde índice 1 hasta 3
    var html = "<h5>Porción extraída (índices 1 a 4):</h5>" + porcion.join(", ") +
        "<h5>Array original (sin modificar):</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;

}

function buscarMadrid() {
    // TODO: Usar find() para buscar "Madrid"
    var ciudadEncontrada = ciudades.find(function (ciudad) {
        return ciudad === "Madrid";
    });
    // TODO: Usar indexOf() para encontrar su posición
    var indiceMadrid = ciudades.indexOf("Madrid");
    // TODO: Mostrar los resultados
    var html = "";
    if (ciudadEncontrada) {
        html += "<div class='alert alert-success'>Ciudad encontrada: " + ciudadEncontrada + "</div>";
        html += "<div class='alert alert-info'>Índice de Madrid: " + indiceMadrid + "</div>";
    } else {
        html += "<div class='alert alert-danger'>Madrid no se encontró en el array.</div>";
    }
    document.getElementById("resultado-ej6").innerHTML = html;
}

// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// TODO: Crear función constructora Vehiculo
function Vehiculo(marca, modelo, año) {
    // TODO: Asignar propiedades usando this
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0;
    // TODO: Crear método acelerar() que incremente la velocidad
    this.acelerar = function () {
        this.velocidad += 10; // Incrementa la velocidad en 10 km/h
    };
    // TODO: Crear método mostrarInfo() que retorne información
    this.mostrarInfo = function () {
        return `<div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">${this.marca} ${this.modelo} (${this.año})</h5>
                        <p class="card-text">Velocidad actual: ${this.velocidad} km/h</p>
                    </div>
                </div>`;
    };
}

var vehiculos = [];

function crearVehiculos() {
    // TODO: Crear varios objetos usando el constructor
    var vehiculo1 = new Vehiculo("Toyota", "Corolla", 2020);
    var vehiculo2 = new Vehiculo("Honda", "Civic", 2019);
    var vehiculo3 = new Vehiculo("Ford", "Focus", 2018);

    // TODO: Agregar al array vehiculos
    vehiculos = [vehiculo1, vehiculo2, vehiculo3];
    mostrarInfoVehiculos();
}

function acelerarTodos() {
    // TODO: Llamar al método acelerar() de todos los vehículos
    for (var i = 0; i < vehiculos.length; i++) {
        vehiculos[i].acelerar();
    }
    // TODO: Actualizar la visualización
    mostrarInfoVehiculos();
}

function mostrarInfoVehiculos() {
    // TODO: Mostrar información de todos los vehículos
    var html = "";
    // TODO: Recorrer array y mostrar info de cada vehículo
    for (var i = 0; i < vehiculos.length; i++) {
        html += vehiculos[i].mostrarInfo();
    }
    document.getElementById("resultado-ej7").innerHTML = html;
}

// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================

var matriz = [];

function crearMatriz() {
    // TODO: Crear matriz 3x3 con números aleatorios
    // Pista: usar bucles anidados y Math.random()
    matriz = [];
    for (var i = 0; i < 3; i++) {
        var fila = [];
        for (var j = 0; j < 3; j++) {
            var numeroAleatorio = Math.floor(Math.random() * 30); // Números entre 0 y 30
            fila.push(numeroAleatorio);
        }
        matriz.push(fila);
    }
    mostrarMatriz();
}

function sumarDiagonal() {
    // TODO: Calcular la suma de la diagonal principal
    var suma_diagonal = 0;
    for (var i = 0; i < 3; i++) {
        suma_diagonal = suma_diagonal + matriz[i][i];
    }
    // TODO: Mostrar el resultado
    document.getElementById("resultado-ej8").innerHTML +=
        "<div class='alert alert-info'>La suma de la diagonal es :" + suma_diagonal + "</div>";
}

function mostrarMatriz() {
    // TODO: Mostrar la matriz en formato tabla HTML
    var html = "<h5>Matriz 3x3:</h5><table class='table table-bordered'>";
    for (var i = 0; i < matriz.length; i++) {
        html += "<tr>";
        for (var j = 0; j < matriz[i].length; j++) {
            html += "<td>" + matriz[i][j] + "</td>";
        }
        html += "</tr>";
    }
    // TODO: Crear filas y celdas de la tabla
    html += "</table>";
    document.getElementById("resultado-ej8").innerHTML = html;
}


// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

var numeros = [];

function crearArrayNumeros() {
    // TODO: Crear array con números del 1 al 10
    numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // TODO: Completar

    mostrarArray("Array original", numeros);
}

function duplicarConMap() {
    // TODO: Usar map() para duplicar todos los números
    var duplicados = []; // TODO: Implementar map
    duplicados = numeros.map(function (num) {
        return num * 2;
    });
    mostrarArray("Números duplicados", duplicados);
}

function filtrarPares() {
    // TODO: Usar filter() para obtener solo números pares
    // TODO: Implementar filter
    var pares = numeros.filter(function (num) {
        return num % 2 === 0;
    });
    mostrarArray("Números pares", pares);
}

function sumarConReduce() {
    // TODO: Usar reduce() para sumar todos los números
    var suma = 0; // TODO: Implementar reduce
    suma = numeros.reduce(function (suma, num) {
        return suma + num;
    });
    var html = "";
    document.getElementById("resultado-ej9").innerHTML = html;
    document.getElementById("resultado-ej9").innerHTML +=
        "<div class='alert alert-success'>Suma total: " + suma + "</div>";
}

function mostrarArray(titulo, array) {
    var html = "<h6>" + titulo + ":</h6>" + array.join(", ") + "<br>";
    document.getElementById("resultado-ej9").innerHTML = html;
}

// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

var biblioteca = [];

function agregarLibro() {
    // TODO: Obtener valores de los inputs
    var titulo = document.getElementById("libro-titulo").value.trim(); // TODO: Obtener del input
    var autor = document.getElementById("libro-autor").value.trim();  // TODO: Obtener del input
    var año = parseInt(document.getElementById("libro-year").value); // TODO: Obtener y convertir a número
    var genero = document.getElementById("libro-genero").value; // TODO: Obtener del select

    // TODO: Validar que todos los campos estén completos
    if (titulo === "" || autor === "" || isNaN(año) || genero === "") {
        document.getElementById("resultado-ej10").innerHTML =
            "<div class='alert alert-danger'>Por favor, complete todos los campos.</div>";
        return;
    } else {
        document.getElementById("resultado-ej10").innerHTML = "";
    }

    // TODO: Crear objeto libro y agregarlo a la biblioteca
    var libro = {
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero
    }
    biblioteca.push(libro); // TODO: Agregar el libro al array biblioteca

    // TODO: Limpiar los inputs
    var inputs = document.querySelectorAll("#libro-titulo, #libro-autor, #libro-year, #libro-genero");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    // TODO: Mostrar mensaje de confirmación
    var html = "<div class='alert alert-success'>El libro de " + titulo + ' fue agregado correctamente</div>';
    document.getElementById("resultado-ej10").innerHTML = html;
    // TODO: Actualizar visualización
    mostrarBiblioteca();
}

function mostrarBiblioteca() {
    // TODO: Mostrar todos los libros de la biblioteca
    mostrarLibros(biblioteca);
}

function ordenarPorTitulo() {
    // TODO: Ordenar libros por título alfabéticamente
    var librosOrdenados = []; // TODO: Implementar sort
    librosOrdenados = biblioteca.sort(function (a, b) {
        if (a.titulo < b.titulo) {
            return -1;
        }
    })
    mostrarLibros(librosOrdenados);
}

function filtrarPorGenero() {
    // TODO: Obtener género seleccionado
    // TODO: Filtrar libros por género
    var generoSelec = document.getElementById("libro-genero").value;

    var librosFiltrados = []; // TODO: Implementar filter
    librosFiltrados = biblioteca.filter(function (libro) {
        return libro.genero === generoSelec;
    });

    mostrarLibros(librosFiltrados);
}

function librosRecientes() {
    // TODO: Filtrar libros publicados después del 2020
    var recientes = []; // TODO: Implementar filter
    recientes = biblioteca.filter(function (libro) {
        return libro.año > 2020;
    });
    mostrarLibros(recientes);
}

// Función para eliminar un libro por índice
function eliminarLibro(indice) {
    if (confirm("¿Seguro que deseas eliminar este libro?")) {
        biblioteca.splice(indice, 1); // elimina 1 libro en la posición indicada
        mostrarBiblioteca(); // actualiza la vista
        document.getElementById("resultado-ej10").insertAdjacentHTML(
            "afterbegin",
            "<div class='alert alert-warning'>Libro eliminado correctamente.</div>"
        );
    }
}


function mostrarLibros(arrayLibros) {
    // TODO: Mostrar libros en formato de tarjetas HTML
    var html = "";

    if (arrayLibros.length === 0) {
        html = "<div class='alert alert-warning'>No hay libros para mostrar</div>";
    } else {
        // TODO: Crear HTML para cada libro
        for (var i = 0; i < arrayLibros.length; i++) {
            var libro = arrayLibros[i];
            html += `<div class="card mb-2">
                        <div class="card-body">
                            <h5 class="card-title">${libro.titulo}</h5>
                            <p class="card-text">Autor: ${libro.autor}</p>
                            <p class="card-text">Año: ${libro.año}</p>
                            <p class="card-text">Género: ${libro.genero}</p>
                            <button class="btn btn-danger btn-sm" data-indice="${i}">Eliminar</button> <!-- NUEVO -->
                        </div>
                     </div>`;
        }
    }

    document.getElementById("resultado-ej10").innerHTML = html;

    // Asignar evento a cada botón eliminar sin tocar el HTML
    var botonesEliminar = document.querySelectorAll("#resultado-ej10 .btn-danger");
    for (var i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener("click", function () {
            var indice = this.getAttribute("data-indice");
            eliminarLibro(indice);
        });
    }
}

// ===================================
// EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1
    document.getElementById("btn-ej1").addEventListener("click", ejercicio1);

    // Ejercicio 2
    document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
    document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
    document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);

    // Ejercicio 3
    document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
    document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
    document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);

    // Ejercicio 4
    document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
    document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
    document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);

    // Ejercicio 5
    document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
    document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
    document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);

    // Ejercicio 6
    document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
    document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
    document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
    document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);

    // Ejercicio 7
    document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
    document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
    document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);

    // Ejercicio 8
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);

    // Ejercicio 9
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);

    // Ejercicio 10
    // TODO: Añadir event listeners para los botones del ejercicio 10
    document.getElementById("btn-agregar-libro").addEventListener("click", agregarLibro);
    document.getElementById("btn-mostrar-biblioteca").addEventListener("click", mostrarBiblioteca);
    document.getElementById("btn-ordenar-titulo").addEventListener("click", ordenarPorTitulo);
    document.getElementById("btn-filtrar-genero").addEventListener("click", filtrarPorGenero);
    document.getElementById("btn-libros-recientes").addEventListener("click", librosRecientes);

});

/* ===================================
   FIN DEL ARCHIVO
   
   RECORDATORIO FINAL:
   - Completa cada TODO siguiendo las instrucciones
   - Usa sintaxis tradicional de JavaScript (no ES6+)
   - Testea cada función antes de continuar
   - Todas las salidas deben ir al DOM, no a la consola
   - ¡Practica y diviértete programando!
   ===================================
*/