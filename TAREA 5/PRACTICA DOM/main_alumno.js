/* =========================================================================
   Tema 5 – Práctica DOM - Archivo del Alumno
   
   INSTRUCCIONES:
   1. Completa la funcionalidad de cada ejercicio siguiendo los comentarios
   2. Usa solo JavaScript vanilla (sin librerías externas)
   3. Sigue el patrón del Ejercicio 1 que está completado como ejemplo
   ========================================================================= */

// 1. Seleccionamos los elementos que vamos a usar
const contenido = document.getElementById('contenido');
const btnEj1 = document.getElementById('btn-ej1');

// 2. Añadimos el evento click al botón
btnEj1.addEventListener('click', function () {
   // Cambiar el texto del primer párrafo
   const primerParrafo = contenido.querySelector('p');
   primerParrafo.textContent = 'Texto modificado por JavaScript';

   // Añadir la clase "resaltado" al segundo párrafo
   const segundoParrafo = contenido.querySelectorAll('p')[1];
   if (segundoParrafo) {
      segundoParrafo.classList.add('resaltado');
   }

   // Cambiar el color del tercer párrafo
   const tercerParrafo = contenido.querySelectorAll('p')[2];
   if (tercerParrafo) {
      tercerParrafo.style.color = 'red';
   }
});

/* ============================================================
   TODO: Ejercicio 2 – Crear y eliminar elementos del DOM
   ============================================================ */

// TODO: 1. Seleccionar los botones con IDs: btn-add y btn-remove
const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');
// TODO: 2. Crear función para el botón "Añadir párrafo"
//         - Crear un nuevo elemento <p>
//         - Asignar texto: "Nuevo párrafo añadido"
//         - Añadir clase Bootstrap: "mb-2"
//         - Agregarlo al contenedor #contenido
//         - Aplicar eventos hover (función del ejercicio 3)
btnAdd.addEventListener('click', function () {
   const nuevoParrafo = document.createElement('p');
   nuevoParrafo.textContent = 'Nuevo párrafo añadido';
   nuevoParrafo.classList.add('mb-2');
   contenido2.appendChild(nuevoParrafo);
   aplicarHover(nuevoParrafo);
});

// TODO: 3. Crear función para el botón "Eliminar párrafo"
//         - Buscar todos los párrafos en #contenido
//         - Si hay párrafos, eliminar el último
btnRemove.addEventListener('click', function () {
   const parrafos = contenido2.getElementsByTagName('p');
   if (parrafos.length > 0) {
      const ultimoParrafo = parrafos[parrafos.length - 1];
      contenido2.removeChild(ultimoParrafo);
   }
});

/* ==========================================
   TODO: Ejercicio 3 – Eventos de ratón (hover)
   ========================================== */

// TODO: 1. Crear función para cuando entra el ratón
//         - Cambiar backgroundColor a '#e7f5ff'
// TODO: 2. Crear función para cuando sale el ratón
//         - Restaurar backgroundColor a ''
// TODO: 3. Crear función para aplicar eventos hover a un párrafo
//         - Usar addEventListener para 'mouseover' y 'mouseout'
// TODO: 4. Aplicar hover a todos los párrafos existentes inicialmente
//  Función que se ejecuta cuando el ratón entra en un párrafo
function entrarHover(parrafo) {
   parrafo.style.backgroundColor = '#e7f5ff';
}

//  Función que se ejecuta cuando el ratón sale de un párrafo
function salirHover(parrafo) {
   parrafo.style.backgroundColor = '';
}

//  Función que aplica los eventos a un párrafo
function aplicarHover(parrafo) {
   parrafo.addEventListener('mouseover', function () {
      entrarHover(parrafo);
   });
   parrafo.addEventListener('mouseout', function () {
      salirHover(parrafo);
   });
}

