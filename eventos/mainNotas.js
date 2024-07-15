let notas = [{
    id: 1,
    titulo: "Nota de ejemplo 1",
    texto: "Este es el contenido de la primera nota de prueba."
}, {
    id: 2,
    titulo: "Nota de ejemplo 2",
    texto: "Este es el contenido de la segunda nota de prueba."
}
]
let idGlobal = 2; // Inicializar con el ID de la última nota de prueba


const pintarNotas = () => {
    const contenedorNotas = document.getElementById("contenedorNotas");
    contenedorNotas.innerHTML = ""; // Limpiar antes de pintar

    if (notas.length === 0) {
        const mensajeVacio = document.createElement("p");
        mensajeVacio.classList.add("mensaje-vacio");
        mensajeVacio.textContent = "NO HAY NOTAS PARA MOSTRAR";
        contenedorNotas.appendChild(mensajeVacio);
    } else {
        let htmlNotas = "";

        notas.forEach(nota => {
            const idNota = nota.id;
            const tituloNota = nota.titulo;
            const textoNota = nota.texto;
            const realizada = nota.realizada;

            const tarjetaHTML = `
        <div class= "card">
          <div class="nota" id="nota-${idNota}">
            <input type="checkbox" class="checkbox-nota" ${realizada ? 'checked' : ''}>
            <h3>${tituloNota}</h3>
            <p>${textoNota}</p>
            <div class="botones">
              <button>Borrar nota</button>
              <button>Marcar como realizada</button>
            </div>
          </div>
          </div>
        `;

            htmlNotas += tarjetaHTML;
        });

        contenedorNotas.innerHTML = htmlNotas;

        
        // Agregar listeners a los botones de borrar
        const botonesBorrar = document.querySelectorAll(".nota .botones button:nth-child(1)");
        botonesBorrar.forEach(boton => {
            boton.addEventListener("click", borrarNota);
        });

        // Agregar listeners a los botones de marcar como realizada
        const botonesMarcar = document.querySelectorAll(".nota .botones button:nth-child(2)");
        botonesMarcar.forEach(boton => {
            boton.addEventListener("click", marcarRealizada);
        });
    }
};

const guardarNota = () => {
    const titulo = document.getElementById("tituloNota").value;
    const texto = document.getElementById("textoNota").value;

    if (titulo && texto) {
        idGlobal++;
        const nuevaNota = {
            id: idGlobal,
            titulo: titulo,
            texto: texto
        };

        notas.push(nuevaNota);
        pintarNotas();
        limpiarFormulario();
    } else {
        alert("Debes completar el título y el contenido de la nota.");
    }
};

const limpiarFormulario = () => {
    document.getElementById("tituloNota").value = "";
    document.getElementById("textoNota").value = "";
};

