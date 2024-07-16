let notas = [{
    id: 1,
    titulo: "Nota de ejemplo 1",
    texto: "Este es el contenido de la primera nota de prueba.",
    realizada: true
}, {
    id: 2,
    titulo: "Nota de ejemplo 2",
    texto: "Este es el contenido de la segunda nota de prueba.",
    realizada: false
},
]
let idGlobal = 2; // ID de la última nota de prueba, control

function pintarNotas() {
    const contenedorNotas = document.getElementById("contenedor-notas");
    contenedorNotas.innerHTML = ""; // Limpiar el contenido previo

    if (notas.length === 0) {
        // Mostrar mensaje si no hay notas
        contenedorNotas.innerHTML = `<p>NO HAY NOTAS PARA MOSTRAR</p>`;
    } else {
        notas.forEach((nota) => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta-nota");
            tarjeta.classList.add("card");
            tarjeta.classList.add("m-2");
            tarjeta.classList.add("justify-content-center");
            tarjeta.innerHTML = `         
              <h5 class="card-title">${nota.titulo}</h5>
              <p class="card-text">${nota.texto}</p>
              <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
              
              <label for="check-${nota.id}">Realizada</label>
              <button class="btn btn-primary" id="btn-borrar-${nota.id}">Borrar nota</button>    
        `;
            contenedorNotas.appendChild(tarjeta);

            const botonBorrar = document.getElementById(`btn-borrar-${nota.id}`);
            botonBorrar.addEventListener("click", () => borrarNota(nota.id));
        });
    }
}

function agregarNota() {
    const titulo = document.getElementById("titulo-nota").value;
    const texto = document.getElementById("texto-nota").value;

    if (titulo && texto) {
        idGlobal++;
        const nuevaNota = {
            id: idGlobal,
            titulo: titulo,
            texto: texto,
            realizada: false,
        };
        notas.push(nuevaNota);
        pintarNotas();

    } else {
        alert("Debes completar ambos campos para crear una nota.");
    }
}

const botonGuardar = document.getElementById("btn-guardar");
botonGuardar.addEventListener("click", agregarNota);

function borrarNota(id) {
    const indice = notas.findIndex((nota) => nota.id === id);
    if (indice !== -1) {
        notas.splice(indice, 1);
        pintarNotas();
    }
}