// Aplicar hover a todos los párrafos de #contenido
const parrafos = document.getElementById('contenido').getElementsByTagName('p');
for (let i = 0; i < parrafos.length; i++) {
   aplicarHover(parrafos[i]);
}
// Aplicar hover a todos los párrafos de #contenido3
const parrafos3 = document.getElementById('contenido3').getElementsByTagName('p');
for (let i = 0; i < parrafos3.length; i++) {
   aplicarHover(parrafos3[i]);
}

/* ======================================================
   TODO: Ejercicio 4 – Trabajar con inputs y formularios
   ====================================================== */

// TODO: 1. Seleccionar elementos: input (#nuevoTexto), botón (#btn-cambiar), mensaje error (#msg-ej4)

// TODO: 2. Crear función para el botón "Cambiar texto"
//         - Obtener valor del input (usar .trim())
//         - Si está vacío: mostrar mensaje error, enfocar input
//         - Si tiene texto: ocultar error, cambiar texto del primer párrafo


// TODO: 1. Seleccionar elementos: input (#nuevoTexto), botón (#btn-cambiar), mensaje error (#msg-ej4)
const inputNuevoTexto = document.getElementById('nuevoTexto');
const btnCambiar = document.getElementById('btn-cambiar');
const msgEj4 = document.getElementById('msg-ej4');

// Seleccionar el contenedor del div 4
const contenido4 = document.getElementById('ej4');

// TODO: 2. Crear función para el botón "Cambiar texto"
//         - Obtener valor del input (usar .trim())
//         - Si está vacío: mostrar mensaje error, enfocar input
//         - Si tiene texto: ocultar error, cambiar texto del primer párrafo
btnCambiar.addEventListener('click', function () {
   const nuevoTexto = inputNuevoTexto.value.trim();
   if (nuevoTexto === '') {
      msgEj4.classList.remove('d-none');
      inputNuevoTexto.focus();
   } else {
      msgEj4.classList.add('d-none');
      const primerParrafo = contenido4.getElementsByTagName('p')[0];
      primerParrafo.textContent = nuevoTexto;
   }
});

/* ===================================================
   TODO: Ejercicio 5 – Lista de tareas (To-Do List)
   =================================================== */

// TODO: 1. Seleccionar elementos: input (#tareaInput), botones (#btn-tarea, #btn-borrar-completadas), lista (#listaTareas)

// TODO: 2. Función para añadir tarea
//         - Obtener texto del input
//         - Si no está vacío: crear <li>, añadir texto, agregar evento click para toggle clase 'completada'
//         - Limpiar input y enfocar

// TODO: 3. Función para borrar tareas completadas
//         - Buscar todos los <li> con clase 'completada'
//         - Eliminar cada uno de la lista
const tareaInput = document.getElementById('tareaInput');
const btnTarea = document.getElementById('btn-tarea');
const btnBorrarCompletadas = document.getElementById('btn-borrar-completadas');
const listaTareas = document.getElementById('listaTareas');

btnTarea.addEventListener('click', function () {
   const textoTarea = tareaInput.value.trim();
   if (textoTarea !== '') {
      const nuevaTarea = document.createElement('li');
      nuevaTarea.textContent = textoTarea;
      nuevaTarea.addEventListener('click', function () {
         nuevaTarea.classList.toggle('completada');
      });
      listaTareas.appendChild(nuevaTarea);
      tareaInput.value = '';
      tareaInput.focus();
   }
});

btnBorrarCompletadas.addEventListener('click', function () {
   const tareasCompletadas = listaTareas.getElementsByClassName('completada');
   while (tareasCompletadas.length > 0) {
      listaTareas.removeChild(tareasCompletadas[0]);
   }
});

/* ===================================================
   CONSEJOS PARA LOS ALUMNOS:
   
   - Usa console.log() para depurar tu código
   - Prueba cada función por separado antes de continuar
   - Recuerda usar IDs únicos para cada elemento
   - Las clases CSS ya están definidas en custom.css
   - Si algo no funciona, revisa la consola del navegador
   =================================================== */
