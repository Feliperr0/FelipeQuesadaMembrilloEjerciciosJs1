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
let idGlobal = 2 // id control

function pintarNotas() {
    const contenedorNotas = document.getElementById("contenedor-notas")
    contenedorNotas.innerHTML = ""

    if (notas.length === 0) {
        // para mostrar mensjr si de notas vacío
        contenedorNotas.innerHTML = `<p>NO HAY NOTAS PARA MOSTRAR</p>`
    } else {
        notas.forEach((nota) => {
            const tarjeta = document.createElement("div")
            tarjeta.classList.add("tarjeta-nota")
            tarjeta.classList.add("card")
            tarjeta.classList.add("m-2")
            tarjeta.classList.add("justify-content-center")
            tarjeta.innerHTML = `         
              <h5 class="card-title">${nota.titulo}</h5>
              <p class="card-text">${nota.texto}</p>
              <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
              
              <label for="check-${nota.id}">Realizada</label>
              <button class="btn btn-primary" id="btn-borrar-${nota.id}">Borrar nota</button>    
        `
            contenedorNotas.appendChild(tarjeta)

            const botonBorrar = document.getElementById(`btn-borrar-${nota.id}`)
            botonBorrar.addEventListener("click", () => borrarNota(nota.id))
        })
    }
}

function agregarNota() {
    const titulo = document.getElementById("titulo-nota").value
    const texto = document.getElementById("texto-nota").value

    if (titulo && texto) {
        idGlobal++
        const nuevaNota = {
            id: idGlobal,
            titulo: titulo,
            texto: texto,
            realizada: false,
        }
        notas.push(nuevaNota)
        pintarNotas()

    } else {
        alert("Debes completar ambos campos para crear una nota.")
    }
}
// habilitar el botod para guardar las notas y que aparezcan en el div contenedor
const botonGuardar = document.getElementById("btn-guardar")
botonGuardar.addEventListener("click", agregarNota)

function borrarNota(id) {
    const indice = notas.findIndex((nota) => nota.id === id)
    if (indice !== -1) {
        notas.splice(indice, 1)
        pintarNotas()
    }
}

// checkbox true - false para checkear => filtrar notas y rayarlas 
function marcarRealizada(id) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].id == id) {
            if (notas[i].realizada) {
                notas[i].realizada = false

            } else {
                notas[i].realizada = true
            }
        }

    }
    console.log(notas)
}


// limpiar formulario
function limpiarFormulario() {
    document.getElementById('titulo-nota').value = ""
    document.getElementById('texto-nota').value = ""
}

// botor para limpiar el los campos de titulo, texto
document.getElementById('btn-limpiar').addEventListener('click', limpiarFormulario)



const inputBusqueda = document.getElementById('busqueda')
const seccionNotas = document.getElementById('contenedor-notas')

inputBusqueda.addEventListener('keyup', () => {
    const textoBusqueda = inputBusqueda.value.toLowerCase()
    const notasFiltradas = notas.filter(notas => {
        return notas.titulo.toLowerCase().includes(textoBusqueda) ||
            notas.texto.toLowerCase().includes(textoBusqueda)
    })

    mostrarNotas(notasFiltradas)
})


const inputCheck = document.getElementById('checkbox-realizada')
inputCheck.addEventListener('click', () => {
    const inputCheckeado = inputCheck.checked
    if (inputCheckeado) {
        const notasCheckeadas = notas.filter(nota => nota.realizada)
        const textoBusqueda = inputBusqueda.value.toLowerCase()
        const notasFiltradas = notasCheckeadas.filter(notas => {
            return notas.titulo.toLowerCase().includes(textoBusqueda) ||
                notas.texto.toLowerCase().includes(textoBusqueda)
        })
        mostrarNotas(notasFiltradas)
    } else {
        const textoBusqueda = inputBusqueda.value.toLowerCase()
        const notasFiltradas = notas.filter(notas => {
            return notas.titulo.toLowerCase().includes(textoBusqueda) ||
                notas.texto.toLowerCase().includes(textoBusqueda)
        })

        mostrarNotas(notasFiltradas)
    }

})


function mostrarNotas(notas) {
    seccionNotas.innerHTML = ''
    notas.forEach(notas => {
        const elementoNota = document.createElement('div')
        elementoNota.classList.add("tarjeta-nota")
        elementoNota.classList.add("card")
        elementoNota.classList.add("m-2")
        elementoNota.classList.add("justify-content-center")
        elementoNota.innerHTML = `<h5 class="card-title">${notas.titulo}</h5>
              <p class="card-text">${notas.texto}</p>
              <input onClick="marcarRealizada(${notas.id})" type="checkbox" ${notas.realizada ? "checked" : ""}>
              
              <label for="check-${notas.id}">Realizada</label>
              <button class="btn btn-primary" id="btn-borrar-${notas.id}">Borrar nota</button>  `
        seccionNotas.appendChild(elementoNota);
        const botonBorrar = document.getElementById(`btn-borrar-${notas.id}`)
        botonBorrar.addEventListener("click", () => borrarNota(notas.id))

    })
}


/*

let mostrarSoloRealizadas = false;

document.getElementById('checkbox-realizada').addEventListener('change', () => {
  mostrarSoloRealizadas = document.getElementById('checkbox-realizada').checked;
  mostrarNotas();
});



console.log(mostrarSoloRealizadas)


function mostrarNotasFiltradas(notasFiltradas) {
    notasFiltradas.forEach(nota => {
      const elementoNota = document.createElement('div');
      elementoNota.classList.add("tarjeta-nota");
      elementoNota.classList.add("card");
      elementoNota.classList.add("m-2");
      elementoNota.classList.add("justify-content-center");
      elementoNota.innerHTML = `
        <h5 class="card-title">${nota.titulo}</h5>
        <p class="card-text">${nota.texto}</p>
        <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
        <label for="check-${nota.id}">Realizada</label>
        <button class="btn btn-primary" id="btn-borrar-${nota.id}">Borrar nota</button>
      `;
      seccionNotas.appendChild(elementoNota);
  
      const botonBorrar = document.getElementById(`btn-borrar-${nota.id}`);
      botonBorrar.addEventListener("click", () => borrarNota(nota.id));
    });
  }


  function mostrarNotas(notas) {
    seccionNotas.innerHTML = '';
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    let notasFiltradas = notas.filter(nota => {
      return nota.titulo.toLowerCase().includes(textoBusqueda) ||
             nota.texto.toLowerCase().includes(textoBusqueda);
    });
  
    if (mostrarSoloRealizadas) {
      notasFiltradas = notasFiltradas.filter(nota => nota.realizada);
    }
  
    mostrarNotasFiltradas(notasFiltradas);
  }

  document.getElementById('checkbox-realizada').addEventListener('change', () => {
    mostrarNotas();
  }); */